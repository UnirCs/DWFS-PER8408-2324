package com.unir.calculadora.data;

import com.unir.calculadora.model.pojo.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
@RequiredArgsConstructor
public class OperationsRepository {
    private final AdditionJpaRepository additionJpaRepository;
    private final SubtractionJpaRepository subtractionJpaRepository;
    private final MultiplicationJpaRepository multiplicationJpaRepository;
    private final DivisionJpaRepository divisionJpaRepository;
    private final RootJpaRepository rootJpaRepository;
    private final PowerJpaRepository powerJpaRepository;

    public Addition saveAddition(Addition addition) {
        return additionJpaRepository.save(addition);
    }

    public Subtraction saveSubtraction(Subtraction subtraction) {
        return subtractionJpaRepository.save(subtraction);
    }

    public Multiplication saveMultiplication(Multiplication multiplication) {
        return multiplicationJpaRepository.save(multiplication);
    }

    public Division saveDivision(Division division) {
        return divisionJpaRepository.save(division);
    }

    public Root saveRoot(Root root) {
        return rootJpaRepository.save(root);
    }

    public Power savePower(Power power) {
        return powerJpaRepository.save(power);
    }

    public Operation getOperation(UUID id) {
        Optional<Addition> addition = additionJpaRepository.findById(id);
        if (addition.isPresent()) {
            return addition.get();
        }
        Optional<Subtraction> subtraction = subtractionJpaRepository.findById(id);
        if (subtraction.isPresent()) {
            return subtraction.get();
        }
        Optional<Multiplication> multiplication = multiplicationJpaRepository.findById(id);
        if (multiplication.isPresent()) {
            return multiplication.get();
        }
        Optional<Division> division = divisionJpaRepository.findById(id);
        if (division.isPresent()) {
            return division.get();
        }
        Optional<Root> root = rootJpaRepository.findById(id);
        if (root.isPresent()) {
            return root.get();
        }
        Optional<Power> power = powerJpaRepository.findById(id);
        return power.orElse(null);
    }

}
