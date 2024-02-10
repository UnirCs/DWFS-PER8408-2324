package com.unir.calculadora.dao;

import com.unir.calculadora.model.pojo.Operacion;
import org.springframework.data.jpa.repository.JpaRepository;

interface OperacionJpaRepository extends JpaRepository<Operacion, Long> {

}
