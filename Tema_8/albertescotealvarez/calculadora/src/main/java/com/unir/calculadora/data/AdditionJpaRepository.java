package com.unir.calculadora.data;

import com.unir.calculadora.model.pojo.Addition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface AdditionJpaRepository extends JpaRepository<Addition, Long>, JpaSpecificationExecutor<Addition> {

}
