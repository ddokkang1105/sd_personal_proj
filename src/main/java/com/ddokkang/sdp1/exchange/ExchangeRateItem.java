package com.ddokkang.sdp1.exchange;

import java.math.BigDecimal;
import java.util.Date;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ExchangeRateItem {
	private Date er_when;
    private int er_result;
    private String er_cur_unit;
    private String er_ttb;
    private String er_tts;
    private String er_deal_bas_r;
    private String er_bkpr;
    private String er_yy_efee_r;
    private String er_ten_dd_efee_r;
    private String er_kftc_bkpr;
    private String er_kftc_deal_bas_r;
    private String er_cur_nm;
    
    public ExchangeRateItem() {
		// TODO Auto-generated constructor stub
	}

    // constructor

	public ExchangeRateItem(Date er_when, int er_result, String er_cur_unit, String er_ttb, String er_tts,
			String er_deal_bas_r, String er_bkpr, String er_yy_efee_r, String er_ten_dd_efee_r, String er_kftc_bkpr,
			String er_kftc_deal_bas_r, String er_cur_nm) {
		super();
		this.er_when = er_when;
		this.er_result = er_result;
		this.er_cur_unit = er_cur_unit;
		this.er_ttb = er_ttb;
		this.er_tts = er_tts;
		this.er_deal_bas_r = er_deal_bas_r;
		this.er_bkpr = er_bkpr;
		this.er_yy_efee_r = er_yy_efee_r;
		this.er_ten_dd_efee_r = er_ten_dd_efee_r;
		this.er_kftc_bkpr = er_kftc_bkpr;
		this.er_kftc_deal_bas_r = er_kftc_deal_bas_r;
		this.er_cur_nm = er_cur_nm;
	}

	// getters and setters
	
	public Date getEr_when() {
		return er_when;
	}

	@XmlElement
	public void setEr_when(Date er_when) {
		this.er_when = er_when;
	}

	public int getEr_result() {
		return er_result;
	}

	@XmlElement
	public void setEr_result(int er_result) {
		this.er_result = er_result;
	}

	public String getEr_cur_unit() {
		return er_cur_unit;
	}

	@XmlElement
	public void setEr_cur_unit(String er_cur_unit) {
		this.er_cur_unit = er_cur_unit;
	}

	public String getEr_ttb() {
		return er_ttb;
	}

	@XmlElement
	public void setEr_ttb(String er_ttb) {
		this.er_ttb = er_ttb;
	}

	public String getEr_tts() {
		return er_tts;
	}

	@XmlElement
	public void setEr_tts(String er_tts) {
		this.er_tts = er_tts;
	}

	public String getEr_deal_bas_r() {
		return er_deal_bas_r;
	}

	@XmlElement
	public void setEr_deal_bas_r(String er_deal_bas_r) {
		this.er_deal_bas_r = er_deal_bas_r;
	}

	public String getEr_bkpr() {
		return er_bkpr;
	}

	@XmlElement
	public void setEr_bkpr(String er_bkpr) {
		this.er_bkpr = er_bkpr;
	}

	public String getEr_yy_efee_r() {
		return er_yy_efee_r;
	}

	@XmlElement
	public void setEr_yy_efee_r(String er_yy_efee_r) {
		this.er_yy_efee_r = er_yy_efee_r;
	}

	public String getEr_ten_dd_efee_r() {
		return er_ten_dd_efee_r;
	}

	@XmlElement
	public void setEr_ten_dd_efee_r(String er_ten_dd_efee_r) {
		this.er_ten_dd_efee_r = er_ten_dd_efee_r;
	}

	public String getEr_kftc_bkpr() {
		return er_kftc_bkpr;
	}

	@XmlElement
	public void setEr_kftc_bkpr(String er_kftc_bkpr) {
		this.er_kftc_bkpr = er_kftc_bkpr;
	}

	public String getEr_kftc_deal_bas_r() {
		return er_kftc_deal_bas_r;
	}

	@XmlElement
	public void setEr_kftc_deal_bas_r(String er_kftc_deal_bas_r) {
		this.er_kftc_deal_bas_r = er_kftc_deal_bas_r;
	}

	public String getEr_cur_nm() {
		return er_cur_nm;
	}

	@XmlElement
	public void setEr_cur_nm(String er_cur_nm) {
		this.er_cur_nm = er_cur_nm;
	}
	
}
