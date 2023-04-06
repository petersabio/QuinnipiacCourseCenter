package com.seniorproject.Backend.services;

import com.seniorproject.Backend.entities.PlannedCourses;

import java.util.List;

public interface PlannedCoursesServiceInterface {
    PlannedCourses createPlannedCourse(PlannedCourses plannedCourses);
    PlannedCourses updatePlannedCourse(PlannedCourses plannedCourses);
    List<PlannedCourses> getAllPlannedCourses();
    PlannedCourses getPlannedCoursesById(Integer userID);
    void deletePlannedCourses(Integer userID);
}
