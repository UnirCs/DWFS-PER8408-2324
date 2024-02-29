package com.example.Calculadora.controller;

import com.example.Calculadora.model.pojo.multiplications.Multiplication;
import com.example.Calculadora.model.pojo.multiplications.MultiplicationDTO;
import com.example.Calculadora.model.pojo.multiplications.MultiplicationOperandsDTO;
import com.example.Calculadora.model.pojo.substractions.SubstractionDTO;
import com.example.Calculadora.model.request.CreateMultiplicationRequest;
import com.example.Calculadora.model.request.CreateSubstractionRequest;
import com.example.Calculadora.service.multiplications.MultiplicationsService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin("*")
public class MultiplicationsController {

    private final MultiplicationsService service;

    @PostMapping("/multiplications")
    @Operation(
            operationId = "Añadir una multiplicación",
            description = "Operación de escritura",
            summary = "Se añade una multiplicación a partir de sus datos.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Operadores de la multiplicación a crear.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = CreateMultiplicationRequest.class))
            )
    )
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = MultiplicationDTO.class))
    )
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "La petición no se ha proporcionado correctamente")
    @ApiResponse(
            responseCode = "500",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "Se ha producido un error interno en el servidor.")
    public ResponseEntity<MultiplicationDTO> addMultiplication(@RequestBody CreateMultiplicationRequest request) {
        Multiplication multiplication = service.createMultiplication(request);

        if (multiplication != null) {
            MultiplicationDTO multiplicationDTO = MultiplicationDTO.builder().multiplicationId(multiplication.getId()).operands(MultiplicationOperandsDTO.builder().multiplicand(multiplication.getMultiplicand()).multiplier(multiplication.getMultiplier()).build()).result(multiplication.getResult()).build();
            return ResponseEntity.status(HttpStatus.CREATED).body(multiplicationDTO);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/multiplications/{multiplicationId}")
    @Operation(
            operationId = "Visualizar una multiplicación",
            description = "Operación de lectura",
            summary = "Se visualiza una multiplicación a partir de su identificador.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Operadores de la multiplicación a crear.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema())
            )
    )
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = MultiplicationDTO.class))
    )
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "No se ha encontrado la resta con el identificador indicado.")
    @ApiResponse(
            responseCode = "500",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "Se ha producido un error interno en el servidor.")
    public ResponseEntity<MultiplicationDTO> getMultiplication(@PathVariable String multiplicationId) {
        Multiplication multiplication = service.getMultiplication(multiplicationId);
        if (multiplication != null) {
            return ResponseEntity.status(HttpStatus.OK).body(MultiplicationDTO.builder().multiplicationId(multiplication.getId()).operands(MultiplicationOperandsDTO.builder().multiplicand(multiplication.getMultiplicand()).multiplier(multiplication.getMultiplier()).build()).result(multiplication.getResult()).build());
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
}
