package com.ddokkang.sdp1.shoes;

import java.util.Date;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

import org.springframework.web.multipart.MultipartFile;

@XmlRootElement
public class Shoes {
	private int s_no;
	private String s_brand;
	private String s_class;
	private String s_name;
	private int s_price;
	private String  s_color;
	private Date s_when;
	private String s_keyword;
	private String s_image;
	private MultipartFile[] files;
	
	public Shoes() {
		// TODO Auto-generated constructor stub
	}

	public Shoes(int s_no, String s_brand, String s_class, String s_name, int s_price, String s_color,
			Date s_when, String s_keyword, String s_image, MultipartFile[] files) {
		super();
		this.s_no = s_no;
		this.s_brand = s_brand;
		this.s_class = s_class;
		this.s_name = s_name;
		this.s_price = s_price;
		this.s_color = s_color;
		this.s_when = s_when;
		this.s_keyword = s_keyword;
		this.s_image = s_image;
		this.files = files;
	}

	public int getS_no() {
		return s_no;
	}

	@XmlElement
	public void setS_no(int s_no) {
		this.s_no = s_no;
	}

	public String getS_brand() {
		return s_brand;
	}

	@XmlElement
	public void setS_brand(String s_brand) {
		this.s_brand = s_brand;
	}

	public String getS_class() {
		return s_class;
	}

	@XmlElement
	public void setS_class(String s_class) {
		this.s_class = s_class;
	}

	public String getS_name() {
		return s_name;
	}

	@XmlElement
	public void setS_name(String s_name) {
		this.s_name = s_name;
	}

	public int getS_price() {
		return s_price;
	}

	@XmlElement
	public void setS_price(int s_price) {
		this.s_price = s_price;
	}

	public String getS_color() {
		return s_color;
	}

	@XmlElement
	public void setS_color(String s_color) {
		this.s_color = s_color;
	}

	public Date getS_when() {
		return s_when;
	}

	@XmlElement
	public void setS_when(Date s_when) {
		this.s_when = s_when;
	}

	public String getS_keyword() {
		return s_keyword;
	}

	@XmlElement
	public void setS_keyword(String s_keyword) {
		this.s_keyword = s_keyword;
	}
	
	public String getS_image() {
		return s_image;
	}
	
	@XmlElement
	public void setS_image(String s_image) {
		this.s_image = s_image;
	}

	public MultipartFile[] getFiles() {
		return files;
	}

	public void setFiles(MultipartFile[] files) {
		this.files = files;
	}
	
}
