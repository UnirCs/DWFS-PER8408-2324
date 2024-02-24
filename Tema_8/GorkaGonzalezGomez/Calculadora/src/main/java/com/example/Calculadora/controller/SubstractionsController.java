package com.example.Calculadora.controller;

import com.example.Calculadora.model.pojo.substractions.Substraction;
import com.example.Calculadora.model.pojo.substractions.SubstractionDTO;
import com.example.Calculadora.model.pojo.substractions.SubstractionOperandsDTO;
import com.example.Calculadora.model.pojo.substractions.Substrahend;
import com.example.Calculadora.model.pojo.sums.SumDTO;
import com.example.Calculadora.model.request.CreateSubstractionRequest;
import com.example.Calculadora.model.request.CreateSumRequest;
import com.example.Calculadora.service.substractions.SubstractionsService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin("*")
public class SubstractionsController {

    private final SubstractionsService service;

    @PostMapping("/substractions")
    @Operation(
            operationId = "Añadir una resta",
            description = "Operación de escritura",
            summary = "Se añade una resta a partir de sus datos.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Operadores de la resta a crear.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = CreateSubstractionRequest.class))
            )
    )
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = SubstractionDTO.class))
    )
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "La petición no se ha proporcionado correctamente")
    @ApiResponse(
            responseCode = "500",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "Se ha producido un error interno en el servidor.")
    public ResponseEntity<SubstractionDTO> addSubstraction(@RequestBody CreateSubstractionRequest request) {
        Substraction substraction = service.createSubstraction(request);

        if (substraction != null) {
            SubstractionDTO substractionDTO = SubstractionDTO.builder().subtractionId(substraction.getId()).operands(SubstractionOperandsDTO.builder().minuend(substraction.getMinuend()).substrahends(request.getOperands().getSubstrahends()).build()).result(substraction.getResult()).build();
            return ResponseEntity.status(HttpStatus.CREATED).body(substractionDTO);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/substractions/{substractionId}")
    @Operation(
            operationId = "Visualizar una resta",
            description = "Operación de lectura",
            summary = "Se visualiza una resta a partir de su identificador.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Operadores de la resta a crear.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema())
            )
    )
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = SubstractionDTO.class))
    )
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "No se ha encontrado la resta con el identificador indicado.")
    @ApiResponse(
            responseCode = "500",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "Se ha producido un error interno en el servidor.")
    public ResponseEntity<SubstractionDTO> getSubstraction(@PathVariable String substractionId) {
        Substraction substraction = service.getSubstraction(substractionId);

        ArrayList<Integer> substrahends = new ArrayList<Integer>();
        if (substraction != null) {
            for (Substrahend substrahend: substraction.getSubstrahends()) {
                substrahends.add(substrahend.getSubstrahend());
            }
            return ResponseEntity.status(HttpStatus.OK).body(SubstractionDTO.builder().subtractionId(substraction.getId()).operands(SubstractionOperandsDTO.builder().minuend(substraction.getMinuend()).substrahends(substrahends).build()).result(substraction.getResult()).build());
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

}