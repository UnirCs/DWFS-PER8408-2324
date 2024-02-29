package com.unir.gatewayfilters.decorator;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.unir.gatewayfilters.model.GatewayRequest;
import lombok.NonNull;
import lombok.SneakyThrows;
import org.springframework.cloud.gateway.support.ServerWebExchangeUtils;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.core.io.buffer.DataBufferFactory;
import org.springframework.core.io.buffer.DefaultDataBufferFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.server.reactive.ServerHttpRequestDecorator;
import org.springframework.web.util.UriComponentsBuilder;
import reactor.core.publisher.Flux;

import java.net.URI;

public class PutRequestDecorator extends ServerHttpRequestDecorator {

    private final GatewayRequest gatewayRequest;
    private final ObjectMapper objectMapper;

    public PutRequestDecorator(GatewayRequest gatewayRequest, ObjectMapper objectMapper) {
        super(gatewayRequest.getExchange().getRequest());
        this.gatewayRequest = gatewayRequest;
        this.objectMapper = objectMapper;
    }

    /**
     * This method overrides the getMethod method of the ServerHttpRequest class.
     * It returns the HTTP method of the request, which is PUT.
     *
     * @return the HTTP method of the request
     */
    @Override
    @NonNull
    public HttpMethod getMethod() {
        return HttpMethod.PUT;
    }

    /**
     * This method overrides the getURI method of the ServerHttpRequestDecorator class.
     * It returns the URI of the request.
     *
     * @return the URI of the request
     */
    @Override
    @NonNull
    public URI getURI() {
        return UriComponentsBuilder.fromUri((URI) gatewayRequest.getExchange().getAttributes().get(ServerWebExchangeUtils.GATEWAY_REQUEST_URL_ATTR)).build().toUri();
    }

    /**
     * This method overrides the getHeaders method of the ServerHttpRequestDecorator class.
     * It returns the headers of the request.
     *
     * @return the headers of the request
     */
    @Override
    @NonNull
    public HttpHeaders getHeaders() {
        return gatewayRequest.getHeaders();
    }

    /**
     * This method overrides the getBody method of the ServerHttpRequestDecorator class.
     * It converts the body of the GatewayRequest object into bytes using the ObjectMapper, and returns it as a Flux of DataBuffers.
     */
    @Override
    @SneakyThrows
    public Flux<DataBuffer> getBody() {
        DataBufferFactory bufferFactory = new DefaultDataBufferFactory();
        byte[] bodyData = objectMapper.writeValueAsBytes(gatewayRequest.getBody());
        DataBuffer buffer = bufferFactory.allocateBuffer(bodyData.length);
        buffer.write(bodyData);
        return Flux.just(buffer);
    }
}
