package com.example.Calculadora.service.powers;

import com.example.Calculadora.model.pojo.powers.Power;
import com.example.Calculadora.model.request.CreatePowerRequest;

public interface PowersService {
    Power createPower(CreatePowerRequest request);

    Power getPower(String powerId);
}
