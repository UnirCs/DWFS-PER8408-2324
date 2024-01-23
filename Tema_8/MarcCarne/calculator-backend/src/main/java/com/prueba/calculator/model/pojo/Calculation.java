package com.prueba.calculator.model.pojo;

import java.util.List;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.OneToMany;
import jakarta.persistence.FetchType;
import jakarta.persistence.CascadeType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "calculations")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Calculation {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "operation")
	private String operation;

	@Column(name = "result")
	private Double result;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "calculation", cascade = CascadeType.ALL)
	private List<Operand> operandList;

	public void update(CalculationReturn calculationReturn) {
		this.operation = calculationReturn.getOperation();
		this.result = calculationReturn.getResult();
	}

	public Calculation(String operation) {
		this.operation = operation;
	}
}
