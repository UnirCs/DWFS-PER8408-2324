package com.example.Calculadora.data.power;

import com.example.Calculadora.model.pojo.multiplications.Multiplication;
import com.example.Calculadora.model.pojo.powers.Power;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class PowerRepository {
    private final PowerJpaRepository repository;
    public Power save(Power power) {
        return repository.save(power);
    }

    public Power getById(Long id) {
        return repository.findById(id).orElse(null);
    }
}
