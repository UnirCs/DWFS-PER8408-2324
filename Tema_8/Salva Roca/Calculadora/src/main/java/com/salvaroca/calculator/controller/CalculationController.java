package com.salvaroca.calculator.controller;

import com.salvaroca.calculator.model.Calculation;
import com.salvaroca.calculator.model.CalculationDto;
import com.salvaroca.calculator.service.CalculationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Tag(name = "API Calculadora Online")
public class CalculationController {
    private final CalculationService calculationService;

    @GetMapping("/calculations")
    @Operation(
            operationId = "Consultar todos los cálculos",
            description = "Operación de lectura",
            summary = "La API devuelve una lista con todos los cálculos registrados en memoria",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            content = @Content(mediaType = "application/json", schema = @Schema(implementation = List.class, subTypes = {Calculation.class}))
                    ),
                    @ApiResponse(
                            responseCode = "204",
                            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class))
                    )
            }
    )

    public ResponseEntity<List<Calculation>> getAllCalculations() {
        List<Calculation> calculationList = calculationService.getAllCalculations();

        if (!calculationList.isEmpty()) {
            return ResponseEntity.ok(calculationList);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @GetMapping("/calculations/{id}")
    @Operation(
            operationId = "Consultar un cálculo",
            description = "Operación de lectura",
            summary = "La API devuelve el cálculo según su identificador",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Calculation.class))
                    ),
                    @ApiResponse(
                            responseCode = "204",
                            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class))
                    )
            }
    )

    public ResponseEntity<Calculation> getCalculationById(@PathVariable String id) {
        Calculation calculation = calculationService.getCalculationById(id);

        if (calculation != null) {
            return ResponseEntity.ok(calculation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Operation(
            operationId = "Realizar y registrar un cálculo",
            description = "Operación de escritura",
            summary = "La API calcula el resultado del cálculo y lo registra en la base de datos",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Calculation.class))
                    ),
                    @ApiResponse(
                            responseCode = "204",
                            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class))
                    )
            }
    )

    @PostMapping("/calculations")
    public ResponseEntity<Calculation> saveCalculation(@RequestBody CalculationDto calculationDto) {
        Calculation calculation = calculationService.saveCalculation(calculationDto);

        if (calculation != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(calculation);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }
}
