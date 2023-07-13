<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript">
	$(function() {
		let s_keyword = '<%= (String) request.getAttribute("s_keyword") %>';
		let imgPath = '<c:url value="resources/img/shoes/" />';
		
		if ('${sessionScope.loginMember.m_id}' === 'admin') {
			registShoes();
		}
		
		getData(s_keyword, imgPath);		
		getSearchData(imgPath);
	});
</script>
</head>
<body>
	<div id="adminDiv"></div>
	<div class="search_div">
		<div class="search_h"><h2>검색 : </h2></div>
		<div class="search_i_div"><input id="search" class="search_i" autofocus="autofocus" autocomplete="off" placeholder="검색어 입력"></div>
		<button id="search_btn" hidden="hidden">검색</button>
	</div>
	<div id="cp_shoes_list_div" class="cp_shoes_list_div"></div>
</body>
</html>