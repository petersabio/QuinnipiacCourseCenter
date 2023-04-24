package com.seniorproject.Backend.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seniorproject.Backend.entities.Message;
import com.seniorproject.Backend.repositories.MessageRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/")
public class MessageController {

    @Autowired
    private MessageRepository repo;

    @PostMapping("sendMessage")
    public ResponseEntity<Message> sendMessage(@RequestBody Message message){
        return ResponseEntity.ok(repo.save(message));
    }

    @GetMapping("getMessage")
    public List<Message> getMessage(){
        return this.repo.findAll();
    }
    
}
