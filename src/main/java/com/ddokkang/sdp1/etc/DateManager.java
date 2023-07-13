package com.ddokkang.sdp1.etc;

import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

public class DateManager {
	public static void getCurYear(HttpServletRequest request) {
		Date now = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy");
		String curYear = sdf.format(now);
		request.setAttribute("cy", curYear);
	}
	
	public static String getCurDate() {
		LocalDateTime now = LocalDateTime.now();

		DateTimeFormatter formatDateTime = DateTimeFormatter.ofPattern("yyyyMMddHHmmss");
		String formatToString = now.format(formatDateTime);
		
		return formatToString;
	}
	
	public static String getDateForExchange() {
		
		String dateTime = getCurDate();
		
		DateTimeFormatter formatNow = DateTimeFormatter.ofPattern("yyyyMMddHHmmss");
		LocalDateTime now = LocalDateTime.parse(dateTime, formatNow);
		
		if (now.getHour() < 11 && now.getHour() >= 0) {
			now = now.minusDays(1);
		}

		DayOfWeek day = now.getDayOfWeek();
		String dayToString = day.name();
		
		if (dayToString.equals("SATURDAY")) {
			now = now.minusDays(1);
		} else if (dayToString.equals("SUNDAY")) {
			now = now.minusDays(2);
		}
		
		String formatNowDate = now.format(DateTimeFormatter.ofPattern("yyyyMMdd"));

		return formatNowDate;
	}
	
	
}
