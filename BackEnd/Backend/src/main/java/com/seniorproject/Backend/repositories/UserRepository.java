package com.seniorproject.Backend.repositories;

import com.seniorproject.Backend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    User findByusername(String name);

}
