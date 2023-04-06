package com.seniorproject.Backend.services;

import com.seniorproject.Backend.entities.Message;

import java.util.List;

public interface MessageServiceInterface {
    Message createMessage(Message message);
    Message updateMessage(Message message);
    List<Message> getAllMessages();
    Message getMessageById(Integer messageID);
    void deleteMessage(Integer messageID);
}
