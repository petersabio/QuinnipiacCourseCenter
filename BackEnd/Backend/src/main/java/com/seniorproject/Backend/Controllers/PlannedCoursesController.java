package com.seniorproject.Backend.Controllers;

import com.seniorproject.Backend.entities.Courses;
import com.seniorproject.Backend.entities.PlannedCourses;
import com.seniorproject.Backend.repositories.PlannedCoursesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/")
public class PlannedCoursesController {

    @Autowired
    private PlannedCoursesRepository repo;
    
    @PostMapping("planCourse")
    public ResponseEntity<PlannedCourses> planCourse(@RequestBody PlannedCourses plannedcourse){
        System.out.println("test");
        return ResponseEntity.ok(repo.save(plannedcourse));
    }

    @GetMapping("plannedCourses")
    public List<PlannedCourses> getPlannedCourses() {
        return this.repo.findAll();
    }

}
