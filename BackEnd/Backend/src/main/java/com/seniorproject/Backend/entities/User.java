package com.seniorproject.Backend.entities;

import jakarta.persistence.*;


import static jakarta.persistence.GenerationType.SEQUENCE;
@Entity
@Table(name = "UserTable")
public class User {
    @Id
    @Column(name = "UserID")
    @GeneratedValue(strategy =SEQUENCE, generator ="ID_SEQ")
    private int userID;
    @Column(name = "name")
    private String name;
    @Column(name = "username")
    private String username;
    @Column(name = "password")
    private String Password;
    @Column(name = "usertype")
    private int usertype;
    @Column(name = "credits")
    private int credits;
    @Column(name = "major")
    private  String major;
    @Column(name = "minor")
    private String minor;
    @Column(name = "gpa")
    private float gpa;
    @Column(name = "advisorID")
    private int advisorID;

    public User(){}

    public User(int userID, String name, String username, String password, int usertype, int credits, String major, String minor, float gpa, int advisorID) {
        this.userID = userID;
        this.name = name;
        this.username = username;
        this.Password = password;
        this.usertype = usertype;
        this.credits = credits;
        this.major = major;
        this.minor = minor;
        this.gpa = gpa;
        this.advisorID = advisorID;
    }

    //Getters and Setters for all variables

    //UserID
    public int getUserID() {
        return userID;
    }
    public void setUserID(int userID) {
        this.userID = userID;
    }

    //Name
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    //UserName
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    //Password
    public String getPassword() {
        return Password;
    }
    public void setPassword(String password) {
        Password = password;
    }

    //UserType
    public int getUsertype() {
        return usertype;
    }
    public void setUsertype(int usertype) {
        this.usertype = usertype;
    }

    //Credits
    public int getCredits() {
        return credits;
    }
    public void setCredits(int credits) {
        this.credits = credits;
    }

    //major
    public String getMajor() {
        return major;
    }
    public void setMajor(String major) {
        this.major = major;
    }

    //Minor
    public String getMinor() {
        return minor;
    }
    public void setMinor(String minor) {
        this.minor = minor;
    }

    //GPA
    public float getGpa() {
        return gpa;
    }
    public void setGpa(float gpa) {
        this.gpa = gpa;
    }

    //advisorID
    public int getAdvisorID() {
        return advisorID;
    }
    public void setAdvisorID(int advisorID) {
        this.advisorID = advisorID;
    }

    @Override
    public String toString() {
        return "User{" +
                "userID=" + userID +
                ", name='" + name + '\'' +
                ", username='" + username + '\'' +
                ", Password='" + Password + '\'' +
                ", usertype=" + usertype +
                ", credits=" + credits +
                ", major='" + major + '\'' +
                ", minor='" + minor + '\'' +
                ", gpa=" + gpa +
                ", advisorID=" + advisorID +
                '}';
    }
}
