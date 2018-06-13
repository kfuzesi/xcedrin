package com.xcedrin;

public class Requisition {
	int name;
	int profile;
	int specialty;
	int location;
	int band;
	int required_degree;
	String onboarding_month;
	String skills;
	int hires_needed;
	
	public int getName() {
		return name;
	}
	public void setTrack(int track) {
		this.name = track;
	}
	public int getProfile() {
		return profile;
	}
	public void setProfile(int profile) {
		this.profile = profile;
	}
	public int getSpecialty() {
		return specialty;
	}
	public void setSpecialty(int specialty) {
		this.specialty = specialty;
	}
	public int getLocation() {
		return location;
	}
	public void setLocation(int location) {
		this.location = location;
	}
	public int getBand() {
		return band;
	}
	public void setBand(int band) {
		this.band = band;
	}
	public int getRequired_degree() {
		return required_degree;
	}
	public void setRequired_degree(int required_degree) {
		this.required_degree = required_degree;
	}
	public String getOnboarding_month() {
		return onboarding_month;
	}
	public void setOnboarding_month(String onboarding_month) {
		this.onboarding_month = onboarding_month;
	}
	public String getSkills() {
		return skills;
	}
	public void setSkills(String skills) {
		this.skills = skills;
	}
	public int getHires_needed() {
		return hires_needed;
	}
	public void setHires_needed(int hires_needed) {
		this.hires_needed = hires_needed;
	}
}
