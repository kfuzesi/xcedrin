package com.xcedrin;

import java.util.Arrays;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class CloudantProxy {
	
	private String baseURL;
	private String demandDB;
	private String draftDB;
	private ObjectMapper mapper;
	private RestTemplate restTemplate;
	
	public CloudantProxy(String url, String demand_db, String draft_db) {
		baseURL = url;
		demandDB = demand_db;
		draftDB = draft_db;
		mapper = new ObjectMapper();
		restTemplate = new RestTemplate();
	}
	
	public ObjectNode postDemand(Demand demand) throws JsonProcessingException {
		String endpoint = baseURL + "/" + demandDB;
		
		ObjectNode payload = mapper.valueToTree(demand);
		
		// set payload and headers
		HttpEntity<String> entity = new HttpEntity<String>(
				mapper.writeValueAsString(payload), // here is the JSON body
				_getHeaders());
				
		return restTemplate.postForObject(endpoint, entity, ObjectNode.class);
	}
	
	public ObjectNode getAllDemand() throws JsonProcessingException {
		String endpoint = baseURL + "/" + demandDB + "/_all_docs";
				
		// set payload and headers
		HttpEntity<String> entity = new HttpEntity<String>(
				mapper.writeValueAsString(""), // here is the JSON body
				_getHeaders());
				
		return restTemplate.getForObject(endpoint, ObjectNode.class, entity);
	}
	
	private HttpHeaders _getHeaders() {
		HttpHeaders headers = new HttpHeaders();
	    headers.setContentType(MediaType.APPLICATION_JSON);
	    headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
	    return headers;
	}


}

class Demand {
	String track;
	String profile;
	String speciality;
	String description;
}
