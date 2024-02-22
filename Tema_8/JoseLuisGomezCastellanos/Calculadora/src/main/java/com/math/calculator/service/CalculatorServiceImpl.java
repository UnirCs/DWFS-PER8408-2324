package com.math.calculator.service;

import java.util.List;
import java.util.Date;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.fge.jsonpatch.JsonPatchException;
import com.github.fge.jsonpatch.mergepatch.JsonMergePatch;
import com.math.calculator.data.CalculatorRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.math.calculator.model.pojo.Oper;
import com.math.calculator.model.request.CreateOperRequest;

@Service
@Slf4j
public class CalculatorServiceImpl implements CalculatorService {

	@Autowired
	private OperRepository repository;

	@Autowired
	private ObjectMapper objectMapper;

	@Override
	public Oper getOper(String operId) {
		return repository.getById(Long.valueOf(operId));
	}
	
	@Override
	public Oper createOper(CreateOperRequest request) {

		//Otra opcion: Jakarta Validation: https://www.baeldung.com/java-validation
		if (request != null && StringUtils.hasLength(request.getOperador().trim())
				&& request.getOperando1() != null && StringUtils.hasLength(request.getOperando2().trim()) && request.getResultado() != null) {
			
			Oper oper = Oper.builder().operador(request.getOperador()).operando1(request.getOperando1()).operando2(request.getOperando2());

			return repository.save(oper);
		} else {
			return null;
		}
	}

}