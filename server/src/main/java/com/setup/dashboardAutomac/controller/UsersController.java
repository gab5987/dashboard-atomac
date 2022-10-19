package com.setup.dashboardAutomac.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.setup.dashboardAutomac.model.Users;
import com.setup.dashboardAutomac.repository.UsersRepository;

@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired private UsersRepository usersRepository;
    
    @GetMapping public List<Users> getAlUsers() {
        return usersRepository.findAll();
    }

    @PostMapping @ResponseStatus public Users InsertNewUser(@RequestBody Users users) {
        return usersRepository.save(users);
    }
}