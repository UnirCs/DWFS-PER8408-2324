package com.unir.calculadora.data;

import com.unir.calculadora.model.pojo.Root;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.UUID;

public interface RootJpaRepository extends JpaRepository<Root, UUID>, JpaSpecificationExecutor<Root> {

}
