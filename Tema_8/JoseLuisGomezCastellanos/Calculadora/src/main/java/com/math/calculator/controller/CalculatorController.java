package com.math.calculator.controller;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.math.calculator.model.pojo.Oper;
import com.math.calculator.model.request.CreateOperRequest;
import com.math.calculator.service.CalculatorService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@Slf4j
@Tag(name = "Opers Controller", description = "Microservicio encargado de calcular y regitrar operaciones.")
public class CalculatorController {

    private final CalculatorService service;


    @GetMapping("/opers/{operId}")
    @Operation(
            operationId = "Obtener una operacion",
            description = "Operacion de lectura",
            summary = "Se devuelve una operacion a partir de su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Oper.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la operacion con el identificador indicado.")
    public ResponseEntity<Oper> getOper(@PathVariable String operId) {

        log.info("Request received for oper {}", operId);
        Oper oper = service.getOper(operId);

        if (oper != null) {
            return ResponseEntity.ok(oper);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @PostMapping("/opers")
    @Operation(
            operationId = "Insertar una operacion",
            description = "Operacion de escritura",
            summary = "Se crea una operacion a partir de sus datos.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos de la operacion a crear.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = CreateOperRequest.class))))
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Oper.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la operacion con el identificador indicado.")
    public ResponseEntity<Oper> addOper(@RequestBody CreateOperRequest request) {

        Oper createdOper = service.createOper(request);

        if (createdOper != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(createdOper);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

}