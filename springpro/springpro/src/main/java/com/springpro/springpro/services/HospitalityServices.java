package com.springpro.springpro.services;

import java.util.List;

import com.springpro.springpro.entities.patient;

public interface HospitalityServices {
	public List<patient> getpatient();

	public patient getpatientbyid(long pid);



	public patient addmorepatient(patient notun);

	public patient updatepatiendetails(patient pid);



}
