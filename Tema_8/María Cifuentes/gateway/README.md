# Spring Cloud Gateway Implementation with Custom Filters

This is a Java application built with Spring Boot and Maven. It serves as a gateway for microservices architecture, implementing custom filters for request translation.

## Components

The application consists of several components:

- `RequestTranslationFilter`: A custom filter for the Spring Cloud Gateway. It translates incoming requests using the `RequestBodyExtractor` and the `RequestDecoratorFactory`.

- `RequestBodyExtractor`: Extracts the body of the request and converts it into a `GatewayRequest` object.

- `RequestDecoratorFactory`: Creates decorators for the `GatewayRequest` object.

- `PostRequestDecorator` and `GetRequestDecorator`: Decorators for the `GatewayRequest` object for POST and GET requests respectively.

- `GatewayRequest`: Represents a request that is being processed by the gateway.

For more detailed information about these components, please refer to the source code documentation.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/CWxqH0?referralCode=jesus-unir)