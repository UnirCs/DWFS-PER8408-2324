package com.unir.calculadora.controller;

import com.unir.calculadora.model.pojo.Operacion;
import com.unir.calculadora.model.request.OperacionRequest;
import com.unir.calculadora.service.OperacionService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/operaciones")
@Tag(name = "Operaciones", description = "API para la gestión de operaciones.")
public class OperacionController {

    private final OperacionService service;

    @GetMapping("/{operacionId}")
    @Operation(
            operationId = "Obtener detalles de una operación",
            description = "Operación de lectura",
            summary = "Devuelve una operación por su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Operacion.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "No se ha encontrado ninguna operación con el identificador dado.")
    @ApiResponse(
            responseCode = "500",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "Error interno del servidor.")
    public ResponseEntity<Operacion> getOperacion(@PathVariable Long operacionId) {
        Operacion operacion = service.getOperacion(operacionId);
        if (operacion != null) {
            return ResponseEntity.ok(operacion);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    @Operation(
            operationId = "Registrar una operación",
            description = "Operación de escritura",
            summary = "Crea una operación a partir de los datos introducidos.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos de la operación.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = OperacionRequest.class))))
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Operacion.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "Algún dato introducido es incorrecto.")
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "No se ha encontrado ninguna operación con el identificador dado.")
    @ApiResponse(
            responseCode = "500",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "Error interno del servidor.")
    public ResponseEntity<Operacion> createOperacion(@RequestBody @Valid OperacionRequest request) {
        Operacion operacion = service.createOperacion(request);
        if (operacion != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(operacion);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }
}
