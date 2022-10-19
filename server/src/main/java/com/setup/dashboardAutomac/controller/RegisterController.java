package com.setup.dashboardAutomac.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.setup.dashboardAutomac.model.Register;
import com.setup.dashboardAutomac.repository.RegisterRepository;
@CrossOrigin
@RestController
@RequestMapping("/register")
public class RegisterController {

    @Autowired private RegisterRepository registerRepository;
    
    @GetMapping public List<Register> getAlRegisters() {
        return registerRepository.findAll();
    }

    @PostMapping @ResponseStatus public Register InsertNewRegister(@RequestBody Register register) {
        return registerRepository.save(register);
    }
}