package com.seniorproject.Backend.Controllers;

import com.seniorproject.Backend.entities.PlannedCourses;
import com.seniorproject.Backend.repositories.PlannedCoursesRepository;

import java.util.List;

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
        return ResponseEntity.ok(repo.save(plannedcourse));
    }

    // @PostMapping("plannedCourses")
    // public List<PlannedCourses> findPlannedCourses(){
    //     //System.out.println("find all planned courses api call");
    //     return this.repo.findAll();
    // }

}
