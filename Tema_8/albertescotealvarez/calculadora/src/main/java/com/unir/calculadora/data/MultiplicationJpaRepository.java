package com.unir.calculadora.data;

import com.unir.calculadora.model.pojo.Multiplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.UUID;

public interface MultiplicationJpaRepository extends JpaRepository<Multiplication, UUID>, JpaSpecificationExecutor<Multiplication> {

}
