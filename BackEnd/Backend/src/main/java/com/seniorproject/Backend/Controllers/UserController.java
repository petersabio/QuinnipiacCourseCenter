package com.seniorproject.Backend.Controllers;

import com.seniorproject.Backend.entities.User;
import com.seniorproject.Backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    //Checks login credentials
    @PostMapping("login")
    public ResponseEntity<?> loginUser(@RequestBody User userData){
        System.out.println(userData);
        User user =userRepository.findByusername(userData.getUsername());
        if(user.getPassword().equals(userData.getPassword()))
        {
            return ResponseEntity.ok(user);
        }
        return (ResponseEntity<?>) ResponseEntity.internalServerError();
    }

    //adds users to DB
    @PostMapping("createUser")
    public ResponseEntity<User> createUser(@RequestBody User user){
        return ResponseEntity.ok(userRepository.save(user));
    }
    //returns list of all users
    @GetMapping("Users")
    public List<User> getUsers() {return this.userRepository.findAll();}

    //get info for specific user based on username
    @GetMapping("getUser")
    public User getUserInfo(@RequestBody User userData){
        return this.userRepository.findByusername(userData.getUsername());
        
    }



}

