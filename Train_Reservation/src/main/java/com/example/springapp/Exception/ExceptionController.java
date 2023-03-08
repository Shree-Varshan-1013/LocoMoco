package com.example.springapp.Exception;

import java.time.LocalDate;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestController
public class ExceptionController extends ResponseEntityExceptionHandler {

	@ExceptionHandler(value = { PassengerNotFoundException.class })
	public ResponseEntity<Object> passengerNotFoundException(PassengerNotFoundException exception) {
		
		ApiError message = new ApiError(HttpStatus.NOT_FOUND, exception.getMessage(), LocalDate.now());
		
		return new ResponseEntity<>(message, HttpStatus.NOT_FOUND);
	}
}
