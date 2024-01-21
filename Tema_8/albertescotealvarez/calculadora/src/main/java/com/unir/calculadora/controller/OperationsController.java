package com.unir.calculadora.controller;

import com.unir.calculadora.model.request.CalculateAdditionRequest;
import com.unir.calculadora.model.request.CalculateSubtractionRequest;
import com.unir.calculadora.model.response.CalculateAdditionResponse;
import com.unir.calculadora.model.response.CalculateSubtractionResponse;
import com.unir.calculadora.service.OperationsService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/operations")
public class OperationsController {

    private final OperationsService service;

    @PostMapping("/additions")
    public ResponseEntity<CalculateAdditionResponse> calculateAddition(@Valid @RequestBody CalculateAdditionRequest request) {
        log.info("additions request received");
        CalculateAdditionResponse response = service.calculateAddition(request);
        if (response != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/subtractions")
    public ResponseEntity<CalculateSubtractionResponse> calculateSubtraction(@Valid @RequestBody CalculateSubtractionRequest request) {
        log.info("subtractions request received");
        CalculateSubtractionResponse response = service.calculateSubtraction(request);
        if (response != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }
}
