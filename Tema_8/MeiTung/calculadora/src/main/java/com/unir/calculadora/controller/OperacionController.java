package com.unir.calculadora.controller;

import com.unir.calculadora.model.pojo.Operacion;
import com.unir.calculadora.model.request.OperacionRequest;
import com.unir.calculadora.service.OperacionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/operaciones")
public class OperacionController {

    private final OperacionService service;

    @GetMapping("/{operacionId}")
    public ResponseEntity<Operacion> getOperacion(@PathVariable Long operacionId) {
        Operacion operacion = service.getOperacion(operacionId);
        if (operacion != null) {
            return ResponseEntity.ok(operacion);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Operacion> createOperacion(@RequestBody @Valid OperacionRequest request) {
        Operacion operacion = service.createOperacion(request);
        if (operacion != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(operacion);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }
}
