package com.ddokkang.sdp1.shoes;

import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlElement;

@XmlRootElement
public class ShoesS {
	private List<Shoes> shoes;
	
	public ShoesS() {
		// TODO Auto-generated constructor stub
	}

	public ShoesS(List<Shoes> shoes) {
		super();
		this.shoes = shoes;
	}

	public List<Shoes> getShoes() {
		return shoes;
	}

	@XmlElement
	public void setShoes(List<Shoes> shoes) {
		this.shoes = shoes;
	}
	
	
}
