package com.setup.dashboardAutomac.model;

import java.io.Serializable;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
public class Users {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid")
    @Column private Long id;

    public Long getId() { return id;  }
    public void setId(Long id) { this.id = id; }

    @Column private String name;
    
    public String getName() { return name;  }
    public void setName(String name) { this.name = name; }

    @Override public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Users user = (Users) o;

        return id != null ? id.equals(user.id) : user.id == null;
    }
}