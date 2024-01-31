package com.unir.calculadora.data;

import com.unir.calculadora.model.pojo.Division;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.UUID;

public interface DivisionJpaRepository extends JpaRepository<Division, UUID>, JpaSpecificationExecutor<Division> {

}
