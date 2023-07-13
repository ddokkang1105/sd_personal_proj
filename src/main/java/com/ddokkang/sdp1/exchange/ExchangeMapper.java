package com.ddokkang.sdp1.exchange;

import java.util.List;

public interface ExchangeMapper {
	public abstract int addExchange(ExchangeRateItem eri);
	public abstract List<ExchangeRateItem> getExchange(ExchangeRateItem eri);
	public abstract int truncExchange();
	public abstract int countExchange();
}
