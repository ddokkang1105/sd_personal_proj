package com.ddokkang.sdp1.shoes;

import java.util.List;

public interface ShoesMapper {
	public abstract List<Shoes> getShoes(Shoes s);
	public abstract Shoes getDetail(Shoes s);
	public abstract List<Shoes> getSearch(Shoes s);
	public abstract int regist(Shoes s);
	public abstract int change(Shoes s);
	public abstract int drop(Shoes s);
	public abstract int getMaxS_no();
}