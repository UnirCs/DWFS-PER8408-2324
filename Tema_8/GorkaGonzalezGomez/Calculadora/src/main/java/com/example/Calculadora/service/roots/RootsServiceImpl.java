package com.example.Calculadora.service.roots;

import com.example.Calculadora.data.root.RootRepository;
import com.example.Calculadora.model.pojo.roots.Root;
import com.example.Calculadora.model.request.CreateRootRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class RootsServiceImpl implements RootsService {
    @Autowired
    private RootRepository rootRepository;

    @Override
    public Root createRoot(CreateRootRequest request) {
        Root root = Root.builder().radicand(request.getOperands().getRadicand()).index(request.getOperands().getIndex())
                .result((int) Math.round(Math.pow(request.getOperands().getRadicand(), (double) 1 / request.getOperands().
                        getIndex()))).build();
        return rootRepository.save(root);
    }

    @Override
    public Root getRoot(String rootId) {
        return rootRepository.getById(Long.valueOf(rootId));
    }
}
