package com.unir.calculadora.data;

import com.unir.calculadora.model.pojo.Subtraction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.UUID;

public interface SubtractionJpaRepository extends JpaRepository<Subtraction, UUID>, JpaSpecificationExecutor<Subtraction> {

}
