package com.example.springapp.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.Entity.Passenger;
import com.example.springapp.Exception.PassengerNotFoundException;
import com.example.springapp.Services.TrainServImpl;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/Train-Reservation")
public class PassengerController {
	
	@Autowired
	private TrainServImpl serv;
	
	@GetMapping("/home")
	public String fun() {
		return "hello world !!!";
	}
	
	@PostMapping("/add")
	public ResponseEntity<String> addPassenger(@RequestBody Passenger pass){
		String message = serv.addPassenger(pass);
		return new ResponseEntity<>(message ,HttpStatus.OK);
	}
	
	@GetMapping("/view")
	public ResponseEntity<List<Passenger>> showPassengers(){
		List<Passenger> message = serv.displayPasengers();
		return new ResponseEntity<>(message ,HttpStatus.OK);
	}
	
	@GetMapping("/view/{id}")
	public ResponseEntity<Passenger> getPassengerById(@PathVariable("id") Long id) throws PassengerNotFoundException{
		Passenger message = serv.getPassenger(id);
		return new ResponseEntity<>(message ,HttpStatus.OK);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Passenger> updatePassengerById(@PathVariable("id") Long id, @RequestBody Passenger pass) throws PassengerNotFoundException{
		Passenger message = serv.updatePassenger(id, pass);
		return new ResponseEntity<>(message ,HttpStatus.OK);
	}
	
	@DeleteMapping("/del/{id}")
	public ResponseEntity<String> delPassenger(@PathVariable("id") Long id) throws PassengerNotFoundException{
		String message = serv.delPassenger(id);
		return new ResponseEntity<>(message ,HttpStatus.OK);
	}
	
}
