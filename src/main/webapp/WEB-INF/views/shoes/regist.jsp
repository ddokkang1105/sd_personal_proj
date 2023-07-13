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
</style>
<script type="text/javascript">
	$(function() {
		let s_noP1 = <%= request.getAttribute("s_noP1") %>;
		makeRegistShoes(s_noP1);
	});
</script>
</head>
<body>
	<div id="cp_regist_div" class="cp_regist_div"></div>
</body>
</html>