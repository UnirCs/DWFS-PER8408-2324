package com.prueba.calculator.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import com.prueba.calculator.model.pojo.CalculationReturn;
import com.prueba.calculator.model.pojo.Operand;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.prueba.calculator.model.pojo.Calculation;
import com.prueba.calculator.model.request.CreateCalculationRequest;
import com.prueba.calculator.service.CalculationsService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@Slf4j
@Tag(name = "Calculations Controller", description = "Microservicio encargado de exponer operaciones CRUD sobre operaciones alojadas en una base de datos en memoria.")
public class CalculationsController {

    private final CalculationsService service;

    @GetMapping("/calculations")
    @Operation(
            operationId = "Obtener cálculos",
            description = "Operacion de lectura",
            summary = "Se devuelve una lista de todos los cálculos almacenados en la base de datos.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = CalculationReturn.class)))
    public ResponseEntity<List<CalculationReturn>> getCalculations(
            @RequestHeader Map<String, String> headers) {

        log.info("headers: {}", headers);
        List<Calculation> calculations = service.getCalculations();

        List<CalculationReturn> calculationsReturn = new ArrayList<>();
        for (Calculation calculation : calculations){
            List<Double> operandsList = new ArrayList<>();
            for (Operand operand : calculation.getOperandList()) {
                operandsList.add(operand.getValor());
            }
            CalculationReturn calculationReturn = CalculationReturn.builder().id(calculation.getId()).operation(calculation.getOperation()).result(calculation.getResult()).operands(operandsList).build();
            calculationsReturn.add(calculationReturn);
        }

        if (!calculationsReturn.isEmpty()) {
            return ResponseEntity.ok(calculationsReturn);
        } else {
            return ResponseEntity.ok(Collections.emptyList());
        }
    }


    @GetMapping("/calculations/{calculationId}")
    @Operation(
            operationId = "Obtener un cálculo",
            description = "Operacion de lectura",
            summary = "Se devuelve un cálculo a partir de su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Calculation.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado el cálculo con el identificador indicado.")
    public ResponseEntity<CalculationReturn> getCalculation(@PathVariable String calculationId) {

        log.info("Request received for calculation {}", calculationId);
        Calculation calculation = service.getCalculation(calculationId);

        if (calculation != null) {
            List<Double> operandsList = new ArrayList<>();
            for (Operand operand : calculation.getOperandList()) {
                operandsList.add(operand.getValor());
            }
            CalculationReturn calculationReturn = CalculationReturn.builder().id(calculation.getId()).operation(calculation.getOperation()).result(calculation.getResult()).operands(operandsList).build();

            return ResponseEntity.ok(calculationReturn);
        } else {
            return ResponseEntity.notFound().build();
        }

    }


    @DeleteMapping("/calculations/{calculationId}")
    @Operation(
            operationId = "Eliminar un cálculo",
            description = "Operacion de escritura",
            summary = "Se elimina un cálculo a partir de su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado el cálculo con el identificador indicado.")
    public ResponseEntity<Void> deleteCalculation(@PathVariable String calculationId) {

        Boolean removed = service.removeCalculation(calculationId);

        if (Boolean.TRUE.equals(removed)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @PostMapping("/calculations")
    @Operation(
            operationId = "Insertar un cálculo",
            description = "Operacion de escritura",
            summary = "Se crea un cálculo a partir de sus datos (operación y operandos).",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos del cálculo a crear.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = CreateCalculationRequest.class))))
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Calculation.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    public ResponseEntity<CalculationReturn> saveCalculation(@RequestBody CreateCalculationRequest request) {

        // New calculation
        Calculation calculationIn = new Calculation(request.getOperation());

        // List of operands
        List<Operand> operands = new ArrayList<>();
        for (Double operandIn : request.getOperands()) {
            // New operand
            Operand operand = new Operand(operandIn);
            // Set calculation to Operand
            operand.setCalculation(calculationIn);
            // Add operand to list
            operands.add(operand);
        }

        // Add operand list to calculation
        calculationIn.setOperandList(operands);

        // Save calculation
        Calculation createdCalculation = service.createCalculation(calculationIn);

        if (createdCalculation != null) {
            List<Double> operandsList = new ArrayList<>();
            for (Operand operand : createdCalculation.getOperandList()) {
                operandsList.add(operand.getValor());
            }
            CalculationReturn calculationReturn = CalculationReturn.builder().id(createdCalculation.getId()).operation(createdCalculation.getOperation()).result(createdCalculation.getResult()).operands(operandsList).build();

            return ResponseEntity.ok(calculationReturn);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

}
