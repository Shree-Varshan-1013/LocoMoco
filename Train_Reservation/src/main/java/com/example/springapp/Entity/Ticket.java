package com.example.springapp.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@Table(name = "ticket_details")
public class Ticket {
	
	
	@Id
	@Column(name = "pnr_no")
	private Long pnrNo;
	
	@Column(name = "train_number")
	private int trainNumber;
	
	@Column(name = "transaction_id")
	private Long transactionId;
	
	@Column(name = "from_station")
	private String fromStation;
	
	@Column(name = "to_station")
	private String toStation;
	
	@Column(name = "date_of_journey")
	private String dateOfJourney;
	
	@Column(name = "date_of_booking")
	private String dateOfBooking;
	
	@Column(name = "class_name")
	private String className;
	
	@Column(name = "ticket_fare")
	private int totalTicketFare;
	
//	@OneToOne(mappedBy = "ticket")
//	@JsonIgnoreProperties
//	private Passenger passenger;

}
