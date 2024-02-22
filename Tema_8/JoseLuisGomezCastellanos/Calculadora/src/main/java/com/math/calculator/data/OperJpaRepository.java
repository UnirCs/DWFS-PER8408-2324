package com.math.calculator.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.math.calculator.model.pojo.Oper;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

interface OperJpaRepository extends JpaRepository<Oper, Long>, JpaSpecificationExecutor<Oper> {

}