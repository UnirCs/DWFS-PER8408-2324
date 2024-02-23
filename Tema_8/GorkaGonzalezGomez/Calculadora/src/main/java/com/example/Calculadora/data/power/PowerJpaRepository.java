package com.example.Calculadora.data.power;

import com.example.Calculadora.model.pojo.multiplications.Multiplication;
import com.example.Calculadora.model.pojo.powers.Power;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface PowerJpaRepository extends JpaRepository<Power, Long>, JpaSpecificationExecutor<Power> {
}
