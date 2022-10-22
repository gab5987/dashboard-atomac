package com.setup.dashboardAutomac.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Register {

    @Id @GeneratedValue(strategy = GenerationType.AUTO) private Long id;
    public Long getId() { return id;  }
    public void setId(Long id) { this.id = id; }

    @Override public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Register register = (Register) o;

        return id != null ? id.equals(register.id) : register.id == null;
    }

    @Column(nullable = false) private String floor;
    public String getFloor() { return floor; }
    public void setFloor(String floor) { this.floor = floor; }

    @Column(nullable = false) private String core;
    public String getCore() { return core; }
    public void setCore(String core) { this.core = core; }

    @Column private String name;
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    @Column(nullable = false) private String requestType;
    public String getRequestType() { return requestType; }
    public void setRequestType(String requestType) { this.requestType = requestType; }

    @Column(nullable = false) private String date;
    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    @Column private String attendant;
    public String getAttendant() { return attendant; }
    public void setAttendant(String attendant) { this.attendant = attendant; }
}
