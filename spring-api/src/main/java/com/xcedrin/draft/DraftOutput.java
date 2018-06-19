package com.xcedrin.draft;

public class DraftOutput {
	String _id;
	String _rev;
	String name;
	String bu_rep;
	String bu;
	String cfo;
	String hiring_manager;
	String created_at;
	String stage;
	
	public String getId() {
		return _id;
	}
	public void setId(String _id) {
		this._id = _id;
	}
	public String getRev() {
		return _rev;
	}
	public void setRev(String rev) {
		this._rev = rev;
	}
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
	public String getCreated_at() {
		return created_at;
	}
	public void setCreated_at(String created_at) {
		this.created_at = created_at;
	}
	public String getStage() {
		return stage;
	}
	public void setStage(String stage) {
		this.stage = stage;
	}
}
