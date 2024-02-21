package com.unir.gatewayfilters;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class GatewayFiltersApplication {

	public static void main(String[] args) {
		// Retrieve execution profile from environment variable. Otherwise, default profile is used.
		String profile = System.getenv("PROFILE");
		System.setProperty("spring.profiles.active", profile != null ? profile : "default");
		SpringApplication.run(GatewayFiltersApplication.class, args);
	}
}
