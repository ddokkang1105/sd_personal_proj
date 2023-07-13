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
</style>
<script type="text/javascript">
	
	$(function() {
		makeSignUp();
		checkSignUp();
		

	});
	
</script>
</head>
<body>
	<div id="cp_sign_up_div" class="cp_sign_up_div"></div>
</body>
</html>