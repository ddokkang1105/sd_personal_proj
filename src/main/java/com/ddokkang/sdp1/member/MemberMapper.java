package com.ddokkang.sdp1.member;

public interface MemberMapper {
	public abstract int signUp(Member m);
	public abstract String checkId(Member m);
	public abstract String checkPhone(Member m);
	public abstract Member login(Member m);
	public abstract int change(Member m);
	public abstract int drop(Member m);
	public abstract Member findId(Member m);
	public abstract Member findPw(Member m);
}
