package com.seniorproject.Backend.services;

import com.seniorproject.Backend.entities.Courses;
import com.seniorproject.Backend.entities.Days;
import com.seniorproject.Backend.exceptions.ResourceNotFoundException;
import com.seniorproject.Backend.repositories.DaysRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class DaysService implements DaysServiceInterface{

    @Autowired
    private DaysRepository daysRepository;
    @Override
    public Days createDays(Days day) { return daysRepository.save(day);}

    @Override
    public Days updateDay(Days day) {
        Optional<Days> daysDb = this.daysRepository.findById(day.getId());
        if(daysDb.isPresent()){
            Days daysUpdate = daysDb.get();
            daysUpdate.setId(day.getId());
            daysUpdate.setDay(day.getDay());

            daysRepository.save(daysUpdate);
            return daysUpdate;
        }
        else{
            throw new ResourceNotFoundException("Record not Found with code: " + day.getId());
        }
    }

    @Override
    public List<Days> getAllDays() {return daysRepository.findAll();}

    @Override
    public Days getDayById(int Id) {
        Optional<Days> dayDb = this.daysRepository.findById(Id);
        if (dayDb.isPresent()) {
            return dayDb.get();
        }else{
            throw new ResourceNotFoundException("Record not Found with id: " + Id);
        }
    }

    @Override
    public void deleteDay(int Id) {
        Optional<Days> dayDb = this.daysRepository.findById(Id);
        if (dayDb.isPresent()) {
            this.daysRepository.delete(dayDb.get());
        }else{
            throw new ResourceNotFoundException("Record not Found with id: " + Id);
        }
    }
}
