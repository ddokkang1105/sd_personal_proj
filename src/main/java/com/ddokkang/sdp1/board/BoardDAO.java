package com.ddokkang.sdp1.board;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ddokkang.sdp1.etc.DateManager;
import com.ddokkang.sdp1.member.Member;


@Service
public class BoardDAO {
	
	@Autowired
	private SqlSession ss;
	
	public void prepareBoard(Board b, HttpServletRequest req) {
		
		try {
			Member m = (Member) req.getSession().getAttribute("loginMember");
			String b_text = req.getParameter("b_text").replace("\r\n", "<br>");
			
			b.setB_writer(m.getM_id());
			b.setB_text(b_text);
			
			// b_when 현재 시각으로 설정하기
			// DateManager 클래스에서 현재시간을 String으로 반환한 값 가져와서
			// Date 타입으로 바꿔주기
			String now = DateManager.getCurDate();
			SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
			Date b_when = sdf.parse(now);
			
			b.setB_when(b_when);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public void regist(Board b, HttpServletRequest req) {
		
		try {
			String formerToken = (String) req.getSession().getAttribute("formerToken");
			System.out.println("FormerToken : " + formerToken);
			
			String token = req.getParameter("token");
			System.out.println("Token : " + token);
			
			if (formerToken == null || !token.equals(formerToken)) {
				if (ss.getMapper(BoardMapper.class).regist(b) == 1) {
					req.setAttribute("r", "성공적으로 등록되었습니다.");
					req.getSession().setAttribute("formerToken", token);
				} else {
					req.setAttribute("r", "등록이 실패했습니다..");
				}
			} else {
				req.setAttribute("r", "새로고침 금지 !");
			}
		} catch (Exception e) {
			e.printStackTrace();
			req.setAttribute("r", "등록 실패(원인 : DB)");
		}
	}
	
	public Boards getBoardsJSON(Board b, HttpServletRequest req) {
		return new Boards(ss.getMapper(BoardMapper.class).getBoards(b));
	}
	
	public Boards getPageBoardsJSON(Board b, HttpServletRequest req) {
		int allBoardCount = ss.getMapper(BoardMapper.class).countBoard(b);
		
		int boardPerPage = 3;
		// 게시물 수에 따라서 나뉘는 페이지 수 (소수점 올림)
		int pageCount = (int) Math.ceil(allBoardCount / (double) boardPerPage);
		
		int start = boardPerPage * (b.getP_no() - 1) + 1; // 한 페이지에 담을 게시물 첫번째 번호값
		int end = (b.getP_no() == pageCount) ? allBoardCount : (start + boardPerPage - 1);
													// 한 페이지에 담을 끝 게시물 번호값
		b.setStart(start);
		b.setEnd(end);
		
		return new Boards(ss.getMapper(BoardMapper.class).getPageBoards(b));
	}
	
	public int countAllBoard(Board b) {
		return ss.getMapper(BoardMapper.class).countBoard(b);
	}
	
	public void reqBoardPage(Board b, HttpServletRequest req) {
		int allBoardCount = ss.getMapper(BoardMapper.class).countBoard(b);
		int boardPerPage = 3;
		
		int pageCount = (int) Math.ceil(allBoardCount / (double) boardPerPage);
		req.setAttribute("pageCount", pageCount);
	}
	
	public void change(Board b, HttpServletRequest req) {
		
		try {
			String formerToken = (String) req.getSession().getAttribute("formerToken");
			System.out.println("FormerToken : " + formerToken);
			
			String token = req.getParameter("token");
			System.out.println("Token : " + token);
			
			if (formerToken == null || !token.equals(formerToken)) {
				if (ss.getMapper(BoardMapper.class).change(b) == 1) {
					req.setAttribute("r", "성공적으로 수정되었습니다.");
					req.getSession().setAttribute("formerToken", token);
				} else {
					req.setAttribute("r", "수정 실패했습니다..");
				}
			} else {
				req.setAttribute("r", "새로고침 금지 !");
			}
		} catch (Exception e) {
			e.printStackTrace();
			req.setAttribute("r", "수정 실패(원인 : DB)");
		}
	}

	public void drop(Board b, HttpServletRequest req) {
		
		try {
			if (ss.getMapper(BoardMapper.class).drop(b) == 1) {
				req.setAttribute("r", "성공적으로 삭제되었습니다.");
			} else {
				req.setAttribute("r", "삭제 실패했습니다..");
			} 
		} catch (Exception e) {
			e.printStackTrace();
			req.setAttribute("r", "삭제 실패(원인 : DB)");
		}
		
	}
}
