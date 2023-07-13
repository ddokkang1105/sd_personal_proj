package com.ddokkang.sdp1.shoes;

import java.io.File;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.ddokkang.sdp1.board.Board;
import com.ddokkang.sdp1.board.BoardDAO;
import com.ddokkang.sdp1.etc.TokenManager;
import com.ddokkang.sdp1.member.Member;
import com.ddokkang.sdp1.member.MemberDAO;

@Controller
public class ShoesController {

	@Autowired
	private ShoesDAO sDAO;
	
	@Autowired
	private MemberDAO mDAO;
	
	@Autowired
	private BoardDAO bDAO;
	
	@RequestMapping(value = "/shoes.getShoesJSON", method = RequestMethod.GET, 
			produces = "application/json; charset=UTF-8")
	public @ResponseBody ShoesS getShoesJSON(Shoes s, HttpServletRequest req) {
		return sDAO.getShoesJSON(s, req);
	}
	
	
	@RequestMapping(value = "/shoes.getClassList", method = RequestMethod.GET)
	public String getShoesList(HttpServletRequest req) {
		String s_class = req.getParameter("s_class");
		req.setAttribute("s_class", s_class);
		req.setAttribute("cp", "shoes/shoes.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/shoes.getDetailJSON", method = RequestMethod.GET, 
			produces = "application/json; charset=UTF-8")
	public @ResponseBody Shoes getDetailJSON(Shoes s, HttpServletRequest req) {
		return sDAO.getDetailJSON(s, req);
	}
	
	@RequestMapping(value = "/shoes.getShoesDetail", method = RequestMethod.GET)
	public String getShoesDetail(Board b, HttpServletRequest req) {
		int s_no = Integer.parseInt(req.getParameter("s_no"));
		b.setB_s_no(s_no);
		TokenManager.make(req);
		bDAO.reqBoardPage(b, req);
		req.setAttribute("s_no", s_no);
		req.setAttribute("cp", "shoes/detail.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/shoes.getSearchJSON", method = RequestMethod.GET, 
			produces = "application/json; charset=UTF-8")
	public @ResponseBody ShoesS getSearchJSON(Shoes s, HttpServletRequest req) {
		return sDAO.getSearchJSON(s, req);
	}
	
	@RequestMapping(value = "/shoes.getSearchList", method = RequestMethod.GET)
	public String getShoesSearch(HttpServletRequest req) {
		String s_keyword = req.getParameter("s_keyword");
		req.setAttribute("s_keyword", s_keyword);
		req.setAttribute("cp", "shoes/search.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/shoes.regist", method = RequestMethod.GET)
	public String registPage(HttpServletRequest req) {
		req.setAttribute("s_noP1", sDAO.prepareResist(req));
		req.setAttribute("cp", "shoes/regist.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/shoes.regist", method = RequestMethod.POST)
	public String regist(@ModelAttribute Shoes s, HttpServletRequest req, Model model) throws IOException {
		
		// 파일 업로드 처리
		MultipartFile[] mf = s.getFiles();
		String s_image = "";
		String[] filePath = new String[mf.length];
		String path = sDAO.getPath(req);
		for (int i = 0; i < mf.length; i++) {
			s_image += mf[i].getOriginalFilename();
			if (i < mf.length - 1) {
				s_image += ",";
			}
			filePath[i] = path + "\\" + mf[i].getOriginalFilename();
			File dest = new File(filePath[i]);
			mf[i].transferTo(dest);
		}
		
		// Shoes 객체에 파일 이름 설정
		s.setS_image(s_image);
		System.out.println(s.getS_image());

		// 날짜부분 처리하는 메소드
		sDAO.convertDate(s, req);
		
		// 데이터베이스에 저장
		sDAO.registShoes(s, req);
		
		req.setAttribute("cp", "home.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/shoes.changePage", method = RequestMethod.POST)
	public String changePage(Member m, Shoes s, HttpServletRequest req) {
		if (mDAO.loginCheck(m, req)) {
			Member mem = (Member) req.getSession().getAttribute("loginMember");
			if (mem.getM_id().equals("admin")) {
				req.setAttribute("s_no", s.getS_no());
				req.setAttribute("cp", "shoes/change.jsp");
				return "index";
			}
		}
		req.setAttribute("r", "잘못된 접근입니다.");
		req.setAttribute("cp", "home.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/shoes.change", method = RequestMethod.POST)
	public String change(Member m, @ModelAttribute Shoes s, HttpServletRequest req, Model model) throws IOException {
		if (mDAO.loginCheck(m, req)) {
			Member mem = (Member) req.getSession().getAttribute("loginMember");
			if (mem.getM_id().equals("admin")) {
				MultipartFile[] mf = s.getFiles();
				String s_image = "";
				String test = mf[0].getOriginalFilename();
				if (!test.equals("")) {	// 사진을 변경했을 경우 -> 넣은 사진들로 세팅하기
					// 사진이 변경되므로 기존의 이미지 파일들 삭제
					sDAO.deleteImgs(s, req);
					String[] filePath = new String[mf.length];
					String path = sDAO.getPath(req);
					for (int i = 0; i < mf.length; i++) {
						s_image += mf[i].getOriginalFilename();
						if (i < mf.length - 1) {
							s_image += ",";
						}
						filePath[i] = path + "\\" + mf[i].getOriginalFilename();
						File dest = new File(filePath[i]);
						mf[i].transferTo(dest);
					}
				} else {	//  사진을 변경하지 않은 경우 -> 원래 이미지들을 가져오기
					s_image = s.getS_image();
				}
				
				// Shoes 객체에 파일 이름 설정
				s.setS_image(s_image);
				System.out.println(s.getS_image());

				// 날짜부분 처리하는 메소드
				sDAO.convertDate(s, req);

				// change method 실행
				sDAO.change(s, req);
				
				req.setAttribute("cp", "home.jsp");
				return "index";
			}
			req.setAttribute("r", "잘못된 접근입니다.");
		} else {
			req.setAttribute("r", "잘못된 접근입니다.");
		}
		
		req.setAttribute("cp", "home.jsp");
		return "index";
	}

	@RequestMapping(value = "/shoes.drop", method = RequestMethod.POST)
	public String drop(Member m, Shoes s, HttpServletRequest req) {
		if (mDAO.loginCheck(m, req)) {
			Member mem = (Member) req.getSession().getAttribute("loginMember");
			if (mem.getM_id().equals("admin")) {
				sDAO.drop(s, req);
				req.setAttribute("cp", "home.jsp");
				return "index";
			}
			req.setAttribute("r", "잘못된 접근입니다.");
		} else {
			req.setAttribute("r", "잘못된 접근입니다.");
		}
		
		req.setAttribute("cp", "home.jsp");
		return "index";
	}
	
	
}
