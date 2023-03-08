package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.springapp.Entity.Passenger;
import com.example.springapp.Entity.Ticket;
import com.example.springapp.Repositories.PassengerRepo;

@SpringBootTest
class TrainReservationApplicationTests {
	
	@Autowired
	private PassengerRepo repo;

	@Test
	void contextLoads() {
		Ticket ticket = Ticket.builder()
				.pnrNo(123456L)
				.trainNumber(16160)
				.transactionId(998708L)
				.fromStation("CBE")
				.toStation("TNJ")
				.dateOfBooking("03-04-2023")
				.dateOfJourney("03-07-2023")
				.className("SLEEPER")
				.totalTicketFare(350)
				.build();
		
		Passenger pass = Passenger.builder()
				.username("SHREE")
				.email("727721eucs140@skcet.ac.in")
				.password("shree1234")
				.confirmPassword("shree1234")
				.build();
		
		repo.save(pass);
	}
	
}
