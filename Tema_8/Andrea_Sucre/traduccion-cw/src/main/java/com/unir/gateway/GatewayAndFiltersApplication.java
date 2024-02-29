package com.unir.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class GatewayAndFiltersApplication {

	public static void main(String[] args) {
		// Retrieve execution profile from environment variable. Otherwise, default profile is used.
		String profile = System.getenv("PROFILE");
		System.setProperty("spring.profiles.active", profile != null ? profile : "default");
		SpringApplication.run(GatewayAndFiltersApplication.class, args);
	}

}
