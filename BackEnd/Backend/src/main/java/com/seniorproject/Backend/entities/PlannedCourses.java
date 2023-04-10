package com.seniorproject.Backend.entities;

import jakarta.persistence.*;
import static jakarta.persistence.GenerationType.SEQUENCE;

@Entity
@Table(name = "PlannedCoursesTable")
public class PlannedCourses {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy =SEQUENCE, generator ="ID_SEQ")
    private int ID;
    @Column(name = "userName")
    private String userName;
    @Column(name = "coursecode")
    private String coursecode;
    @Column(name = "semester")
    private String semester;
    @Column(name = "grade")
    private int grade;

    //Getters and Setters

    public int getID(){
        return ID;
    }

    public void setID(int ID){
        this.ID = ID;
    }

    //User ID
    public String getUserName() {
        return userName;
    }
    public void setUserName(String userName) {
        this.userName = userName;
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
