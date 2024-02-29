package com.example.Calculadora.data.root;

import com.example.Calculadora.model.pojo.roots.Root;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface RootJpaRepository extends JpaRepository<Root, Long>, JpaSpecificationExecutor<Root> {
}
