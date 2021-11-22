package com.springpro.springpro.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class patient {
	@Id
	private long id;
	private String name;
	private String address;
	private String docassign;
	public patient(long id, String name, String address, String docassign) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.docassign = docassign;
	}
	public patient() {
		super();
		// TODO Auto-generated constructor stub
	}
	public long getId() {
		return id;
	}
	@Override
	public String toString() {
		return "patient [id=" + id + ", name=" + name + ", address=" + address + ", docassign=" + docassign + "]";
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getDocassign() {
		return docassign;
	}
	public void setDocassign(String docassign) {
		this.docassign = docassign;
	}
	

}
