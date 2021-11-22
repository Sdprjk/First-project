package com.springpro.springpro.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springpro.springpro.entities.patient;

public interface PatientDao extends JpaRepository<patient, Long> {

}
