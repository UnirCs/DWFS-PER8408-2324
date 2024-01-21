package com.unir.calculadora.controller;

import com.unir.calculadora.model.pojo.*;
import com.unir.calculadora.model.pojo.Error;
import com.unir.calculadora.model.request.OperationRequest;
import com.unir.calculadora.service.OperationsService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.SchemaProperty;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Slf4j
@Tag(name = "Operations")
public class OperationsController {

    private final OperationsService service;

    @PostMapping("/v1/additions")
    @Operation(
            operationId = "addition",
            description = "Addition of numbers",
            summary = "Sums up numbers and give the result with the operation ID registered",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos del producto a crear.",
                    required = true,
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = OperationRequest.class),
                            examples = {
                                    @ExampleObject(
                                            name = "Positive numbers",
                                            summary = "Operands both positive",
                                            value = "{ 'operands': [12, 22] }"
                                    ),
                                    @ExampleObject(
                                            name = "With negative numbers",
                                            summary = "Operands with negative value",
                                            value = "{ 'operands': [12, -22] }"
                                    ),
                            }
                    )
            )
    )
    @ApiResponse(
            responseCode = "200",
            content = @Content(
                    mediaType = "application/json",
                    examples = {
                            @ExampleObject(
                                    name = "Positive numbers results",
                                    summary = "Operands both positive",
                                    value = "{ 'data': { 'operation_id': 1, 'result': 32 }"
                            ),
                            @ExampleObject(
                                    name = "Result with negative numbers",
                                    summary = "Operands with negative value",
                                    value = "{ 'data': { 'operation_id': 1, 'result': -10 }"
                            ),
                    },
                    schema = @Schema(type = "object"),
                    schemaProperties = {
                            @SchemaProperty(
                                    name = "data",
                                    schema = @Schema(implementation = OperationResult.class)
                            ),
                            @SchemaProperty(
                                    name = "error",
                                    schema = @Schema(implementation = Error.class, requiredProperties = { "code", "message"})
                            )
                    }
            )
    )
    @ApiResponse(
            responseCode = "400",
            content = @Content(
                    mediaType = "application/json",
                    examples = {
                            @ExampleObject(
                                    name = "Invalid operation",
                                    summary = "Invalid operation",
                                    value = "{'data': null, 'error': { 'code': 'INVALID_OPERATION', message: 'This operation is not valid' } }"
                            )
                    },
                    schema = @Schema(type = "object"),
                    schemaProperties = {
                            @SchemaProperty(
                                    name = "data",
                                    schema = @Schema(implementation = String.class)
                            ),
                            @SchemaProperty(
                                    name = "error",
                                    schema = @Schema(implementation = Error.class, requiredProperties = { "code", "message"})
                            )
                    }
            )
    )
    @ApiResponse(
            responseCode = "500",
            content = @Content(
                    mediaType = "application/json",
                    examples = {
                            @ExampleObject(
                                    name = "Invalid operation",
                                    summary = "Invalid operation",
                                    value = "{'data': null, 'error': { 'code': 'INTERNAL_SERVER_ERROR', message: 'Internal server error' } }"
                            )
                    },
                    schema = @Schema(type = "object"),
                    schemaProperties = {
                            @SchemaProperty(
                                    name = "data",
                                    schema = @Schema(implementation = String.class)
                            ),
                            @SchemaProperty(
                                    name = "error",
                                    schema = @Schema(implementation = Error.class, requiredProperties = { "code", "message"})
                            )
                    }
            )
    )
    public ResponseEntity<BaseResponse<OperationResult, Error>> calculateAddition(
            @RequestBody OperationRequest operationRequest
    ) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(service.calculateAddition(operationRequest.getOperands()));
        } catch (Exception e) {
            Error error = new Error("INTERNAL_SERVER_ERROR", "Internal Server Error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new BaseResponse<>(null, error));
        }

    }

    @PostMapping("/v1/multiplications")
    @Operation(
            operationId = "multiplications",
            description = "Multiplications of numbers",
            summary = "Multiplies numbers and give the result with the operation ID registered",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
            required = true,
            content = @Content(
                    examples = {
                            @ExampleObject(
                                    name = "Positive numbers",
                                    summary = "Operands both positive",
                                    value = "{ 'operands': [10, 2] }"
                            ),
                            @ExampleObject(
                                    name = "With negative numbers",
                                    summary = "Operands with negative value",
                                    value = "{ 'operands': [1, -20] }"
                            ),
                    })
            )
    )
    @ApiResponse(
            responseCode = "200",
            content = @Content(
                    mediaType = "application/json",
                    examples = {
                            @ExampleObject(
                                    name = "Positive numbers results",
                                    summary = "Operands both positive",
                                    value = "{ 'data': { 'operation_id': 1, 'result': 20 }"
                            ),
                            @ExampleObject(
                                    name = "Result with negative numbers",
                                    summary = "Operands with negative value",
                                    value = "{ 'data': { 'operation_id': 1, 'result': -20 }"
                            ),
                    },
                    schema = @Schema(type = "object"),
                    schemaProperties = {
                            @SchemaProperty(
                                    name = "data",
                                    schema = @Schema(implementation = OperationResult.class)
                            ),
                            @SchemaProperty(
                                    name = "error",
                                    schema = @Schema(implementation = Error.class, requiredProperties = { "code", "message"})
                            )
                    }
            )
    )
    @ApiResponse(
            responseCode = "400",
            content = @Content(
                    mediaType = "application/json",
                    examples = {
                            @ExampleObject(
                                    name = "Invalid operation",
                                    summary = "Invalid operation",
                                    value = "{'data': null, 'error': { 'code': 'INVALID_OPERATION', message: 'This operation is not valid' } }"
                            )
                    },
                    schema = @Schema(type = "object"),
                    schemaProperties = {
                            @SchemaProperty(
                                    name = "data",
                                    schema = @Schema(implementation = String.class)
                            ),
                            @SchemaProperty(
                                    name = "error",
                                    schema = @Schema(implementation = Error.class, requiredProperties = { "code", "message"})
                            )
                    }
            )
    )
    @ApiResponse(
            responseCode = "500",
            content = @Content(
                    mediaType = "application/json",
                    examples = {
                            @ExampleObject(
                                    name = "Invalid operation",
                                    summary = "Invalid operation",
                                    value = "{'data': null, 'error': { 'code': 'INTERNAL_SERVER_ERROR', message: 'Internal server error' } }"
                            )
                    },
                    schema = @Schema(type = "object"),
                    schemaProperties = {
                            @SchemaProperty(
                                    name = "data",
                                    schema = @Schema(implementation = String.class)
                            ),
                            @SchemaProperty(
                                    name = "error",
                                    schema = @Schema(implementation = Error.class, requiredProperties = { "code", "message"})
                            )
                    }
            )
    )
    public ResponseEntity<BaseResponse<OperationResult, Error>> calculateMultiplication(
            @RequestBody OperationRequest operationRequest
    ) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(service.calculateMultiplication(operationRequest.getOperands()));
        } catch (Exception e) {
            Error error = new Error("INTERNAL_SERVER_ERROR", "Internal Server Error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new BaseResponse<>(null, error));
        }
    }

    @PostMapping("/v1/divisions")
    @Operation(
            operationId = "divisions",
            description = "Division of numbers",
            summary = "Multiplies numbers and give the result with the operation ID registered")
    @ApiResponse(
            responseCode = "200",
            content = @Content(
                    mediaType = "application/json",
                    examples = {
                            @ExampleObject(
                                    name = "Positive numbers results",
                                    summary = "Operands both positive",
                                    value = "{ 'data': { 'operation_id': 1, 'result': 20 }"
                            ),
                            @ExampleObject(
                                    name = "Result with negative numbers",
                                    summary = "Operands with negative value",
                                    value = "{ 'data': { 'operation_id': 1, 'result': -20 }"
                            ),
                    },
                    schema = @Schema(type = "object"),
                    schemaProperties = {
                            @SchemaProperty(
                                    name = "data",
                                    schema = @Schema(implementation = String.class)
                            ),
                            @SchemaProperty(
                                    name = "error",
                                    schema = @Schema(implementation = Error.class, requiredProperties = { "code", "message"})
                            )
                    }
            )
    )
    @ApiResponse(
            responseCode = "400",
            content = @Content(
                    mediaType = "application/json",
                    examples = {
                            @ExampleObject(
                                    name = "Invalid operation",
                                    summary = "Invalid operation",
                                    value = "{'data': null, 'error': { 'code': 'INVALID_OPERATION', message: 'This operation is not valid' } }"
                            )
                    },
                    schema = @Schema(type = "object"),
                    schemaProperties = {
                            @SchemaProperty(
                                    name = "data",
                                    schema = @Schema(implementation = String.class)
                            ),
                            @SchemaProperty(
                                    name = "error",
                                    schema = @Schema(implementation = Error.class, requiredProperties = { "code", "message"})
                            )
                    }
            )
    )
    @ApiResponse(
            responseCode = "500",
            content = @Content(
                    mediaType = "application/json",
                    examples = {
                            @ExampleObject(
                                    name = "Invalid operation",
                                    summary = "Invalid operation",
                                    value = "{'data': null, 'error': { 'code': 'INTERNAL_SERVER_ERROR', message: 'Internal server error' } }"
                            )
                    },
                    schema = @Schema(type = "object"),
                    schemaProperties = {
                            @SchemaProperty(
                                    name = "data",
                                    schema = @Schema(implementation = String.class)
                            ),
                            @SchemaProperty(
                                    name = "error",
                                    schema = @Schema(implementation = Error.class, requiredProperties = { "code", "message"})
                            )
                    }
            )
    )
    public ResponseEntity<BaseResponse<OperationResult, Error>> calculateDivision(
            @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    required = true,
                    content = @Content(
                            examples = {
                                    @ExampleObject(
                                            name = "Positive numbers",
                                            summary = "Operands both positive",
                                            value = "{ 'operands': [40, 2] }"
                                    ),
                                    @ExampleObject(
                                            name = "With negative numbers",
                                            summary = "Operands with negative value",
                                            value = "{ 'operands': [20, -1] }"
                                    ),
                            })) OperationRequest operationRequest
    ) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(service.calculateDivision(operationRequest.getOperands()));
        } catch (Exception e) {
            Error error = new Error("INTERNAL_SERVER_ERROR", "Internal Server Error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new BaseResponse<>(null, error));
        }

    }

    @PostMapping("/v1/roots")
    @Operation(
            operationId = "roots",
            description = "Roots of numbers",
            summary = "Get the square root of a positive number and give the result with the operation ID registered",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
            required = true,
            content = @Content(
                    examples = {
                            @ExampleObject(
                                    name = "Positive number",
                                    summary = "Positive operand",
                                    value = "{ 'operands': [4] }"
                            )
                    })
            )
    )
    @ApiResponse(
            responseCode = "200",
            content = @Content(
                    mediaType = "application/json",
                    examples = {
                            @ExampleObject(
                                    name = "Positive number results",
                                    summary = "Operand positive",
                                    value = "{ 'data': { 'operation_id': 1, 'result': 2 }"
                            )
                    },
                    schema = @Schema(type = "object"),
                    schemaProperties = {
                            @SchemaProperty(
                                    name = "data",
                                    schema = @Schema(implementation = String.class)
                            ),
                            @SchemaProperty(
                                    name = "error",
                                    schema = @Schema(implementation = Error.class, requiredProperties = { "code", "message"})
                            )
                    }
            )
    )
    @ApiResponse(
            responseCode = "400",
            content = @Content(
                    mediaType = "application/json",
                    examples = {
                            @ExampleObject(
                                    name = "Invalid operation",
                                    summary = "Invalid operation",
                                    value = "{'data': null, 'error': { 'code': 'INVALID_OPERATION', message: 'This operation is not valid' } }"
                            )
                    },
                    schema = @Schema(type = "object"),
                    schemaProperties = {
                            @SchemaProperty(
                                    name = "data",
                                    schema = @Schema(implementation = String.class)
                            ),
                            @SchemaProperty(
                                    name = "error",
                                    schema = @Schema(implementation = Error.class, requiredProperties = { "code", "message"})
                            )
                    }
            )
    )
    @ApiResponse(
            responseCode = "500",
            content = @Content(
                    mediaType = "application/json",
                    examples = {
                            @ExampleObject(
                                    name = "Invalid operation",
                                    summary = "Invalid operation",
                                    value = "{'data': null, 'error': { 'code': 'INTERNAL_SERVER_ERROR', message: 'Internal server error' } }"
                            )
                    },
                    schema = @Schema(type = "object"),
                    schemaProperties = {
                            @SchemaProperty(
                                    name = "data",
                                    schema = @Schema(implementation = String.class)
                            ),
                            @SchemaProperty(
                                    name = "error",
                                    schema = @Schema(implementation = Error.class, requiredProperties = { "code", "message"})
                            )
                    }
            )
    )
    public ResponseEntity<BaseResponse<OperationResult, Error>> calculateRoot(
            @RequestBody OperationRequest operationRequest
    ) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(service.calculateRoot(operationRequest.getOperands()));
        } catch (Exception e) {
            Error error = new Error("INTERNAL_SERVER_ERROR", "Internal Server Error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new BaseResponse<>(null, error));
        }
    }

    @PostMapping("/v1/powers")
    @Operation(
            operationId = "powers",
            description = "Powers of numbers",
            summary = "Get the power of numbers and give the result with the operation ID registered",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    required = true,
                    content = @Content(
                            examples = {
                                    @ExampleObject(
                                            name = "Positive number",
                                            summary = "Positive operand",
                                            value = "{ 'operands': [2, 2] }"
                                    )
                            }))
    )
    @ApiResponse(
            responseCode = "200",
            content = @Content(
                    mediaType = "application/json",
                    examples = {
                            @ExampleObject(
                                    name = "Positive number results",
                                    summary = "Operand positive",
                                    value = "{ 'data': { 'operation_id': 1, 'result': 4 }"
                            )
                    },
                    schema = @Schema(type = "object"),
                    schemaProperties = {
                            @SchemaProperty(
                                    name = "data",
                                    schema = @Schema(implementation = String.class)
                            ),
                            @SchemaProperty(
                                    name = "error",
                                    schema = @Schema(implementation = Error.class, requiredProperties = { "code", "message"})
                            )
                    }
            )
    )
    @ApiResponse(
            responseCode = "400",
            content = @Content(
                    mediaType = "application/json",
                    examples = {
                            @ExampleObject(
                                    name = "Invalid operation",
                                    summary = "Invalid operation",
                                    value = "{'data': null, 'error': { 'code': 'INVALID_OPERATION', message: 'This operation is not valid' } }"
                            )
                    },
                    schema = @Schema(type = "object"),
                    schemaProperties = {
                            @SchemaProperty(
                                    name = "data",
                                    schema = @Schema(implementation = String.class)
                            ),
                            @SchemaProperty(
                                    name = "error",
                                    schema = @Schema(implementation = Error.class, requiredProperties = { "code", "message"})
                            )
                    }
            )
    )
    @ApiResponse(
            responseCode = "500",
            content = @Content(
                    mediaType = "application/json",
                    examples = {
                            @ExampleObject(
                                    name = "Invalid operation",
                                    summary = "Invalid operation",
                                    value = "{'data': null, 'error': { 'code': 'INTERNAL_SERVER_ERROR', message: 'Internal server error' } }"
                            )
                    },
                    schema = @Schema(type = "object"),
                    schemaProperties = {
                            @SchemaProperty(
                                    name = "data",
                                    schema = @Schema(implementation = String.class)
                            ),
                            @SchemaProperty(
                                    name = "error",
                                    schema = @Schema(implementation = Error.class, requiredProperties = { "code", "message"})
                            )
                    }
            )
    )
    public ResponseEntity<BaseResponse<OperationResult, Error>> calculatePower(
            @RequestBody OperationRequest operationRequest
    ) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(service.calculatePower(operationRequest.getOperands()));
        } catch (Exception e) {
            Error error = new Error("INTERNAL_SERVER_ERROR", "Internal Server Error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new BaseResponse<>(null, error));
        }
    }

    @GetMapping("/v1/operations/{id}")
    @Operation(
            operationId = "operations",
            description = "Operation summary",
            summary = "Get the operation details")
    @ApiResponse(
            responseCode = "200",
            content = @Content(
                    mediaType = "application/json",
                    examples = {
                            @ExampleObject(
                                    name = "Positive number results",
                                    summary = "Operand positive",
                                    value = "{ 'data': { 'operation_id': 1, 'result': 4 }"
                            )
                    },
                    schema = @Schema(type = "object"),
                    schemaProperties = {
                            @SchemaProperty(
                                    name = "data",
                                    schema = @Schema(implementation = OperationSummary.class)
                            ),
                            @SchemaProperty(
                                    name = "error",
                                    schema = @Schema(implementation = Error.class, requiredProperties = { "code", "message"})
                            )
                    }
            )
    )
    @ApiResponse(
            responseCode = "400",
            content = @Content(
                    mediaType = "application/json",
                    examples = {
                            @ExampleObject(
                                    name = "Invalid operation",
                                    summary = "Invalid operation",
                                    value = "{'data': null, 'error': { 'code': 'INVALID_OPERATION', message: 'This operation is not valid' } }"
                            )
                    },
                    schema = @Schema(type = "object"),
                    schemaProperties = {
                            @SchemaProperty(
                                    name = "data",
                                    schema = @Schema(implementation = OperationSummary.class)
                            ),
                            @SchemaProperty(
                                    name = "error",
                                    schema = @Schema(implementation = Error.class, requiredProperties = { "code", "message"})
                            )
                    }
            )
    )
    @ApiResponse(
            responseCode = "500",
            content = @Content(
                    mediaType = "application/json",
                    examples = {
                            @ExampleObject(
                                    name = "Invalid operation",
                                    summary = "Invalid operation",
                                    value = "{'data': null, 'error': { 'code': 'INTERNAL_SERVER_ERROR', message: 'Internal server error' } }"
                            )
                    },
                    schema = @Schema(type = "object"),
                    schemaProperties = {
                            @SchemaProperty(
                                    name = "data",
                                    schema = @Schema(implementation = OperationSummary.class)
                            ),
                            @SchemaProperty(
                                    name = "error",
                                    schema = @Schema(implementation = Error.class, requiredProperties = { "code", "message"})
                            )
                    }
            )
    )
    public ResponseEntity<BaseResponse<OperationSummary, Error>> getOperation(
            @PathVariable() Long id
    ) {
        try {
            BaseResponse<OperationSummary, Error> response = service.getOperation(id);
            return ResponseEntity.status(HttpStatus.OK).body(response);
        } catch (Exception e) {
            Error error = new Error("INTERNAL_SERVER_ERROR", "Internal Server Error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new BaseResponse<>(null, error));
        }
    }
}
