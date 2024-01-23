package com.prueba.calculator.data.utils;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class SearchStatement {

    private String key;
    private Object value;
    private SearchOperation operation;
}
