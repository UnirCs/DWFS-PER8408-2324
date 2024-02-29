package com.unir.gateway.decorator;

import com.unir.gateway.model.GatewayRequest;
import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.gateway.support.ServerWebExchangeUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.server.reactive.ServerHttpRequestDecorator;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

/**
 * This class is a decorator for the GatewayRequest object for DELETE requests.
 * It extends the ServerHttpRequestDecorator class and overrides its methods to modify the request.
 */
@Slf4j
public class DeleteRequestDecorator extends ServerHttpRequestDecorator {

    private final GatewayRequest gatewayRequest;

    public DeleteRequestDecorator(GatewayRequest gatewayRequest) {
        super(gatewayRequest.getExchange().getRequest());
        this.gatewayRequest = gatewayRequest;
    }

    @Override
    @NonNull
    public HttpMethod getMethod() {
        return HttpMethod.DELETE;
    }

    @Override
    @NonNull
    public URI getURI() {
        return UriComponentsBuilder
                .fromUri((URI) gatewayRequest.getExchange().getAttributes().get(ServerWebExchangeUtils.GATEWAY_REQUEST_URL_ATTR))
                .build().toUri();
    }

    @Override
    @NonNull
    public HttpHeaders getHeaders() {
        return gatewayRequest.getHeaders();
    }
}