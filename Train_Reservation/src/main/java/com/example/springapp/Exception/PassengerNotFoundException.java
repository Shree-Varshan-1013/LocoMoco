package com.example.springapp.Exception;

public class PassengerNotFoundException extends RuntimeException{

	public PassengerNotFoundException() {
		super();
	}

	public PassengerNotFoundException(String message) {
		super(message);
	}

}
