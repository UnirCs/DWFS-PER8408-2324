package com.math.calculator.model.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CreateOperRequest {

	private String operador;
	private Integer operando1;
	private String operando2;
	private Float resultado;
	
}