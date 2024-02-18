package com.unir.calculadora.service;

import com.unir.calculadora.model.pojo.Operacion;
import com.unir.calculadora.model.request.OperacionRequest;

public interface OperacionService {

    Operacion getOperacion(Long id);

    Operacion createOperacion(OperacionRequest request);
}
