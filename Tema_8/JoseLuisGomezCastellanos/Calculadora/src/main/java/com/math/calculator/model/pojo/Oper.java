package com.math.calculator.model.pojo;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "opers")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Oper {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long operId;
	
	@Column(name = "operador")
	private String operador;
	
	@Column(name = "operando1")
	private Integer operando1;
	
	@Column(name = "operando2")
	private String operando2;
	
	@Column(name = "resultado")
	private Float resultado;
	
	@Column(name = "fecha")
	private Date fecha;
	
	public static class builder() {
		switch (operador) {
		    case sumar:  int[] array = Stream.of(operando2.split(" ")).mapToInt(token -> Integer.parseInt(token)).toArray();
		    	resultado = operando1;
		    	array.forEach( num => {
		    		resultado += num;
		    	})
		    	break;
		    case restar:  int[] array = Stream.of(operando2.split(" ")).mapToInt(token -> Integer.parseInt(token)).toArray();
		    	array.forEach( num => {
		    		resultado -= num;
		    	})
		    	break;
		    case multiplicar:  operando1 * Integer.valueOf(operando2);
		    	break;
		    case dividir: resultado = operando1 / Integer.valueOf(operando2);
		    	break;
		    case raiz:  resultado = Math.pow(operando1, 1/Integer.valueOf(operando2));
		    	break;
		    case potencia:  resultado = Math.pow(operando1, Integer.valueOf(operando2));
		    	break;
		}
		fecha = new Date();
    }

}