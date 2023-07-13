package com.ddokkang.sdp1.board;

import java.util.Date;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Board {
	private int b_no;
	private String b_writer;
	private Date b_when;
	private String b_text;
	private int b_s_no;
	private int start;
	private int end;
	private int p_no;
	
	
	public Board() {
		// TODO Auto-generated constructor stub
	}
	
	public Board(int b_no, String b_writer, Date b_when, String b_text, int b_s_no, int start, int end, int p_no) {
		super();
		this.b_no = b_no;
		this.b_writer = b_writer;
		this.b_when = b_when;
		this.b_text = b_text;
		this.b_s_no = b_s_no;
		this.start = start;
		this.end = end;
		this.p_no = p_no;
	}

	public int getB_no() {
		return b_no;
	}

	@XmlElement
	public void setB_no(int b_no) {
		this.b_no = b_no;
	}

	public String getB_writer() {
		return b_writer;
	}

	@XmlElement
	public void setB_writer(String b_writer) {
		this.b_writer = b_writer;
	}

	public Date getB_when() {
		return b_when;
	}

	@XmlElement
	public void setB_when(Date b_when) {
		this.b_when = b_when;
	}

	public String getB_text() {
		return b_text;
	}

	@XmlElement
	public void setB_text(String b_text) {
		this.b_text = b_text;
	}

	public int getB_s_no() {
		return b_s_no;
	}

	@XmlElement
	public void setB_s_no(int b_s_no) {
		this.b_s_no = b_s_no;
	}

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getEnd() {
		return end;
	}

	public void setEnd(int end) {
		this.end = end;
	}

	public int getP_no() {
		return p_no;
	}

	public void setP_no(int p_no) {
		this.p_no = p_no;
	}

	
}
