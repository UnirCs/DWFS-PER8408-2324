package com.unir.calculator.calculadora.data;

import com.unir.calculator.calculadora.model.pojo.MathOperation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface MathOperationJpaRepository extends JpaRepository<MathOperation, Long>, JpaSpecificationExecutor<MathOperation> {
}
