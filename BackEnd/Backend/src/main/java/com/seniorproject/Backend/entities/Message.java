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
    @Column(name = "senderID")
    private int senderID;
    @Column(name = "receiverID")
    private int recieverID;
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
    public int getSenderID() {
        return senderID;
    }
    public void setSenderID(int senderID) {
        this.senderID = senderID;
    }

    //RecieverID
    public int getRecieverID() {
        return recieverID;
    }
    public void setRecieverID(int recieverID) {
        this.recieverID = recieverID;
    }

    //Message
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
}