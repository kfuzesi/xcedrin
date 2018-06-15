package com.xcedrin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cloudant.client.api.CloudantClient;

public class CloudantController {
	
	@Autowired
    private CloudantClient client;
	
    @GetMapping("/databases")
    public @ResponseBody List<String> data() {
            List<String> allDbs = client.getAllDbs();
            return allDbs;
    }

}
