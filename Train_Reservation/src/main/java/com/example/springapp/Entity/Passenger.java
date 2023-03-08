package com.example.springapp.Entity;

import org.hibernate.validator.constraints.Length;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
@Builder
@Entity
@Table(name = "passenger_details")
public class Passenger {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "serial_no")
	private Long serialNo;
	
	@Column(name = "passenger_user_name")
	private String username;
	
	@Column(name = "passenger_first_name")
	private String firstName;
	
	@Column(name = "passenger_last_name")
	private String lastName;
	
	@Column(name = "passenger_phone_number")
	private Long phoneNumber;
	
	@Column(name = "passenger_email")
	private String email;
	
	@Column(name = "passenger_password")
	@Length( min = 8 , max = 15 )
	private String password;
	
	@Column(name = "passenger_confirm_password")
	@Length( min = 8 , max = 15 )
	private String confirmPassword;
	
	@Column(name = "passenger_address")
	private String address;
	
	@Column(name = "passenger_country")
	private String country;
	
	@Column(name = "passenger_pincode")
	private Long pincode;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "fk_key_pnr_no", referencedColumnName = "pnr_no")
	private Ticket ticket;
	
}
