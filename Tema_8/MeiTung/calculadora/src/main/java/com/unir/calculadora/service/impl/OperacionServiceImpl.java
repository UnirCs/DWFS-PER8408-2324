package com.unir.calculadora.service.impl;

import com.unir.calculadora.dao.OperacionRepository;
import com.unir.calculadora.model.pojo.Operacion;
import com.unir.calculadora.model.request.OperacionRequest;
import com.unir.calculadora.service.OperacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OperacionServiceImpl implements OperacionService {

    @Autowired
    private OperacionRepository repository;


    public Operacion getOperacion(Long operacionId) {
        return repository.findById(operacionId);
    }

    public Operacion createOperacion(OperacionRequest request) {

        Operacion operacion = Operacion.builder()
                .tipo(request.getTipo())
                .operandos(request.getOperandos())
                .operador(request.getOperador())
                .build();

        String tipo = operacion.getTipo();
        List<Integer> operandos = operacion.getOperandos();
        Integer operador = operacion.getOperador();

        switch (tipo) {
            case "suma":
                operacion.setResultado(sumar(operandos));
                break;
            case "resta":
                operacion.setResultado(restar(operandos));
                break;
            case "multiplicacion":
                operacion.setResultado(multiplicar(operandos.get(0), operador));
                break;
            case "division":
                operacion.setResultado(dividir(operandos.get(0), operador));
                break;
            case "radicacion":
                operacion.setResultado(raiz(operandos.get(0), operador));
                break;
            case "potencia":
                operacion.setResultado(potencia(operandos.get(0), operador));
                break;
            default:
                throw new IllegalArgumentException("Tipo de operación no soportado: " + tipo);
        }
        return repository.save(operacion);
    }

    private Double sumar(List<Integer> operandos) {
        return operandos.stream().mapToDouble(Integer::doubleValue).sum();
    }

    private Double restar(List<Integer> operandos) {
        Integer valorInicial = operandos.get(0);
        return operandos.stream()
                .skip(1)
                .reduce(valorInicial, (resultado, elemento) -> resultado - elemento)
                .doubleValue();
    }

    private void validarOperador(Integer operador) {
        if (operador == null) {
            throw new IllegalArgumentException("El operador no puede estar vacío.");
        }
    }

    private Double multiplicar(Integer operando, Integer operador) {
        validarOperador(operador);
        return operando.doubleValue() * operador.doubleValue();
    }

    private Double dividir(Integer operando, Integer operador) {
        validarOperador(operador);
        if (operador == 0) {
            throw new ArithmeticException("División por cero.");
        }
        return operando.doubleValue() / operador.doubleValue();
    }

    private Double raiz(Integer operando, Integer operador) {
        validarOperador(operador);
        return Math.pow(operando, 1.0 / operador);
    }

    private Double potencia(Integer operando, Integer operador) {
        validarOperador(operador);
        return Math.pow(operando, operador);
    }
}
