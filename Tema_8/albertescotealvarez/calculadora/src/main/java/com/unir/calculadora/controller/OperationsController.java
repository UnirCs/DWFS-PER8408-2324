package com.unir.calculadora.controller;

import com.unir.calculadora.model.request.*;
import com.unir.calculadora.model.response.*;
import com.unir.calculadora.service.OperationsService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

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

    @PostMapping("/multiplications")
    public ResponseEntity<CalculateMultiplicationResponse> calculateMultiplication(@Valid @RequestBody CalculateMultiplicationRequest request) {
        log.info("multiplications request received");
        CalculateMultiplicationResponse response = service.calculateMultiplication(request);
        if (response != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/divisions")
    public ResponseEntity<CalculateDivisionResponse> calculateDivision(@Valid @RequestBody CalculateDivisionRequest request) {
        log.info("divisions request received");
        CalculateDivisionResponse response = service.calculateDivision(request);
        if (response != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/roots")
    public ResponseEntity<CalculateRootResponse> calculateRoot(@Valid @RequestBody CalculateRootRequest request) {
        log.info("roots request received");
        CalculateRootResponse response = service.calculateRoot(request);
        if (response != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/powers")
    public ResponseEntity<CalculatePowerResponse> calculatePower(@Valid @RequestBody CalculatePowerRequest request) {
        log.info("powers request received");
        CalculatePowerResponse response = service.calculatePower(request);
        if (response != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<GetOperationResponse> calculatePower(@PathVariable UUID id) {
        log.info("operations request received");
        GetOperationResponse response = service.getOperation(id);
        if (response != null) {
            return ResponseEntity.status(HttpStatus.OK).body(response);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
