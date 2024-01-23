package com.unir.calculadora.service;
import com.unir.calculadora.model.pojo.BaseResponse;
import com.unir.calculadora.model.pojo.Error;
import com.unir.calculadora.model.pojo.OperationResult;
import com.unir.calculadora.model.pojo.OperationSummary;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface OperationsService {

    BaseResponse<OperationResult, Error> calculateAddition(@RequestBody List<Double> operands);

    BaseResponse<OperationResult, Error> calculateMultiplication(@RequestBody List<Double> operands);

    BaseResponse<OperationResult, Error> calculateDivision(@RequestBody List<Double> operands);

    BaseResponse<OperationResult, Error> calculateRoot(@RequestBody List<Double> operands);

    BaseResponse<OperationResult, Error> calculatePower(@RequestBody List<Double> operands);

    BaseResponse<OperationSummary, Error> getOperation(Long id);
}
