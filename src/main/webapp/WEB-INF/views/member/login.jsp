<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
	.list_div, .ex_rate_div {
		display: none;
	}
	
	.login_ul {
		margin-top: 60px;
		margin-bottom: 30px;
		text-align: center;
	}
	
	.login_li {
		margin-left: 25px;
		margin-right: 25px;
	}
	
	.login_a {
		text-decoration: none;
		font-family: 'NeoDunggeunmoPro-Regular';
		font-size: 25pt;
		color: white;
		transition: color 0.5s ease;
	}
	
	.login_a:hover {
		color: fuchsia;
		transition: color 0.5s ease;
	}
	
</style>
<script type="text/javascript">
	$(function() {
		makeLogin();
		checkLogin();
		$("#id_i").attr("value", "${cookie.lastLoginId.value }");
		
	});
</script>
</head>
<body>
	<div id="cp_login_div" class="cp_login_div"></div>
</body>
</html>