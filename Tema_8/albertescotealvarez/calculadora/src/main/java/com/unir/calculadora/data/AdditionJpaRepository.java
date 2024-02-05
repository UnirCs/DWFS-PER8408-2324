package com.unir.calculadora.data;

import com.unir.calculadora.model.pojo.Addition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.UUID;

public interface AdditionJpaRepository extends JpaRepository<Addition, UUID>, JpaSpecificationExecutor<Addition> {

}
