package com.xcedrin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@PropertySource(value = "classpath:cloudant.properties", ignoreResourceNotFound = true)
public class XcedrinApplication {

	public static void main(String[] args) {
		SpringApplication.run(XcedrinApplication.class, args);
	}
}