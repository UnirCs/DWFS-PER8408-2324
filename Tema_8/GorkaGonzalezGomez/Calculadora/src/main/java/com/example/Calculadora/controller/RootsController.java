package com.example.Calculadora.controller;

import com.example.Calculadora.model.pojo.divisions.DivisionDTO;
import com.example.Calculadora.model.request.CreateDivisionRequest;
import com.example.Calculadora.service.roots.RootsService;
import com.example.Calculadora.model.pojo.roots.Root;
import com.example.Calculadora.model.pojo.roots.RootDTO;
import com.example.Calculadora.model.pojo.roots.RootOperandsDTO;
import com.example.Calculadora.model.request.CreateRootRequest;
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
public class RootsController {

    private final RootsService service;

    @PostMapping("/roots")
    @Operation(
            operationId = "Añadir una raíz n-ésima",
            description = "Operación de escritura",
            summary = "Se añade una raíz n-ésima a partir de sus datos.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Operadores de la raíz n-ésima a crear.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = CreateRootRequest.class))
            )
    )
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = RootDTO.class))
    )
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "La petición no se ha proporcionado correctamente")
    @ApiResponse(
            responseCode = "500",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "Se ha producido un error interno en el servidor.")
    public ResponseEntity<RootDTO> addRoot(@RequestBody CreateRootRequest request) {
        Root root = service.createRoot(request);
        if (root != null) {
            RootDTO rootDTO = RootDTO.builder().rootId(root.getId()).operands(RootOperandsDTO.
                    builder().radicand(root.getRadicand()).index(root.getIndex()).build()).
                    result(root.getResult()).build();
            return ResponseEntity.status(HttpStatus.CREATED).body(rootDTO);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/roots/{rootId}")
    @Operation(
            operationId = "Visualizar una raíz n-ésima",
            description = "Operación de lectura",
            summary = "Se visualiza una raíz a partir de su identificador.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Operadores de la raíz a crear.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema())
            )
    )
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = RootDTO.class))
    )
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "No se ha encontrado la raíz con el identificador indicado.")
    @ApiResponse(
            responseCode = "500",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "Se ha producido un error interno en el servidor.")
    public ResponseEntity<RootDTO> getDivision(@PathVariable String rootId) {
        Root root = service.getRoot(rootId);
        if (root != null) {
            return ResponseEntity.status(HttpStatus.OK).body(RootDTO.builder().rootId(root.getId()).operands(RootOperandsDTO.
                            builder().radicand(root.getRadicand()).index(root.getIndex()).build()).
                    result(root.getResult()).build());
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
}
