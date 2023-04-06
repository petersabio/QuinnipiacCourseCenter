package com.seniorproject.Backend.services;

import com.seniorproject.Backend.entities.User;
import com.seniorproject.Backend.exceptions.ResourceNotFoundException;
import com.seniorproject.Backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@Service
public class UserService implements UserServiceInterface{
    @Autowired
    private UserRepository userRepository;

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User updateUser(User user) {
        Optional<User> userDb = this.userRepository.findById(user.getUserID());
        if(userDb.isPresent()){
            User userUpdate = userDb.get();
            userUpdate.setUserID(user.getUserID());
            userUpdate.setName(user.getName());
            userUpdate.setUsername(user.getUsername());
            userUpdate.setPassword(user.getPassword());
            userUpdate.setUsertype(user.getUsertype());
            userUpdate.setCredits(user.getCredits());
            userUpdate.setMajor(user.getMajor());
            userUpdate.setMinor(user.getMinor());
            userUpdate.setGpa(user.getGpa());
            userUpdate.setAdvisorID(user.getAdvisorID());
            userRepository.save(userUpdate);
            return userUpdate;
        }
        else{
            throw new ResourceNotFoundException("Record not Found with id: " + user.getUserID());
        }
    }

    @Override
    public List<User> getAllUsers() {
        return this.userRepository.findAll();
    }

    @Override
    public User getUserById(Integer userId) {
        Optional<User> userDb = this.userRepository.findById(userId);
        if (userDb.isPresent()) {
            return userDb.get();
        }else{
            throw new ResourceNotFoundException("Record not Found with id: " + userId);
        }
    }

    @Override
    public void deleteUser(Integer userId) {
        Optional<User> userDb = this.userRepository.findById(userId);
        if (userDb.isPresent()) {
            this.userRepository.delete(userDb.get());
        }else{
            throw new ResourceNotFoundException("Record not Found with id: " + userId);
        }
    }

}
