package com.seniorproject.Backend.services;

import com.seniorproject.Backend.entities.Message;
import com.seniorproject.Backend.entities.PlannedCourses;
import com.seniorproject.Backend.exceptions.ResourceNotFoundException;
import com.seniorproject.Backend.repositories.PlannedCoursesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@Service
public class PlannedCoursesService implements PlannedCoursesServiceInterface{

    @Autowired
    PlannedCoursesRepository plannedCoursesRepository;
    @Override
    public PlannedCourses createPlannedCourse(PlannedCourses plannedCourses) {
        return plannedCoursesRepository.save(plannedCourses);
    }

    @Override
    public PlannedCourses updatePlannedCourse(PlannedCourses plannedCourses) {
        Optional<PlannedCourses> plannedcoursesDb = this.plannedCoursesRepository.findById(plannedCourses.getUserID());
        if(plannedcoursesDb.isPresent()){
            PlannedCourses plannedcoursesUpdate = plannedcoursesDb.get();
            plannedcoursesUpdate.setUserID(plannedCourses.getUserID());
            plannedcoursesUpdate.setCoursecode(plannedCourses.getCoursecode());
            plannedcoursesUpdate.setSemester(plannedCourses.getSemester());
            plannedcoursesUpdate.setGrade(plannedCourses.getGrade());

            plannedCoursesRepository.save(plannedcoursesUpdate);
            return plannedcoursesUpdate;
        }else{
            throw new ResourceNotFoundException("Record not Found with code: " + plannedCourses.getUserID());
        }
    }

    @Override
    public List<PlannedCourses> getAllPlannedCourses() {
        return plannedCoursesRepository.findAll();
    }

    @Override
    public PlannedCourses getPlannedCoursesById(Integer userID) {
        Optional<PlannedCourses> plannedcoursesDb = this.plannedCoursesRepository.findById(userID);
        if (plannedcoursesDb.isPresent()) {
            return plannedcoursesDb.get();
        }else{
            throw new ResourceNotFoundException("Record not Found with id: " + userID);
        }
    }

    @Override
    public void deletePlannedCourses(Integer userID) {
        Optional<PlannedCourses> plannedcoursesDb = this.plannedCoursesRepository.findById(userID);
        if (plannedcoursesDb.isPresent()) {
            this.plannedCoursesRepository.delete(plannedcoursesDb.get());
        }else{
            throw new ResourceNotFoundException("Record not Found with id: " + userID);
        }
    }
}
