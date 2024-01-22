package com.example.Calculadora.data;

import com.example.Calculadora.model.pojo.Sum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

interface SumJpaRepository extends JpaRepository<Sum, Long>, JpaSpecificationExecutor<Sum> {
}
