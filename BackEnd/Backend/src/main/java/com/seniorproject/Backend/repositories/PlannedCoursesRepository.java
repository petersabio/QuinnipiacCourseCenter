package com.seniorproject.Backend.repositories;

import com.seniorproject.Backend.entities.PlannedCourses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlannedCoursesRepository extends JpaRepository<PlannedCourses, Integer> {

}
