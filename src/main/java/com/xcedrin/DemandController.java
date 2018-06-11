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
	
	// returns demand for all of the BUs
	@GetMapping("/demands")
    public ResponseEntity<?> getAllDemand(@RequestBody String payload) {
    	return ResponseEntity.ok("getAllDemand\n");
    }
	
	// returns info and demand for a single BU
	@GetMapping("/demands/{bu_id}")
    public ResponseEntity<?> getDemandForBU(@PathVariable String bu_id, @RequestBody String payload) {
    	return ResponseEntity.ok("getDemandForBU\n");
    }
	
	// returns demand for a single Track
	@GetMapping("/demands/{track_id}")
    public ResponseEntity<?> getDemandForTrack(@PathVariable String track_id, @RequestBody String payload) {
    	return ResponseEntity.ok("getDemandForTrack\n");
    }
	
	// create a new demand draft
    @PostMapping("/demands/{bu_id}/drafts")
    public ResponseEntity<?> createDemandDraftForBU(@RequestBody String payload) {
    	// date created
    	return ResponseEntity.ok("createDemandDraftForBU\n");
    }
    
    // list
    @GetMapping("/demands/{bu_id}/drafts")
    public ResponseEntity<?> getAllDemandDraftsForBU(@RequestBody String payload) {
    	return ResponseEntity.ok("getAllDemandDraftsForBU\n");
    }
    
    @GetMapping("/demands/{bu_id}/drafts/{draft_id}")
    public ResponseEntity<?> getDemandDraftForBU(@PathVariable String draft_id, @RequestBody String payload) {
    	return ResponseEntity.ok("getDemandDraftForBU\n");
    }
    
    // changes demand draft stage from draft to "waiting for approval"
    @PutMapping("/demands/{bu_id}/drafts/{draft_id}")
    public ResponseEntity<?> submitDemandDraftForBU(@PathVariable String draft_id, @RequestBody String payload) {
    	return ResponseEntity.ok("submitDemandDraftForBU\n");
    }
    
    @PostMapping("/demands/{bu_id}/drafts/{draft_id}/tracks")
    public ResponseEntity<?> createDemandDraftTrackForBU(@PathVariable String draft_id, @RequestBody String payload) {
    	return ResponseEntity.ok("getDemandDraftForBU\n");
    }
    
    // list
    @GetMapping("/demands/{bu_id}/drafts/{draft_id}/tracks")
    public ResponseEntity<?> getAllDemandDraftTracksForBU(@PathVariable String draft_id, @RequestBody String payload) {
    	return ResponseEntity.ok("getDemandDraftForBU\n");
    }
    
	// USER APIs
	@GetMapping("/users")
    public ResponseEntity<?> getAllUsers(@RequestBody String payload) {
    	return ResponseEntity.ok("getAllUsers\n");
    }
	
	@PostMapping("/users")
    public ResponseEntity<?> createUser(@RequestBody String payload) {
    	return ResponseEntity.ok("createUser\n");
    }
	
	@GetMapping("/users/{user_id}")
    public ResponseEntity<?> getUser(@PathVariable String user_id, @RequestBody String payload) {
    	return ResponseEntity.ok("getAllUsers\n");
    }
	
	// BU INFO APIs
	@GetMapping("/BUs")
    public ResponseEntity<?> getAllBUs(@RequestBody String payload) {
    	return ResponseEntity.ok("getAllUsers\n");
    }
	
	@PostMapping("/BUs")
    public ResponseEntity<?> createBU(@RequestBody String payload) {
    	return ResponseEntity.ok("createUser\n");
    }
	
	@GetMapping("/BUs/{bu_id}")
    public ResponseEntity<?> getBU(@PathVariable String user_id, @RequestBody String payload) {
    	return ResponseEntity.ok("getAllUsers\n");
    }
}