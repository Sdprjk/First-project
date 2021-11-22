package com.springpro.springpro.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springpro.springpro.dao.PatientDao;
import com.springpro.springpro.entities.patient;
@Service
public class Services implements HospitalityServices {
//	List<patient> list;
	@Autowired
	private PatientDao patientdao;
	
	
	public Services() {
//		list=new ArrayList<>();
//		list.add(new patient(1,"sdp","tehatta","dr.pradip"));
//		list.add(new patient(2,"sdp1","tehatta1","dr.murmo"));
//		list.add(new patient(3,"sdp2","tehatta2","dr.prolay"));
		
	
	}


	@Override
	public List<patient> getpatient() {
		// TODO Auto-generated method stub
//		return list;
		return patientdao.findAll();
	}


	@Override
	public patient getpatientbyid(long pid) {
//		patient p=null;
//		for(patient pt:list) {
//			if(pt.getId()==pid) {
//				p=pt;
//				break;
//				
//				
//			}
//		}
//		return p;
		return patientdao.getOne(pid);
	}


	@Override
	public patient addmorepatient(patient notun) {
//		list.add(notun);
//		return notun;
	return patientdao.save(notun);
	}


	@Override
	public patient updatepatiendetails(patient pid) {
//		list.forEach(e->{
//			if(e.getId()==pid.getId()) {
//				e.setName(pid.getName());
//				e.setAddress(pid.getAddress());
//				e.setDocassign(pid.getDocassign());
//			}
//		});
//		return pid;
	return patientdao.save(pid);
	}



}
