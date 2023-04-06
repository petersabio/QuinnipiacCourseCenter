package com.seniorproject.Backend.repositories;

import com.seniorproject.Backend.entities.Courses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoursesRepository extends JpaRepository<Courses, String> {

}
