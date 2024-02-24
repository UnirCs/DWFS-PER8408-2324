package com.example.Calculadora.data.sum;

import com.example.Calculadora.model.pojo.sums.Sum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

interface SumJpaRepository extends JpaRepository<Sum, Long>, JpaSpecificationExecutor<Sum> {
}
