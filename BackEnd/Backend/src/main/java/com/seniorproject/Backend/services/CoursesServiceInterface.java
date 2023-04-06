package com.seniorproject.Backend.services;

import com.seniorproject.Backend.entities.Courses;

import java.util.List;

public interface CoursesServiceInterface {
    Courses createCours(Courses course);
    Courses updateCourse(Courses course);
    List<Courses> getAllCourses();
    Courses getCourseById(String coursecode);
    void deleteCourse(String coursecode);
}
