package com.prueba.calculator.data;

import org.springframework.data.jpa.repository.JpaRepository;
import com.prueba.calculator.model.pojo.Operand;

public interface OperandRepository extends JpaRepository<Operand, Long> {
}
