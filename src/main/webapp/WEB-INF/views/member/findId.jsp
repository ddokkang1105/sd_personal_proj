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
	
	.info_div {
		text-align: center;
		margin-bottom: 50px;
		font-family: 'NeoDunggeunmoPro-Regular';
		font-size: 15pt;
		color: white;
	}
</style>
<script type="text/javascript">
	$(function() {
		makeFindId();
		checkFindId();
	});
</script>
</head>
<body>
	<div id="cp_find_id_div" class="cp_find_id_div"></div>
</body>
</html>