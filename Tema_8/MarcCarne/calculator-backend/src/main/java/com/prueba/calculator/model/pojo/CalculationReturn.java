package com.prueba.calculator.model.pojo;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class CalculationReturn {
	private Long id;
	private String operation;
	private Double result;
	private List<Double> operands;

}
