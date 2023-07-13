package com.ddokkang.sdp1;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.ddokkang.sdp1.member.MemberDAO;
import com.ddokkang.sdp1.shoes.ShoesDAO;

@Controller
public class HomeController {
	
	@Autowired
	private ShoesDAO sDAO;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(HttpServletRequest req) {
		String path = sDAO.getPath(req);
		sDAO.makeFolder(path);
		req.setAttribute("cp", "home.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/home.go", method = RequestMethod.GET)
	public String goHome(HttpServletRequest req) {
		req.setAttribute("cp", "home.jsp");
		return "index";
	}
	
}
