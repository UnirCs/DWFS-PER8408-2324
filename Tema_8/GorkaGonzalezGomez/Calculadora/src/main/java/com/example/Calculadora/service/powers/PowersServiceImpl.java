package com.example.Calculadora.service.powers;

import com.example.Calculadora.data.power.PowerRepository;
import com.example.Calculadora.data.root.RootRepository;
import com.example.Calculadora.model.pojo.powers.Power;
import com.example.Calculadora.model.request.CreatePowerRequest;
import com.example.Calculadora.model.request.CreateRootRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class PowersServiceImpl implements PowersService {
    @Autowired
    private PowerRepository powerRepository;

    @Override
    public Power createPower(CreatePowerRequest request) {
        Power power = Power.builder().base(request.getOperands().getBase()).power(request.getOperands().getPower())
        .result((int) Math.pow(request.getOperands().getBase(),request.getOperands().getPower())).build();
        return powerRepository.save(power);
    }

    @Override
    public Power getPower(String powerId) {
        return powerRepository.getById(Long.valueOf(powerId));
    }
}
