package com.example.Calculadora.controller;

import com.example.Calculadora.model.pojo.Sum;
import com.example.Calculadora.model.request.CreateSumRequest;
import com.example.Calculadora.service.SumsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin("*")
public class SumsController {

    private final SumsService service;

    @PostMapping("/operations/sums")
    public ResponseEntity<Sum> addSum(@RequestBody CreateSumRequest request) {
        Sum createdSum = service.createSum(request);

        return ResponseEntity.status(HttpStatus.CREATED).body(createdSum);
    }

}
