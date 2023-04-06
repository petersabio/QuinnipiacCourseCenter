package com.seniorproject.Backend.services;

import com.seniorproject.Backend.entities.Courses;
import com.seniorproject.Backend.entities.Days;

import java.util.List;

public interface DaysServiceInterface {
    Days createDays(Days day);
    Days updateDay(Days day);
    List<Days> getAllDays();
    Days getDayById(int Id);
    void deleteDay(int Id);

}
