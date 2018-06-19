package com.xcedrin.draft;

import java.time.LocalDateTime;

public class Draft {
	String name;
	String bu_rep;
	String bu;
	String cfo;
	String hiring_manager;
	String stage;
	LocalDateTime created_at;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getBu_rep() {
		return bu_rep;
	}
	public void setBu_rep(String bu_rep) {
		this.bu_rep = bu_rep;
	}
	public String getBu() {
		return bu;
	}
	public void setBu(String bu) {
		this.bu = bu;
	}
	public String getCfo() {
		return cfo;
	}
	public void setCfo(String cfo) {
		this.cfo = cfo;
	}
	public String getHiring_manager() {
		return hiring_manager;
	}
	public void setHiring_manager(String hiring_manager) {
		this.hiring_manager = hiring_manager;
	}
	public String getStage() {
		return stage;
	}
	public void setStage(String stage) {
		this.stage = stage;
	}
	public LocalDateTime getCreated_at() {
		return created_at;
	}
	public void setCreated_at(LocalDateTime created_at) {
		this.created_at = created_at;
	}
}
