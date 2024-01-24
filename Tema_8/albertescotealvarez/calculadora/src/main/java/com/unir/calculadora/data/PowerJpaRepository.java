package com.unir.calculadora.data;

import com.unir.calculadora.model.pojo.Power;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.UUID;

public interface PowerJpaRepository extends JpaRepository<Power, UUID>, JpaSpecificationExecutor<Power> {

}
