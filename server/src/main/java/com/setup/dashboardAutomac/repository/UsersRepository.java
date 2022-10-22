package com.setup.dashboardAutomac.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.setup.dashboardAutomac.model.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, String> {

}