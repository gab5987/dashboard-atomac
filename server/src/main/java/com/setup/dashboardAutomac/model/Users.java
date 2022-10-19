package com.setup.dashboardAutomac.model;

import java.io.Serializable;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
public class Users {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid")
    @Column private String id;

    public String getId() { return id;  }
    public void setId(String id) { this.id = id; }

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