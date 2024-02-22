package com.math.calculator.service;

import java.util.List;
import java.util.Date;

import com.github.fge.jsonpatch.JsonPatch;
import com.github.fge.jsonpatch.mergepatch.JsonMergePatch;
import com.math.calculator.model.pojo.Oper;
import com.math.calculator.model.request.CreateOperRequest;

public interface CalculatorService {
	
	Oper getOper(String operId);
	
	Oper createOper(CreateOperRequest request);

}