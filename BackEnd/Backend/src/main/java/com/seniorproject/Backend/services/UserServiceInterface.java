package com.seniorproject.Backend.services;

import com.seniorproject.Backend.entities.User;

import java.util.List;

public interface UserServiceInterface {
    User createUser(User user);
    User updateUser(User user);
    List<User> getAllUsers();
    User getUserById(Integer userId);
    void deleteUser(Integer userId);
}
