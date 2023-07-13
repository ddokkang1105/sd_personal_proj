package com.ddokkang.sdp1.board;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ddokkang.sdp1.etc.TokenManager;
import com.ddokkang.sdp1.member.Member;
import com.ddokkang.sdp1.member.MemberDAO;

@Controller
public class BoardController {
	
	@Autowired
	private MemberDAO mDAO;

	@Autowired
	private BoardDAO bDAO;
	
	@RequestMapping(value = "/board.regist", method = RequestMethod.POST)
	public String registBoard(Member m, Board b, HttpServletRequest req) {
		if (mDAO.loginCheck(m, req)) {
			TokenManager.make(req);
			bDAO.prepareBoard(b, req);
			bDAO.regist(b, req);
			req.setAttribute("s_no", b.getB_s_no()); 
			bDAO.reqBoardPage(b, req);
			req.setAttribute("cp", "shoes/detail.jsp");
		} else {
			req.setAttribute("r", "5분이 경과되어 로그아웃되었습니다.");
			req.setAttribute("cp", "home.jsp");
		}
		return "index";
	}
	
	@RequestMapping(value = "/board.JSON", method = RequestMethod.GET, 
			produces = "application/json; charset=UTF-8")
	public @ResponseBody Boards getBoardsJSON(Board b, HttpServletRequest req) {
//		return bDAO.getBoardsJSON(b, req);
		return bDAO.getPageBoardsJSON(b, req);
	}
	
	@RequestMapping(value = "/board.change", method = RequestMethod.POST)
	public String changeBoard(Member m, Board b, HttpServletRequest req) {
		if (mDAO.loginCheck(m, req)) {
			bDAO.prepareBoard(b, req);
			bDAO.change(b, req);
			req.setAttribute("s_no", b.getB_s_no()); 
			bDAO.reqBoardPage(b, req);
			req.setAttribute("cp", "shoes/detail.jsp");
		} else {
			req.setAttribute("r", "5분이 경과되어 로그아웃되었습니다.");
			req.setAttribute("cp", "home.jsp");
		}
		return "index";
	}
	
	@RequestMapping(value = "/board.drop", method = RequestMethod.POST)
	public String dropBoard(Member m, Board b, HttpServletRequest req) {
		if (mDAO.loginCheck(m, req)) {
			bDAO.drop(b, req);
			req.setAttribute("s_no", b.getB_s_no()); 
			bDAO.reqBoardPage(b, req);
			req.setAttribute("cp", "shoes/detail.jsp");
		} else {
			req.setAttribute("r", "5분이 경과되어 로그아웃되었습니다.");
			req.setAttribute("cp", "home.jsp");
		}
		return "index";
	}
	
}
