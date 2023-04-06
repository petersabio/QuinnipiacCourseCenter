package com.seniorproject.Backend.Controllers;
import com.seniorproject.Backend.entities.Courses;

import com.seniorproject.Backend.repositories.CoursesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/")
public class CourseController {
    @Autowired
    private CoursesRepository coursesRepository;

    @GetMapping("courses") //sets url mapping for course data
    public List<Courses> getCourses(){
        return this.coursesRepository.findAll();
    }
}
