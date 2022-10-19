package com.setup.dashboardAutomac.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.setup.dashboardAutomac.model.Users;
import com.setup.dashboardAutomac.repository.UsersRepository;

@RestController
public class UsersController {

    @Autowired private UsersRepository usersRepository;

    @RequestMapping("/users") @GetMapping public List<Users> getAlUsers() {
        return usersRepository.findAll();
    }

    @RequestMapping("/com-regUser-id/{id}") @GetMapping public Users getByID(@PathVariable String id) {
        return usersRepository.findById(id).get();
    }

    @RequestMapping("/postUsers") @PostMapping @ResponseStatus public Users InsertNewUser(@RequestBody Users users) {
        return usersRepository.save(users);
    }
}