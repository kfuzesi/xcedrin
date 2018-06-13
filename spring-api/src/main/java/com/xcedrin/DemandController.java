package com.xcedrin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

/*
 * NOTES:
 *  - If you need access to the actual http request, use RequestEntity<String> request
 * 	  in function arguments.
 */

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class DemandController {
	
	// DEMAND APIs
	
	// create a new demand/requisition
	@PostMapping("/demands")
    public ResponseEntity<?> createDemand(@RequestBody String payload) {
    	return ResponseEntity.ok("createDemand\n");
    }
	
	// returns demand for all of the BUs
	@GetMapping("/demands")
    public ResponseEntity<?> getAllDemand(@RequestBody String payload) {
    	return ResponseEntity.ok("getAllDemand\n");
    }
	
	/* Not sure if we need this one nor if this is correct API design
	 * We could also just get all demand and then filter by BU id
	 
	// returns demand for a specific BU
	@GetMapping("/demands")
    public ResponseEntity<?> getAllBUDemand(@RequestBody String payload) {
    	return ResponseEntity.ok("getAllBUDemand\n");
    }
    
    */
	
	// DRAFT APIs
	
	// create a new demand draft
    @PostMapping("/drafts")
    public ResponseEntity<?> createDemandDraft(@RequestBody String payload) {
    	// date created
    	return ResponseEntity.ok("createDemandDraft\n");
    }
    
    // get all demand drafts
    @GetMapping("/drafts")
    public ResponseEntity<?> getAllDemandDrafts(@RequestBody String payload) {
    	return ResponseEntity.ok("getAllDemandDrafts\n");
    }
    
    // return a specific draft
    @GetMapping("/drafts/{draft_id}")
    public ResponseEntity<?> getDemandDraft(@RequestBody String payload) {
    	return ResponseEntity.ok("getDemandDraft\n");
    }
    
    // return a demand list for a specific draft
    @GetMapping("/drafts/{draft_id}/demands")
    public ResponseEntity<?> getDemandForDraft(@RequestBody String payload) {
    	return ResponseEntity.ok("getDemandForDraft\n");
    }
    
	// BU APIs
    
    // create BU
	@PostMapping("/BUs")
    public ResponseEntity<?> createBU(@RequestBody String payload) {
    	return ResponseEntity.ok("createBU\n");
    }
    
	// return list of all BUs
	@GetMapping("/BUs")
    public ResponseEntity<?> getAllBUs(@RequestBody String payload) {
    	return ResponseEntity.ok("getAllBUs\n");
    }
	
	// return specific BU
	@GetMapping("/BUs/{bu_id}")
    public ResponseEntity<?> getBU(@PathVariable String user_id, @RequestBody String payload) {
    	return ResponseEntity.ok("getBU\n");
    }
	
	// return list of all drafts for a specific BU
	@GetMapping("/BUs/{bu_id}/drafts")
    public ResponseEntity<?> getDraftsForBU(@PathVariable String user_id, @RequestBody String payload) {
    	return ResponseEntity.ok("getDraftsForBU\n");
    }
	
	// return a specific draft for a specific BU
	@GetMapping("/BUs/{bu_id}/drafts/{draft_id}")
    public ResponseEntity<?> getDraftForBU(@PathVariable String user_id, @RequestBody String payload) {
    	return ResponseEntity.ok("getDraftForBU\n");
    }
	
	// return a list of demands for a specific draft for a specific BU
	@GetMapping("/BUs/{bu_id}/drafts/{draft_id}/demands")
    public ResponseEntity<?> getDemandsForBUDraft(@PathVariable String user_id, @RequestBody String payload) {
    	return ResponseEntity.ok("getDemandsForBUDraft\n");
    }
}