package com.unir.calculadora.controller;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.unir.calculadora.service.CalculatorService;
import com.unir.calculadora.model.pojo.Calculator;
import com.unir.calculadora.model.requests.CreateCalculatorRequest;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequiredArgsConstructor
@Slf4j
public class CalculatorController {
    private final CalculatorService service;

    @GetMapping("/calculators")
    private ResponseEntity<List<Calculator>> getCalculator(@RequestHeader Map<String, String> headers) {
        List<Calculator> calculators = service.getCalculators();
        if (calculators != null)
            return ResponseEntity.ok(calculators);
        else
            return ResponseEntity.ok(Collections.emptyList());
    }

    @PostMapping("/calculator")
    public ResponseEntity<Calculator> saveCalculator(@RequestBody CreateCalculatorRequest request){
        Calculator createCalculator=service.createCalculator(request);
        if(createCalculator!=null){
            return ResponseEntity.status(HttpStatus.CREATED).body(createCalculator);
        }
        else{
            return ResponseEntity.badRequest().build();
        }
    }
   
}
