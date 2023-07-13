package com.ddokkang.sdp1.member;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberDAO {
	
	@Autowired
	private SqlSession ss;
	
	public boolean loginCheck(Member m, HttpServletRequest req) {
		m = (Member) req.getSession().getAttribute("loginMember");
		if (m != null) {
			return true;
		}
		return false;
	}
	
	public void signUp(Member m, HttpServletRequest req) {
		try {
			if (ss.getMapper(MemberMapper.class).signUp(m) == 1) {
				req.setAttribute("r", "회원이 되어서 기쁩니다 !");
			} else {
				req.setAttribute("r", "회원가입 실패..");
			}
		} catch (Exception e) {	
			e.printStackTrace();
			req.setAttribute("r", "회원가입 실패..(원인 : DB오류)");
			if (ss.getMapper(MemberMapper.class).checkPhone(m).equals(m.getM_phone())) {
				req.setAttribute("r", "휴대폰 번호를 다시 확인해주세요.");
			}
		}
	}
	
	public Member checkId(Member m, HttpServletRequest req) {
		String m_id = ss.getMapper(MemberMapper.class).checkId(m);
		m.setM_id(m_id);
		return m;
	}
	
	public boolean login(Member m, HttpServletRequest req, HttpServletResponse res) {
		try {
			String m_id = m.getM_id();
			String m_pw = m.getM_pw();

			Member mem = ss.getMapper(MemberMapper.class).login(m);
			if (mem != null) {
				String dbPw = mem.getM_pw();
				if (dbPw.equals(m_pw)) {
					req.getSession().setAttribute("loginMember", mem);
					// 로그인 5분간 유지
					req.getSession().setMaxInactiveInterval(3000);
					Cookie c = new Cookie("lastLoginId", m_id);
					c.setMaxAge(60 * 60 * 24 * 5);
					res.addCookie(c);
					req.setAttribute("r", "성공적으로 로그인되었습니다.");
					return true;
				}
				else {
					req.setAttribute("r", "로그인 실패(비밀번호 오류)");
					return false;
				}
			} else {
				req.setAttribute("r", "등록되지 않은 계정입니다.");
				return false;
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			req.setAttribute("r", "DB 오류입니다. 다시 시도해주세요.");
			return false;
		}
	}
	
	public void logout(HttpServletRequest req) {
		req.getSession().setAttribute("loginMember", null);
		req.setAttribute("r", "로그아웃 되었습니다.");
	}
	
	public void change(Member m, HttpServletRequest req) {
		try {
			if (ss.getMapper(MemberMapper.class).change(m) == 1) {
				req.getSession().setAttribute("loginMember", m);
				req.setAttribute("r", "성공적으로 정보 수정을 완료했습니다.");
			} else {
				req.setAttribute("r", "정보 수정 실패..");
			}
		} catch (Exception e) {
			e.printStackTrace();
			req.setAttribute("r", "정보 수정 실패..(원인 : DB오류)");
		}
	}
	
	public void drop(Member m, HttpServletRequest req) {
		try {
			if (ss.getMapper(MemberMapper.class).drop(m) == 1) {
				req.getSession().setAttribute("loginMember", null);
				req.setAttribute("r", "다음에 다시 찾아주세요 T_T ");
			} else {
				req.setAttribute("r", "회원 탈퇴 실패..");
			}
		} catch (Exception e) {
			e.printStackTrace();
			req.setAttribute("r", "회원 탈퇴 실패..(원인 : DB오류)");
		}
	}
	
	public void findId(Member m, HttpServletRequest req) {
		try {
			Member mem = ss.getMapper(MemberMapper.class).findId(m);
			if (!mem.getM_id().equals("admin")) {
				req.setAttribute("r", "아이디는 \"" + mem.getM_id() + "\" 입니다.");
			} else {
				req.setAttribute("r", "권한 접근이 불가능한 아이디입니다.");
			}
		} catch (Exception e) {
			e.printStackTrace();
			req.setAttribute("r", "등록된 아이디가 없습니다.");
		}
		
	}
	
	public void findPw(Member m, HttpServletRequest req) {
		try {
			Member mem = ss.getMapper(MemberMapper.class).findPw(m);
			if (!mem.getM_id().equals("admin")) {
				req.setAttribute("r", "비밀번호는 \"" + mem.getM_pw() + "\" 입니다.");
			} else {
				req.setAttribute("r", "권한 접근이 불가능합니다.");
			}
		} catch (Exception e) {
			e.printStackTrace();
			req.setAttribute("r", "휴대전화 번호 또는 아이디를 다시 확인해주세요.");
		}
		
	}
	
}
