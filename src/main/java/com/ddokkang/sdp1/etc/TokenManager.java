package com.ddokkang.sdp1.etc;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

public class TokenManager {
	public static void make(HttpServletRequest req) {
		Date now = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("hh:mm:ss:SS");
		req.setAttribute("generatedToken", sdf.format(now));
	}
}
