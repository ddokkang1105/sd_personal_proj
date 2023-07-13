package com.ddokkang.sdp1.exchange;

import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ExchangeRate {
    private List<ExchangeRateItem> exchangeRateItem;

    public ExchangeRate() {
		// TODO Auto-generated constructor stub
	}

	public ExchangeRate(List<ExchangeRateItem> exchangeRateItem) {
		super();
		this.exchangeRateItem = exchangeRateItem;
	}

	public List<ExchangeRateItem> getExchangeRateItems() {
		return exchangeRateItem;
	}

	@XmlElement
	public void setExchangeRateItems(List<ExchangeRateItem> exchangeRateItem) {
		this.exchangeRateItem = exchangeRateItem;
	}
}
