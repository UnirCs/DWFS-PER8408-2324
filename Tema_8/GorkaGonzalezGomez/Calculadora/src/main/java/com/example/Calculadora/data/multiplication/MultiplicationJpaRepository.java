package com.example.Calculadora.data.multiplication;

import com.example.Calculadora.model.pojo.multiplications.Multiplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface MultiplicationJpaRepository extends JpaRepository<Multiplication, Long>, JpaSpecificationExecutor<Multiplication> {
}
