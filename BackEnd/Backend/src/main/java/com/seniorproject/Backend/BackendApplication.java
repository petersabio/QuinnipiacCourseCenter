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
		//System.out.println("test");
		//User testuser = new User(1,"dave","test","1234",0,40,"lunch","math",3,4);
		//createAccount(testuser);
		//java.sql.Time time = new java.sql.Time(1234567899);
		//Courses testcourse = new Courses("test", "test", "test", "test", "test", "test", "test", 2,time);
		//this.coursesRepository.save(testcourse);
		//courseService.getAllCourses().forEach(System.out::println);


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
