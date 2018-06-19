package com.xcedrin.demand;

import com.cloudant.client.api.CloudantClient;
import com.cloudant.client.api.Database;
import com.cloudant.client.api.model.Document;
import com.cloudant.client.api.model.Response;
import com.cloudant.client.api.views.AllDocsRequest;
import com.cloudant.client.api.views.AllDocsResponse;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

/*
 * NOTES:
 *  - If you need access to the actual http request, use RequestEntity<String> request
 * 	  in function arguments.
 */

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DemandController {
	
	// CloudantProxy cloudant = new CloudantProxy();
	@Autowired
    private CloudantClient client;
	
	private Database db, demand_db;
	
	@PostConstruct
	public void initialize() {
    	System.out.println("----- Initialize DB -----");
    	
    	db = client.database("test_db", false);
    	demand_db = client.database("demand_db", false);
	}
	
//    @GetMapping("/")
//	public @ResponseBody List<TestDemand> getAll() throws IOException {
//    	System.out.println("----- Test API -----");
//
//    	List<TestDemand> allDocs = db.getAllDocsRequestBuilder().includeDocs(true).build().getResponse().getDocsAs(TestDemand.class);
//		return allDocs;
//	}
	
	// create a new demand/requisition
	@PostMapping("/demands")
    public @ResponseBody String createDemand(@RequestBody Demand demand) {
    	System.out.println("----- POST Demand -----");

		Response response = demand_db.post(demand);
		String id = response.getId();
		return id;
    }
	
	// returns demand for all of the BUs
	@GetMapping("/demands")
    public @ResponseBody List<DemandOutput> getAllDemand() throws IOException {
    	System.out.println("----- GET All Demand -----");

		List<DemandOutput> allDocs = demand_db.getAllDocsRequestBuilder().includeDocs(true).build().getResponse().getDocsAs(DemandOutput.class);
		return allDocs;
    }
	
	// delete demand given its id
	@DeleteMapping("/demands/{demand_id}")
    public ResponseEntity<?> deleteDemand(@PathVariable String demand_id) {
    	System.out.println("----- DELETE Demand -----");
    	DemandOutput demand = demand_db.find(DemandOutput.class, demand_id);
		Response remove = demand_db.remove(demand.getId(), demand.getRev());
		return new ResponseEntity<String>(remove.getReason(), HttpStatus.valueOf(remove.getStatusCode()));
    }
	
	// returns demand for BU with name "bu_name"
	@GetMapping("/demands/bus/{bu_name}")
    public @ResponseBody List<DemandOutput> getAllDemanForBU(@PathVariable String bu_name) throws IOException {
    	System.out.println("----- GET Demand For BU-----");
    	
    	ObjectMapper mapper = new ObjectMapper(); 
    	ObjectNode bu = mapper.createObjectNode();
    	bu.put("bu", bu_name);
    	ObjectNode selector = mapper.createObjectNode();
    	selector.set("selector", bu);

    	String selectorJson = mapper.writeValueAsString(selector);
    	
		List<DemandOutput> docs = demand_db.findByIndex(selectorJson, DemandOutput.class);
		return docs;
    }
	
	// returns demand for drafts with id "draft_id"
	@GetMapping("/demands/drafts/{draft_id}")
    public @ResponseBody List<DemandOutput> getAllDemanForDraft(@PathVariable String draft_id) throws IOException {
    	System.out.println("----- GET Demand For BU-----");
    	
    	ObjectMapper mapper = new ObjectMapper(); 
    	ObjectNode draft = mapper.createObjectNode();
    	draft.put("draft_id", draft_id);
    	ObjectNode selector = mapper.createObjectNode();
    	selector.set("selector", draft);

    	String selectorJson = mapper.writeValueAsString(selector);
    	
		List<DemandOutput> docs = demand_db.findByIndex(selectorJson, DemandOutput.class);
		return docs;
    }
}





