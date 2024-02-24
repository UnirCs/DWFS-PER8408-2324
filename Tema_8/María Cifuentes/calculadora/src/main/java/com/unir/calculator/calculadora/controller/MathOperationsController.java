package com.unir.calculator.calculadora.controller;

import com.unir.calculator.calculadora.model.pojo.MathOperation;
import com.unir.calculator.calculadora.model.request.CreateMathOperationRequest;
import com.unir.calculator.calculadora.service.MathOperationsService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@Tag(name = "MathOperations Controller", description = "Microservicio encargado de exponer operaciones CRUD sobre productos alojados en una base de datos en memoria.")

public class MathOperationsController {

    private final MathOperationsService service;

    @GetMapping("/operations")
    @Operation(
            operationId = "Obtener las operaciones",
            description = "Operacion de lectura",
            summary = "Se devuelve una lista de todas las operaciones almacenadas en la base de datos.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = MathOperation.class)))
    public ResponseEntity<List<MathOperation>> getMathOperations() {

        List<MathOperation> mathOperations = service.getMathOperations();

        if (mathOperations != null) {
            return ResponseEntity.ok(mathOperations);
        } else {
            return ResponseEntity.ok(Collections.emptyList());
        }
    }

    @GetMapping("/operations/{operationId}")
    @Operation(
            operationId = "Obtener una operación concreta",
            description = "Operacion de lectura",
            summary = "Se devuelve una operación a partir de su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = MathOperation.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado el producto con el identificador indicado.")
    public ResponseEntity<MathOperation> getMathOperationById(@PathVariable String operationId) {

        log.info("Request received for operation {}", operationId);
        MathOperation mathOperation = service.getMathOperationById(operationId);

        if (mathOperation != null) {
            return ResponseEntity.ok(mathOperation);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @PostMapping("/operations")
    @Operation(
            operationId = "Insertar una operación",
            description = "Operación de escritura",
            summary = "Se crea una operación a partir de sus datos. Existen los siguientes tipos: sumar, restar, multiplicar, dividir, raiz y potencia",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos de la operación a crear.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = CreateMathOperationRequest.class))))
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = MathOperation.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos introduccidos incorrectos.")
    public ResponseEntity<MathOperation> addOperation(@RequestBody CreateMathOperationRequest request) {

        MathOperation createdMathOperation = service.addMathOperation(request);

        if (createdMathOperation != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(createdMathOperation);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }
}
