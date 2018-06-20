package com.xcedrin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cloudant.client.api.CloudantClient;

public class CloudantController {
	
	@Autowired
    private CloudantClient client;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/databases")
    public @ResponseBody List<String> data() {
            List<String> allDbs = client.getAllDbs();
            return allDbs;
    }

}
