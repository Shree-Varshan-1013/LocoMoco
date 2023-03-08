package com.example.springapp.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.Entity.Ticket;

public interface TicketRepo extends JpaRepository<Ticket, Long>{

}
