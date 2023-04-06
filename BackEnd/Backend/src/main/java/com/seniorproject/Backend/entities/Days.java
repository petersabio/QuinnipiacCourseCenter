package com.seniorproject.Backend.entities;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "DaysTable")
public class Days {
    @Id
    @Column(name = "Id")
    private int Id;

    @OneToMany
    @JoinTable(name = "Days_Courses",
            joinColumns = {@JoinColumn(name = "day", referencedColumnName = "day")},
            inverseJoinColumns = {@JoinColumn(name = "days", referencedColumnName = "days")})
    private Set<Courses> courses;

    @Column(name = "day")
    private String day;


    public Days(int id, String day) {
        Id = id;
        this.day = day;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }
}
