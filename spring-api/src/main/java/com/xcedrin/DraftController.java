package com.xcedrin;

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
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DraftController {
	
	@Autowired
    private CloudantClient client;
	
	private Database draft_db;
	
	@PostConstruct
	public void initialize() {
    	System.out.println("----- Initialize Draft DB -----");
    	
    	draft_db = client.database("draft_db", false);
	}
	
	// create a new draft
	@GetMapping("/drafts")
    public @ResponseBody List<DraftOutput> getAllDrafts() throws IOException {
    	System.out.println("----- GET Drafts -----");

    	List<DraftOutput> allDocs = draft_db.getAllDocsRequestBuilder().includeDocs(true).build().getResponse().getDocsAs(DraftOutput.class);
		return allDocs;
    }
	
	// create a new draft
	@PostMapping("/drafts")
    public @ResponseBody String createDemand(@RequestBody Draft draft) {
    	System.out.println("----- POST Demand -----");

    	// TODO
    	// determine time draft was created: created_at
    	// automatically set stage to "draft"
    	
		//Response response = draft_db.post(??);
		//String id = response.getId();
		//return id;
    	return "createDemand";
    }
	
	// update draft stage given its id
	@PutMapping("/drafts/{draft_id}")
    public @ResponseBody String updateDraftStage(@PathVariable String draft_id) {
    	System.out.println("----- PUT Update Draft Stage -----");
    	// TODO
		return "updateDraftStage";
    }
}
