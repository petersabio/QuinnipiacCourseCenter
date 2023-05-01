package com.seniorproject.Backend.Controllers;
import com.seniorproject.Backend.entities.Courses;

import com.seniorproject.Backend.repositories.CoursesRepository;
import com.seniorproject.Backend.services.CourseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/")
public class CourseController {
    @Autowired
    private CoursesRepository coursesRepository;
    private CourseService courseService;

    @GetMapping("courses") //sets url mapping for course data
    public List<Courses> getCourses(){
        return this.coursesRepository.findAll();
    }

    @PostMapping("addCourse")
    public ResponseEntity<Courses> addCourse(@RequestBody Courses course){
        return ResponseEntity.ok(coursesRepository.save(course));
    }

    @PostMapping("removeCourse")
    public void removeCourse(@RequestBody Courses course){
        System.out.println("remove course");
        coursesRepository.deleteById(course.getCoursecode());
        //return ResponseEntity.ok(coursesRepository.delete(course));
    }

}
