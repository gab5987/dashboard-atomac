package com.setup.dashboardAutomac.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.setup.dashboardAutomac.model.Register;

@Repository
public interface RegisterRepository extends JpaRepository<Register, Long> {

}
