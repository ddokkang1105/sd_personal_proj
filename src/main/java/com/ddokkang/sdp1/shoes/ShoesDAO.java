package com.ddokkang.sdp1.shoes;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ShoesDAO {
	
	@Autowired
	private SqlSession ss;
	
	public String getPath(HttpServletRequest req) {
		String path = null;
		try {
			path = req.getSession().getServletContext().getRealPath("\\resources");
			path += "\\img\\shoes";
			System.out.println(path);
			return path;
			
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	public void makeFolder(String path) {
		File folder = null;
		try {
			folder = new File(path);
			
			if (!folder.exists()) {
				folder.mkdir();
				System.out.println("폴더가 생성되었습니다.");
			} else {
				System.out.println("이미 폴더가 존재합니다.");
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	public ShoesS getShoesJSON(Shoes s, HttpServletRequest req) {
		return new ShoesS(ss.getMapper(ShoesMapper.class).getShoes(s));
	}
	
	public Shoes getDetailJSON(Shoes s, HttpServletRequest req) {
		return ss.getMapper(ShoesMapper.class).getDetail(s);
	}
	
	public ShoesS getSearchJSON(Shoes s, HttpServletRequest req) {
		return new ShoesS(ss.getMapper(ShoesMapper.class).getSearch(s));
	}
	
	public int prepareResist(HttpServletRequest req) {
		return ss.getMapper(ShoesMapper.class).getMaxS_no() + 1;
	}
	
	public void registShoes(Shoes s, HttpServletRequest req) {
		try {
			if (ss.getMapper(ShoesMapper.class).regist(s) == 1) {
				req.setAttribute("r", "등록 성공 ! ");
			} else {
				req.setAttribute("r", "등록 실패..");
			}
		} catch (Exception e) {
			e.printStackTrace();
			req.setAttribute("r", "등록 실패(원인 : DB)");
		}
	}
	
	public void convertDate(Shoes s, HttpServletRequest req) {
		try {
			String s_when_str = req.getParameter("when");
			SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
			Date s_when = sdf.parse(s_when_str);
			s.setS_when(s_when);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	// 기존에 있던 사진을 변경할 시에 기존 사진을 지우는 메소드	
	public void deleteImgs(Shoes s, HttpServletRequest req) {
		String s_image = s.getS_image();
		String[] s_images = s_image.split(",");
		String path = getPath(req);
		String[] filePath = new String[s_images.length];
		for (int i = 0; i < s_images.length; i++) {
			filePath[i] = path + "\\" + s_images[i];
			File f = new File(filePath[i]);
			if (f.delete()) {
				System.out.println(s_images[i] + " 파일이 정상적으로 삭제되었습니다.");
			}
		}
	}
	
	public void change(Shoes s, HttpServletRequest req) {
		
		try {
			if (ss.getMapper(ShoesMapper.class).change(s) == 1) {
				req.setAttribute("r", "수정 성공 ! ");
			} else {
				req.setAttribute("r", "수정 실패..");
			}
		} catch (Exception e) {
			e.printStackTrace();
			req.setAttribute("r", "수정 실패(원인 : DB)");
		}
	}
	
	public void drop(Shoes s, HttpServletRequest req) {
		
		try {
			// 삭제 성공 시 사진 지우기
			if (ss.getMapper(ShoesMapper.class).drop(s) == 1) {
				req.setAttribute("r", "삭제 성공 !");
				deleteImgs(s, req);
			} else {
				req.setAttribute("r", "삭제 실패..");
			}
		} catch (Exception e) {
			e.printStackTrace();
			req.setAttribute("r", "삭제 실패(원인 : DB)");
		}
	}
	
}
