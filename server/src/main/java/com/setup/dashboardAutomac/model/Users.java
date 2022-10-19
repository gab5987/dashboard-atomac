package com.setup.dashboardAutomac.model;

import java.io.Serializable;
import java.util.UUID;

import javax.persistence.*;

@Entity
public class Users implements Serializable {

    public static String generateString() {
        String uuid = UUID.randomUUID().toString();
        return uuid;
    }

    @Column private String id = generateString();
    public String getId() { return id;  }
    public void setId(String id) { this.id = id; }

    @Column private String name;
    public String getName() { return name;  }
    public void setName(String name) { this.name = name; }

    @Id
    @Column private String passWord;
    public String getPassWord() { return passWord; }
    public void setPassWord(String passWord) { this.passWord = passWord; }
}