package com.example.Calculadora.data.sum;

import com.example.Calculadora.model.pojo.sums.Addend;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface SumOperandJpaRepository extends JpaRepository<Addend, Long>, JpaSpecificationExecutor<Addend>  {
}
