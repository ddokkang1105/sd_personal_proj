package com.ddokkang.sdp1.member;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ddokkang.sdp1.etc.DateManager;

@Controller
public class MemberController {

	@Autowired
	private MemberDAO mDAO;
	
	@RequestMapping(value = "/signUp.go", method = RequestMethod.GET)
	public String signUpPage(Member m, HttpServletRequest req) {
		mDAO.loginCheck(m, req);
		DateManager.getCurYear(req);
		req.setAttribute("cp", "member/signUp.jsp");
		return "index";
	}
	
	
	@RequestMapping(value = "/signUp.do", method = RequestMethod.POST)
	public String signUp(Member m, HttpServletRequest req) {
		mDAO.signUp(m, req);
		mDAO.loginCheck(m, req);
		req.setAttribute("cp", "home.jsp");
		return "index";
	}

	@RequestMapping(value = "/signUp.check", method = RequestMethod.GET, 
			produces = "application/json; charset=UTF-8")
	public @ResponseBody Member checkId(Member m, HttpServletRequest req) {
		return mDAO.checkId(m, req);
	}
	
	@RequestMapping(value = "/login.go", method = RequestMethod.GET)
	public String loginPage(Member m, HttpServletRequest req) {
		mDAO.loginCheck(m, req);
		req.setAttribute("cp", "member/login.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/login.do", method = RequestMethod.POST)
	public String login(Member m, HttpServletRequest req, HttpServletResponse res) {
		if (mDAO.login(m, req, res)) {
			mDAO.loginCheck(m, req);
			req.setAttribute("cp", "home.jsp");
		} else {
			req.setAttribute("cp", "member/login.jsp");
		}
		return "index";
	}
	
	@RequestMapping(value = "/logout.go", method = RequestMethod.GET)
	public String logout(Member m, HttpServletRequest req) {
		if (mDAO.loginCheck(m, req)) {
			mDAO.logout(req);
			req.setAttribute("cp", "home.jsp");
		} else {
			req.setAttribute("r", "5분이 경과되어 로그아웃되었습니다.");
			req.setAttribute("cp", "home.jsp");
		}
		return "index";
	}
	
	@RequestMapping(value = "/login.change.go", method = RequestMethod.GET)
	public String changePage(Member m, HttpServletRequest req) {
		if (mDAO.loginCheck(m, req)) {
			req.setAttribute("cp", "member/change.jsp");
		} else {
			req.setAttribute("r", "5분이 경과되어 로그아웃되었습니다.");
			req.setAttribute("cp", "home.jsp");
		}
		return "index";
	}
	
	@RequestMapping(value = "/login.change.do", method = RequestMethod.POST)
	public String change(Member m, HttpServletRequest req) {
		if (mDAO.loginCheck(m, req)) {
			mDAO.change(m, req);
			req.setAttribute("cp", "home.jsp");
		} else {
			req.setAttribute("r", "5분이 경과되어 로그아웃되었습니다.");
			req.setAttribute("cp", "home.jsp");
		}
		return "index";
	}
	
	@RequestMapping(value = "/login.change.drop", method = RequestMethod.GET)
	public String drop(Member m, HttpServletRequest req) {
		if (mDAO.loginCheck(m, req)) {
			Member mem = (Member) req.getSession().getAttribute("loginMember");
			if (mem.getM_id().equals("admin")) {
				req.setAttribute("r", "관리자는 탈퇴 못합니다. ㅎㅎ;");
				req.setAttribute("cp", "home.jsp");
				return "index";
			}
			mDAO.drop(m, req);
			req.setAttribute("cp", "home.jsp");
		} else {
			req.setAttribute("r", "5분이 경과되어 로그아웃되었습니다.");
			req.setAttribute("cp", "home.jsp");
		}
		return "index";
	}
	
	@RequestMapping(value = "/login.find.id.go", method = RequestMethod.GET)
	public String findIdPage(Member m, HttpServletRequest req) {
		req.setAttribute("cp", "member/findId.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/login.find.id.do", method = RequestMethod.POST)
	public String findId(Member m, HttpServletRequest req) {
		mDAO.findId(m, req);
		req.setAttribute("cp", "home.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/login.find.pw.go", method = RequestMethod.GET)
	public String findPwPage(Member m, HttpServletRequest req) {
		req.setAttribute("cp", "member/findPw.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/login.find.pw.do", method = RequestMethod.POST)
	public String findPw(Member m, HttpServletRequest req) {
		mDAO.findPw(m, req);
		req.setAttribute("cp", "home.jsp");
		return "index";
	}
	
	
	
	
	
}
