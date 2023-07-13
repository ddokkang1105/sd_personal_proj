package com.ddokkang.sdp1.exchange;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller 
public class ExchangeController {
	
	@Autowired
	private ExchangeDAO eDAO;
	
	@RequestMapping(value = "/exchange.getJSON", method = RequestMethod.GET, 
			produces = "application/json; charset=UTF-8")
	public @ResponseBody ExchangeRate getJSON(HttpServletRequest req) {
		return eDAO.getExchangeRate(req);
	}
	
}
