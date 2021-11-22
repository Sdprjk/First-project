package com.springpro.springpro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springpro.springpro.entities.patient;
import com.springpro.springpro.services.HospitalityServices;

@RestController
//@RequestMapping("/patientappoinment")
@CrossOrigin
public class MyController {
	@Autowired
	private HospitalityServices hs;
	
	@GetMapping("/home")
	public String home() {
		return"this is my home page";
	}
	
	//get data
	@GetMapping("/patient")
	public List<patient> Getpatient(){
		return this.hs.getpatient();		
	}
	@GetMapping("/patient/{patientid}")
	public patient Getpatientbyid(@PathVariable String patientid) {
		return this.hs.getpatientbyid(Long.parseLong(patientid));
	}
	//adding data
	@PostMapping("/patient")
	public patient addpatient(@RequestBody patient notun) {
		return this.hs.addmorepatient(notun);
	}
	//update data
	@PutMapping("/patient")
	public patient updatepatient(@RequestBody patient pid) {
		return this.hs.updatepatiendetails(pid);
	}
	
}
