package com.unir.gateway.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.server.ServerWebExchange;

/**
 * This class represents a request that is being processed by the gateway.
 * It contains information about the target HTTP method, query parameters, body, exchange, and headers of the request.
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class GatewayRequest {

    /**
     * The target HTTP method of the request.
     */
    private HttpMethod targetMethod;

    /**
     * The query parameters of the request.
     */
    private LinkedMultiValueMap<String, String> queryParams;

    /**
     * The body of the request.
     */
    private Object body;

    /**
     * The current server web exchange. This is ignored when the object is serialized to JSON.
     */
    @JsonIgnore
    private ServerWebExchange exchange;

    /**
     * The headers of the request. This is ignored when the object is serialized to JSON.
     */
    @JsonIgnore
    private HttpHeaders headers;
}