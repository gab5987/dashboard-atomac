package com.setup.dashboardAutomac.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

import com.setup.dashboardAutomac.model.Register;
import com.setup.dashboardAutomac.repository.RegisterRepository;

@RestController
@RequestMapping("/register")
public class RegisterController {

    @Autowired
    private RegisterRepository registerRepository;
    
    @GetMapping
    public List<Register> getAlRegisters() {
        return registerRepository.findAll();
    }
}
