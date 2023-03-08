package com.example.springapp.Services;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.Entity.Passenger;
import com.example.springapp.Exception.PassengerNotFoundException;
import com.example.springapp.Repositories.PassengerRepo;

@Service
public class TrainServImpl implements TrainService {

	@Autowired
	private PassengerRepo repo;

	@Override
	public String delPassenger(Long id) throws PassengerNotFoundException {
		Passenger pass = repo.findById(id)
				.orElseThrow(() -> new PassengerNotFoundException("The passenger id " + id + " is not found !!"));
		repo.deleteById(id);
		return "Deleted Successfully....!";
	}

	@Override
	public String addPassenger(Passenger pass) {
		repo.save(pass);
		return "Successfully data added";
	}

	@Override
	public Passenger updatePassenger(Long id, Passenger obj) throws PassengerNotFoundException {
		Passenger pass = repo.findById(id)
				.orElseThrow(() -> new PassengerNotFoundException("The passenger id " + id + " is not found !!"));

		if (Objects.nonNull(pass) && (Objects.nonNull(obj.getUsername()))) {
			pass.setUsername(obj.getUsername());
		}

		if (Objects.nonNull(pass) && (Objects.nonNull(obj.getPassword()))) {
			pass.setPassword(obj.getPassword());
		}

		if (Objects.nonNull(pass) && (Objects.nonNull(obj.getConfirmPassword()))) {
			pass.setConfirmPassword(obj.getConfirmPassword());
		}

		if (Objects.nonNull(pass) && (Objects.nonNull(obj.getFirstName()))) {
			pass.setFirstName(obj.getFirstName());
		}

		if (Objects.nonNull(pass) && (Objects.nonNull(obj.getLastName()))) {
			pass.setLastName(obj.getLastName());
		}

		if (Objects.nonNull(pass) && (Objects.nonNull(obj.getEmail()))) {
			pass.setEmail(obj.getEmail());
		}

		if (Objects.nonNull(pass) && (!Objects.isNull(obj.getPhoneNumber()))) {
			pass.setPhoneNumber(obj.getPhoneNumber());
		}

		if (Objects.nonNull(pass) && (Objects.nonNull(obj.getAddress()))) {
			pass.setAddress(obj.getAddress());
		}

		if (Objects.nonNull(pass) && (Objects.nonNull(obj.getCountry()))) {
			pass.setCountry(obj.getCountry());
		}

		if (Objects.nonNull(pass) && (!Objects.isNull(obj.getPincode()))) {
			pass.setPincode(obj.getPincode());
		}

		repo.saveAndFlush(pass);

		return pass;
	}

	@Override
	public List<Passenger> displayPasengers() {
		return repo.findAll();
	}

	@Override
	public Passenger getPassenger(Long id) throws PassengerNotFoundException {
		Passenger pass = repo.findById(id)
				.orElseThrow(() -> new PassengerNotFoundException("The passenger id " + id + " is not found !!"));
		return pass;
	}

}
