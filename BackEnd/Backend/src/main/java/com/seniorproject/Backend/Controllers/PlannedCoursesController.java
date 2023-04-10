package com.seniorproject.Backend.Controllers;

import com.seniorproject.Backend.entities.PlannedCourses;
import com.seniorproject.Backend.repositories.PlannedCoursesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

}
