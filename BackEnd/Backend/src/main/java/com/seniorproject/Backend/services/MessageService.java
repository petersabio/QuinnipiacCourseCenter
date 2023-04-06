package com.seniorproject.Backend.services;

import com.seniorproject.Backend.entities.Message;
import com.seniorproject.Backend.exceptions.ResourceNotFoundException;
import com.seniorproject.Backend.repositories.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class MessageService implements MessageServiceInterface{

    @Autowired
    private MessageRepository messageRepository;
    @Override
    public Message createMessage(Message message) {
        return messageRepository.save(message);
    }

    @Override
    public Message updateMessage(Message message) {
        Optional<Message> messageDb = this.messageRepository.findById(message.getMessageID());
        if(messageDb.isPresent()){
            Message messageUpdate = messageDb.get();
            messageUpdate.setMessageID(message.getMessageID());
            messageUpdate.setSenderID(message.getSenderID());
            messageUpdate.setRecieverID(message.getRecieverID());
            messageUpdate.setMessage(message.getMessage());

            messageRepository.save(messageUpdate);
            return messageUpdate;
        }else{
            throw new ResourceNotFoundException("Record not Found with code: " + message.getMessageID());
        }
    }

    @Override
    public List<Message> getAllMessages() {
        return messageRepository.findAll();
    }

    @Override
    public Message getMessageById(Integer messageID) {
        Optional<Message> messageDb = this.messageRepository.findById(messageID);
        if (messageDb.isPresent()) {
            return messageDb.get();
        }else{
            throw new ResourceNotFoundException("Record not Found with id: " + messageID);
        }
    }

    @Override
    public void deleteMessage(Integer messageID) {
        Optional<Message> messageDb = this.messageRepository.findById(messageID);
        if (messageDb.isPresent()) {
            this.messageRepository.delete(messageDb.get());
        }else{
            throw new ResourceNotFoundException("Record not Found with id: " + messageID);
        }
    }
}
