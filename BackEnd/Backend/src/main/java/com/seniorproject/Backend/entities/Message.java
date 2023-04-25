package com.seniorproject.Backend.entities;

import jakarta.persistence.*;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Table;

import static jakarta.persistence.GenerationType.SEQUENCE;

@Entity
@Table(name = "MessageTable")
public class Message {
    @Id
    @Column(name = "messageID")
    @GeneratedValue(strategy =SEQUENCE, generator ="ID_SEQ")
    private int messageID;
    @Column(name = "studentName")
    private String studentName;
    @Column(name = "advisorName")
    private String advisorName;
    @Column(name = "message")
    private String message;

    //getters and setters for all variables

    //messageID
    public int getMessageID() {
        return messageID;
    }
    public void setMessageID(int messageID) {
        this.messageID = messageID;
    }

    //senderID
    public String getStudentName() {
        return studentName;
    }
    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    //RecieverID 
    public String getAdvisorName() {
        return advisorName;
    }
    public void setAdvisorName(String advisorName) {
        this.advisorName = advisorName;
    }

    //Message
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
}