package com.example.Calculadora.controller;

import com.example.Calculadora.model.pojo.divisions.Division;
import com.example.Calculadora.model.pojo.divisions.DivisionDTO;
import com.example.Calculadora.model.pojo.divisions.DivisionOperandsDTO;
import com.example.Calculadora.model.pojo.divisions.DivisionResultDTO;
import com.example.Calculadora.model.pojo.multiplications.MultiplicationDTO;
import com.example.Calculadora.model.request.CreateDivisionRequest;
import com.example.Calculadora.model.request.CreateMultiplicationRequest;
import com.example.Calculadora.service.divisions.DivisionsService;
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
public class DivisionsController {

    private final DivisionsService service;

    @PostMapping("/divisions")
    @Operation(
            operationId = "Añadir una división",
            description = "Operación de escritura",
            summary = "Se añade una división a partir de sus datos.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Operadores de la división a crear.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = CreateDivisionRequest.class))
            )
    )
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = DivisionDTO.class))
    )
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "La petición no se ha proporcionado correctamente")
    @ApiResponse(
            responseCode = "500",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "Se ha producido un error interno en el servidor.")
    public ResponseEntity<DivisionDTO> addDivision(@RequestBody CreateDivisionRequest request) {
        Division division = service.createDivision(request);
        if (division != null) {
            DivisionDTO divisionDTO = DivisionDTO.builder().divisionId(division.getId()).operands(DivisionOperandsDTO.
                    builder().divisor(division.getDivisor()).dividend(division.getDividend()).build()).
                    result(DivisionResultDTO.builder().quotient(division.getQuotient()).
                            remainder(division.getRemainder()).build()).build();
            return ResponseEntity.status(HttpStatus.CREATED).body(divisionDTO);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/divisions/{divisionId}")
    @Operation(
            operationId = "Visualizar una división",
            description = "Operación de lectura",
            summary = "Se visualiza una división a partir de su identificador.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Operadores de la división a crear.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema())
            )
    )
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = DivisionDTO.class))
    )
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "No se ha encontrado la resta con el identificador indicado.")
    @ApiResponse(
            responseCode = "500",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "Se ha producido un error interno en el servidor.")
    public ResponseEntity<DivisionDTO> getDivision(@PathVariable String divisionId) {
        Division division = service.getDivision(divisionId);
        if (division != null) {
            return ResponseEntity.status(HttpStatus.OK).body(DivisionDTO.builder().divisionId(division.getId()).
                    operands(DivisionOperandsDTO.builder().divisor(division.getDivisor()).dividend(division.getDividend())
                            .build()).result(DivisionResultDTO.builder().quotient(division.getQuotient()).
                            remainder(division.getRemainder()).build()).build());
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
}
