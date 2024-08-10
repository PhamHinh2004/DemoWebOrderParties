package Website.Models;

import java.io.Serializable;
import java.sql.Date;
import java.time.LocalTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.jsonFormatVisitors.JsonFormatTypes;

import lombok.Data;

@Entity
@Table(name = "party")
@Data
public class Party implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	private String number;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
	private Date date;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm")
	private LocalTime time;
	private int quantity;
	private String typesofParty;
	private String typesofRooms;
	private String services;
	private boolean members;
	private String note;
	
	
	
	public Party() {
		super();
	}

	public Party(Long id, String name, String number, Date date, LocalTime time, int quantity, String typesofParty,
			String typesofRooms, String services, boolean members, String note) {
		super();
		this.id = id;
		this.name = name;
		this.number = number;
		this.date = date;
		this.time = time;
		this.quantity = quantity;
		this.typesofParty = typesofParty;
		this.typesofRooms = typesofRooms;
		this.services = services;
		this.members = members;
		this.note = note;
	}

	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public LocalTime getTime() {
		return time;
	}

	public void setTime(LocalTime time) {
		this.time = time;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getTypesofParty() {
		return typesofParty;
	}

	public void setTypesofParty(String typesofParty) {
		this.typesofParty = typesofParty;
	}

	public String getTypesofRooms() {
		return typesofRooms;
	}

	public void setTypesofRooms(String typesofRooms) {
		this.typesofRooms = typesofRooms;
	}

	public String getServices() {
		return services;
	}

	public void setServices(String services) {
		this.services = services;
	}

	public boolean isMembers() {
		return members;
	}

	public void setMembers(boolean members) {
		this.members = members;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
	
}
