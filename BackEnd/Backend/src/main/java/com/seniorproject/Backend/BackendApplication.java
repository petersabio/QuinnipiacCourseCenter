package com.seniorproject.Backend;

import com.seniorproject.Backend.entities.User;
import com.seniorproject.Backend.repositories.CoursesRepository;
import com.seniorproject.Backend.services.UserService;
import com.seniorproject.Backend.entities.Courses;
import com.seniorproject.Backend.services.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDateTime;
import java.time.LocalTime;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner{
	@Autowired
	private UserService userService;
	@Autowired
	private CourseService courseService;
	@Autowired
	private CoursesRepository coursesRepository;
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);

	}


	@Override
	public void run(String... args) throws Exception {
		
	}

	private void createAccount(User user){
		userService.createUser(user);
		//System.out.println("New User Added");
	}

	private void createAccount(int userID, String name, String username, String password, int usertype, int credits,String major, String minor, float gpa, int advidorID){
		User newUser = new User(userID,name,username,password,usertype,credits, major,minor,gpa,advidorID);
		userService.createUser(newUser);
		//System.out.println("New User Added");
	}


}
