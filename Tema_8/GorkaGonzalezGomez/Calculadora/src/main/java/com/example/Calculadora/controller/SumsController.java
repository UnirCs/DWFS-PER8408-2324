package com.example.Calculadora.controller;

import com.example.Calculadora.model.pojo.sums.Sum;
import com.example.Calculadora.model.pojo.sums.SumDTO;
import com.example.Calculadora.model.pojo.sums.Addend;
import com.example.Calculadora.model.pojo.sums.SumOperandsDTO;
import com.example.Calculadora.model.request.CreateSumRequest;
import com.example.Calculadora.service.sums.SumsService;
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
public class SumsController {

    private final SumsService service;

    @PostMapping("/sums")
    @Operation(
            operationId = "Añadir una suma",
            description = "Operación de escritura",
            summary = "Se añade una suma a partir de sus datos.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Operadores de la suma a crear.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = CreateSumRequest.class))
            )
    )
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = SumDTO.class))
    )
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "La petición no se ha proporcionado correctamente")
    @ApiResponse(
            responseCode = "500",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "Se ha producido un error interno en el servidor.")
    public ResponseEntity<SumDTO> addSum(@RequestBody CreateSumRequest request) {
        Sum sum = service.createSum(request);

        if (sum != null) {
            SumDTO sumDTO = SumDTO.builder().sumId(sum.getId()).operands(SumOperandsDTO.builder().addends(request.getOperands().getAddends()).build()).result(sum.getResult()).build();
            return ResponseEntity.status(HttpStatus.CREATED).body(sumDTO);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }


    @GetMapping("/sums/{sumId}")
    @Operation(
            operationId = "Visualizar una suma",
            description = "Operación de lectura",
            summary = "Se visualiza una suma a partir de su identificador.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Operadores de la suma a crear.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema())
            )
    )
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = SumDTO.class))
    )
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "No se ha encontrado la suma con el identificador indicado.")
    @ApiResponse(
            responseCode = "500",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "Se ha producido un error interno en el servidor.")
    public ResponseEntity<SumDTO> getSum(@PathVariable String sumId) {
        Sum sum = service.getSum(sumId);

        ArrayList<Integer> addends = new ArrayList<>();
        if (sum != null) {
            for (Addend operand: sum.getAddends()) {
                addends.add(operand.getAddend());
            }
            return ResponseEntity.status(HttpStatus.OK).body(SumDTO.builder().sumId(sum.getId()).operands(SumOperandsDTO.builder().addends(addends).build()).result(sum.getResult()).build());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
