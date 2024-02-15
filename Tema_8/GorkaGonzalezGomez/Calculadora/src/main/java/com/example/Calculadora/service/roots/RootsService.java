package com.example.Calculadora.service.roots;

import com.example.Calculadora.model.pojo.roots.Root;
import com.example.Calculadora.model.request.CreateRootRequest;

public interface RootsService {
    Root createRoot(CreateRootRequest request);

    Root getRoot(String rootId);
}
