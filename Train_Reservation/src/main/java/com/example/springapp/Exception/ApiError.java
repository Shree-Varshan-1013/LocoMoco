package com.example.springapp.Exception;

import java.time.LocalDate;

import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ApiError {
	
	private HttpStatus status;
	
	private String message;
	
	private LocalDate timeStamp;
	
}
