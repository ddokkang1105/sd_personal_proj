<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
	.list_div, .ex_rate_div {
		display: none;
	}
	
	.drop_div {
		text-align: right;
		margin-bottom: 7px;
	}
	
	.drop_a {
		margin-right: 50px;
		text-decoration: none;
		font-family: 'NeoDunggeunmoPro-Regular';
		font-size: 15pt;
		border: white solid 1px;
		border-radius: 5px;
		background-color: transparent;
		padding: 5px;
		color: white;
		cursor: pointer;
		transition: background-color 0.5s ease, color 0.5s ease;
	}
	
	.drop_a:hover {
		background-color: white;
		color: black;
		transition: background-color 0.5s ease, color 0.5s ease;
	}
	
</style>
<script type="text/javascript">

	$(function() {
		makeChange();
		checkChange();
		$("#id_i").attr("value", "${sessionScope.loginMember.m_id }");
		$("#name_i").attr("value", "${sessionScope.loginMember.m_name }");
		$("#pn_i").attr("value", "${sessionScope.loginMember.m_phone }");
		$("#drop_a").attr("href", "login.change.drop?m_id=${sessionScope.loginMember.m_id }");
		$("#drop_a").attr("onclick", "return askDrop();");
	});

</script>
</head>
<body>
	<div id="cp_change_div" class="cp_change_div"></div>
</body>
</html>