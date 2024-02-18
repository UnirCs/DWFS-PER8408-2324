package com.unir.gatewayfilters.config;

import com.fasterxml.jackson.databind.ObjectMapper;

@Configuration
public class MapperConfig {

    @Bean
    public ObjectMapper objectMapper() {
        return new ObjectMapper();
    }
}