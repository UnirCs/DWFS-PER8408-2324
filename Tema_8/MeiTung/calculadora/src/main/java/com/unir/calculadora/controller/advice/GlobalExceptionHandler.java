package com.unir.calculadora.controller.advice;

import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

    private ResponseEntity<Object> buildResponseEntity(HttpStatus status, List<String> errors) {
        Map<String, Object> body = new LinkedHashMap<>();
        body.put("timestamp", LocalDateTime.now());
        body.put("código", status.value());
        body.put("error", status.getReasonPhrase());
        if (errors != null && !errors.isEmpty()) {
            body.put("error", errors);
        }

        return new ResponseEntity<>(body, status);
    }

    @ExceptionHandler(value = {ArithmeticException.class, IllegalArgumentException.class, NullPointerException.class})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<?> handle(RuntimeException exception) {
        return buildResponseEntity(HttpStatus.BAD_REQUEST, Collections.singletonList(exception.getMessage()));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<?> handle(MethodArgumentNotValidException exception) {

        List<String> errors = exception.getBindingResult()
                .getFieldErrors()
                .stream()
                .map(DefaultMessageSourceResolvable::getDefaultMessage)
                .toList();

        return buildResponseEntity(HttpStatus.BAD_REQUEST, errors);
    }
}
