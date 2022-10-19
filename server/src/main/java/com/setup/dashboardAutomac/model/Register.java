package com.setup.dashboardAutomac.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Register {

    @Id @GeneratedValue(strategy = GenerationType.AUTO) private Long id;

    @Column(nullable = false) private String name;

    public Long getId() { return id;  }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    @Override public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Register register = (Register) o;

        return id != null ? id.equals(register.id) : register.id == null;
    }
}
