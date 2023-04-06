package com.seniorproject.Backend.services;

import com.seniorproject.Backend.entities.Courses;
import com.seniorproject.Backend.entities.User;
import com.seniorproject.Backend.exceptions.ResourceNotFoundException;
import com.seniorproject.Backend.repositories.CoursesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@Service
public class CourseService implements  CoursesServiceInterface {

    @Autowired
    private CoursesRepository coursesRepository;

    @Override
    public Courses createCours(Courses course) {
        return coursesRepository.save(course);
    }

    @Override
    public Courses updateCourse(Courses course) {
        Optional<Courses> coursesDb = this.coursesRepository.findById(course.getCoursecode());
        if(coursesDb.isPresent()){
            Courses coursesUpdate = coursesDb.get();
            coursesUpdate.setCoursecode(course.getCoursecode());
            coursesUpdate.setSection(course.getSection());
            coursesUpdate.setOffsemester(course.getOffsemester());
            coursesUpdate.setCoursename(course.getCoursename());
            coursesUpdate.setPorfessor(course.getPorfessor());
            coursesUpdate.setDescription(course.getDescription());
            coursesUpdate.setPrereq(course.getPrereq());
            coursesUpdate.setDays(course.getDays());
            coursesUpdate.setTime(course.getTime());

            coursesRepository.save(coursesUpdate);
            return coursesUpdate;
        }else{
            throw new ResourceNotFoundException("Record not Found with code: " + course.getCoursecode());
        }
    }

    @Override
    public List<Courses> getAllCourses() {
        return coursesRepository.findAll();
    }

    @Override
    public Courses getCourseById(String coursecode) {
        Optional<Courses> courseDb = this.coursesRepository.findById(coursecode);
        if (courseDb.isPresent()) {
            return courseDb.get();
        }else{
            throw new ResourceNotFoundException("Record not Found with id: " + coursecode);
        }
    }

    @Override
    public void deleteCourse(String coursecode) {
        Optional<Courses> courseDb = this.coursesRepository.findById(coursecode);
        if (courseDb.isPresent()) {
            this.coursesRepository.delete(courseDb.get());
        }else{
            throw new ResourceNotFoundException("Record not Found with id: " + coursecode);
        }
    }
}
