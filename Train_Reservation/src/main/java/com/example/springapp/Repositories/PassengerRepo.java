package com.example.springapp.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springapp.Entity.Passenger;

@Repository
public interface PassengerRepo extends JpaRepository<Passenger, Long>{

}
