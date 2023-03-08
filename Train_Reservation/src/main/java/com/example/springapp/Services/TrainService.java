package com.example.springapp.Services;

import com.example.springapp.Entity.Passenger;

import java.util.List;

public interface TrainService {
	
	String delPassenger(Long id);
	
	String addPassenger(Passenger pass);
	
	Passenger getPassenger(Long id);
	
	Passenger updatePassenger(Long id, Passenger pass);
	
	List<Passenger> displayPasengers();
	
}
