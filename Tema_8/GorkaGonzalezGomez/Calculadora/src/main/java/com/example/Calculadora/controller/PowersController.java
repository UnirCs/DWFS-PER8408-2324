package com.example.Calculadora.controller;

import com.example.Calculadora.model.pojo.powers.Power;
import com.example.Calculadora.model.pojo.powers.PowerDTO;
import com.example.Calculadora.model.pojo.powers.PowerOperandsDTO;
import com.example.Calculadora.model.pojo.roots.RootDTO;
import com.example.Calculadora.model.request.CreateRootRequest;
import com.example.Calculadora.service.powers.PowersService;
import com.example.Calculadora.model.request.CreatePowerRequest;
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
public class PowersController {

    private final PowersService service;

    @PostMapping("/powers")
    @Operation(
            operationId = "Añadir una potencia",
            description = "Operación de escritura",
            summary = "Se añade una potencia a partir de sus datos.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Operadores de la potencia a crear.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = CreatePowerRequest.class))
            )
    )
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = PowerDTO.class))
    )
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "La petición no se ha proporcionado correctamente")
    @ApiResponse(
            responseCode = "500",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "Se ha producido un error interno en el servidor.")    public ResponseEntity<PowerDTO> addRoot(@RequestBody CreatePowerRequest request) {
        Power power = service.createPower(request);
        if (power != null) {
            PowerDTO powerDTO = PowerDTO.builder().powerId(power.getId()).operands(PowerOperandsDTO.
                    builder().base(power.getBase()).power(power.getPower()).build()).
                    result(power.getResult()).build();
            return ResponseEntity.status(HttpStatus.CREATED).body(powerDTO);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/powers/{powerId}")
    @Operation(
            operationId = "Visualizar una potencia",
            description = "Operación de lectura",
            summary = "Se visualiza una potencia a partir de su identificador.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Operadores de la potencia a crear.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema())
            )
    )
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = PowerDTO.class))
    )
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "No se ha encontrado la raíz con el identificador indicado.")
    @ApiResponse(
            responseCode = "500",
            content = @Content(mediaType = "application/json", schema = @Schema()),
            description = "Se ha producido un error interno en el servidor.")
    public ResponseEntity<PowerDTO> getPower(@PathVariable String powerId) {
        Power power = service.getPower(powerId);
        if (power != null) {
            return ResponseEntity.status(HttpStatus.OK).body(PowerDTO.builder().powerId(power.getId()).operands(PowerOperandsDTO.
                            builder().base(power.getBase()).power(power.getPower()).build()).
                    result(power.getResult()).build());
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
}
