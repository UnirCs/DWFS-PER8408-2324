package com.unir.calculadora.controller;

import com.unir.calculadora.model.request.*;
import com.unir.calculadora.model.response.*;
import com.unir.calculadora.service.OperationsService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
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
    @Operation(
            operationId = "Realizar suma",
            description = "Operación de escritura",
            summary = "Se realiza la suma de los sumandos introducidos y devuleve el resultado junto al identificador de la operación.")
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = CalculateAdditionResponse.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "El cuerpo de la petición no es correcto.")
    @ApiResponse(
            responseCode = "500",
            description = "Error interno del servidor."
    )
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
    @Operation(
            operationId = "Realizar resta",
            description = "Operación de escritura",
            summary = "Se realiza la resta del minuendo menos los sustraendos introducidos y devuleve el resultado junto al identificador de la operación.")
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = CalculateSubtractionResponse.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "El cuerpo de la petición no es correcto.")
    @ApiResponse(
            responseCode = "500",
            description = "Error interno del servidor."
    )
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
    @Operation(
            operationId = "Realizar multiplicación",
            description = "Operación de escritura",
            summary = "Se realiza la multiplicación del multiplicando por el multiplicador introducido y devuleve el resultado junto al identificador de la operación.")
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = CalculateMultiplicationResponse.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "El cuerpo de la petición no es correcto.")
    @ApiResponse(
            responseCode = "500",
            description = "Error interno del servidor."
    )
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
    @Operation(
            operationId = "Realizar división",
            description = "Operación de escritura",
            summary = "Se realiza la división del dividendo entre el divisor introducido y devuleve el resultado junto al identificador de la operación.")
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = CalculateDivisionResponse.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "El cuerpo de la petición no es correcto.")
    @ApiResponse(
            responseCode = "500",
            description = "Error interno del servidor."
    )
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
    @Operation(
            operationId = "Realizar raíz n-ésima",
            description = "Operación de escritura",
            summary = "Se realiza la raíz n-ésima con el radicando e indice introducidos y devuleve el resultado junto al identificador de la operación.")
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = CalculateRootResponse.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "El cuerpo de la petición no es correcto.")
    @ApiResponse(
            responseCode = "500",
            description = "Error interno del servidor."
    )
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
    @Operation(
            operationId = "Realizar potencia n-ésima",
            description = "Operación de escritura",
            summary = "Se realiza la potencia n-ésima con la base y la potencia indtroducida y devuleve el resultado junto al identificador de la operación.")
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = CalculatePowerResponse.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "El cuerpo de la petición no es correcto.")
    @ApiResponse(
            responseCode = "500",
            description = "Error interno del servidor."
    )
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
    @Operation(
            operationId = "Obtener operación",
            description = "Operación de lectura",
            summary = "Se devuelve una un string con el tipo de operación junto al objecto operación en questión.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = GetOperationResponse.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "No se ha encontrado la operación con el identificador indicado.")
    @ApiResponse(
            responseCode = "500",
            description = "Error interno del servidor."
    )
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
