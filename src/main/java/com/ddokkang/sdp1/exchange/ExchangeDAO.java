package com.ddokkang.sdp1.exchange;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.session.SqlSession;
import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.node.ArrayNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ddokkang.sdp1.etc.DateManager;

@Service
public class ExchangeDAO {
	
	@Autowired
	private SqlSession ss;
	
	public int countExchange() {
		return ss.getMapper(ExchangeMapper.class).countExchange();
	}
	
	public void truncExchange() {
		try {
			ss.getMapper(ExchangeMapper.class).truncExchange();
			if (countExchange() == 0) {
				System.out.println("DataBase Truncate Table Successful");
			} else {
				System.out.println("DataBase Truncate Table Fail");
			}
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("DataBase Truncate Table Fail");
		}
	}
	
	public void addExchange(ExchangeRateItem eri, HttpServletRequest req) {
		try {
			if (ss.getMapper(ExchangeMapper.class).addExchange(eri) == 1) {
				System.out.println("DataBase Insert Successful");
//				req.setAttribute("r", "Success");
			}
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("DataBase Insert Fail");
//			req.setAttribute("r", "Fail");
		}
	}
	
	public ExchangeRate getExchange(ExchangeRateItem eri, HttpServletRequest req) {
		try {
			return new ExchangeRate(ss.getMapper(ExchangeMapper.class).getExchange(eri));
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	public ExchangeRate getExchangeRate(HttpServletRequest req) {
	    try {
	    	// 추가키 : 6KMMWiEw270mdsmf7f4rytu35SOkUxmT
	        URL url = new URL("https://www.koreaexim.go.kr/site/program/financial/exchangeJSON"
	        		+ "?authkey=wCDDSuPsdsHV1YNlZNaXwwxXL4YttlWg"
	        		// com.ddokkang.apr211.etc -> DateManager 클래스에서 현재 날짜 가져오기
	        		+ "&searchdate=" + DateManager.getDateForExchange()
	        		+ "&data=AP01");
	        HttpURLConnection huc = (HttpURLConnection) url.openConnection();
	        huc.setRequestMethod("GET");
	        huc.setRequestProperty("Accept", "application/json");

	        if (huc.getResponseCode() != 200) {
	            throw new RuntimeException("Failed : HTTP error code : " + huc.getResponseCode());
	        }
	        
	        BufferedReader br = new BufferedReader(new InputStreamReader(huc.getInputStream(), "UTF-8"));

	        ObjectMapper objectMapper = new ObjectMapper();
	        JsonNode jsonNode = objectMapper.readTree(br);
	        System.out.println("JsonNode : " + jsonNode);
	        ExchangeRateItem eri = null;
	        if (jsonNode.isArray()) { // jsonNode가 배열인 경우
	        	SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
	        	Date er_when = sdf.parse(DateManager.getCurDate());
	        	
	            ArrayNode arrayNode = (ArrayNode) jsonNode;
	            for (JsonNode node : arrayNode) {
	                // 각 JsonNode에 대한 처리
	            	if (node.get("cur_unit").asText().equals("CNH") || node.get("cur_unit").asText().equals("EUR") ||
	            			node.get("cur_unit").asText().equals("JPY(100)") || node.get("cur_unit").asText().equals("USD")) {
	            		eri = new ExchangeRateItem();
	            		
	            		// 파라미터로 받는 날짜값 넣어주기
	            		eri.setEr_when(er_when);
	            		
	            		eri.setEr_result(node.get("result").asInt());
	            		eri.setEr_cur_unit(node.get("cur_unit").asText());
	            		eri.setEr_ttb(node.get("ttb").asText());
	            		eri.setEr_tts(node.get("ttb").asText());
	            		eri.setEr_deal_bas_r(node.get("deal_bas_r").asText());
	            		eri.setEr_bkpr(node.get("bkpr").asText());
	            		eri.setEr_yy_efee_r(node.get("yy_efee_r").asText());
	            		eri.setEr_ten_dd_efee_r(node.get("ten_dd_efee_r").asText());
	            		eri.setEr_kftc_bkpr(node.get("kftc_bkpr").asText());
	            		eri.setEr_kftc_deal_bas_r(node.get("kftc_deal_bas_r").asText());
	            		eri.setEr_cur_nm(node.get("cur_nm").asText());
	            		
	            		// 데이터베이스에 담기
	            		addExchange(eri, req);
					}
	            }
	        }
	        
	        huc.disconnect();

	        return new ExchangeRate(ss.getMapper(ExchangeMapper.class).getExchange(eri));
	    } catch (Exception e) {
	        e.printStackTrace();
	        return null;
	    }
	}

}
