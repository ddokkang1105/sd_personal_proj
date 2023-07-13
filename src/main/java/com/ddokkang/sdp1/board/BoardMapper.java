package com.ddokkang.sdp1.board;

import java.util.List;

public interface BoardMapper {
	public abstract int regist(Board b);
	public abstract List<Board> getBoards(Board b);
	public abstract int change(Board b);
	public abstract int drop(Board b);
	public abstract List<Board> getPageBoards(Board b);
	public abstract int countBoard(Board b);
}
