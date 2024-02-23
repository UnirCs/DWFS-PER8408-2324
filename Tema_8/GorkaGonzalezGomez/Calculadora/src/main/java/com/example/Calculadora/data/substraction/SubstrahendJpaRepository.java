package com.example.Calculadora.data.substraction;

import com.example.Calculadora.model.pojo.substractions.Substrahend;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface SubstrahendJpaRepository extends JpaRepository<Substrahend, Long>, JpaSpecificationExecutor<Substrahend> {
}
