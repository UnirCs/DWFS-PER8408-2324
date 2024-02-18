package com.example.Calculadora.data.substraction;

import com.example.Calculadora.model.pojo.substractions.Substraction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface SubstractionJpaRepository extends JpaRepository<Substraction, Long>, JpaSpecificationExecutor<Substraction> {
}
