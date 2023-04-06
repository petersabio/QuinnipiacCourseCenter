package com.seniorproject.Backend.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.*;

@Entity
@Table(name = "PlannedCoursesTable")
public class PlannedCourses {
    @Id
    @Column(name = "userID")
    private int userID;
    //@Id
    @Column(name = "coursecode")
    private String coursecode;
    @Column(name = "semester")
    private String semester;
    @Column(name = "grade")
    private int grade;

    //Getters and Setters

    //User ID
    public int getUserID() {
        return userID;
    }
    public void setUserID(int userID) {
        this.userID = userID;
    }

    //Course Code
    public String getCoursecode() {
        return coursecode;
    }
    public void setCoursecode(String coursecode) {
        this.coursecode = coursecode;
    }

    //Semester
    public String getSemester() {
        return semester;
    }
    public void setSemester(String semester) {
        this.semester = semester;
    }

    //Grade
    public int getGrade() {
        return grade;
    }
    public void setGrade(int grade) {
        this.grade = grade;
    }
}
