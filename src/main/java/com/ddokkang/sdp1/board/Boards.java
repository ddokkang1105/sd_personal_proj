package com.ddokkang.sdp1.board;

import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Boards {
	private List<Board> boards;
	
	public Boards() {
		// TODO Auto-generated constructor stub
	}

	public Boards(List<Board> boards) {
		super();
		this.boards = boards;
	}

	public List<Board> getBoards() {
		return boards;
	}

	@XmlElement
	public void setBoards(List<Board> boards) {
		this.boards = boards;
	}
	
	
}
