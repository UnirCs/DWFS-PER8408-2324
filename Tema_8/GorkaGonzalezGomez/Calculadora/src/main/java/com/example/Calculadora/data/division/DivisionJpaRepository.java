package com.example.Calculadora.data.division;

import com.example.Calculadora.model.pojo.divisions.Division;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface DivisionJpaRepository extends JpaRepository<Division, Long>, JpaSpecificationExecutor<Division> {
}
