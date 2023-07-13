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
 		let s_class = '<%= (String) request.getAttribute("s_class") %>';
 		let imgPath = '<c:url value="resources/img/shoes/" />';
 		
 		getClassData(s_class, imgPath);
	});
	
</script>
</head>
<body>
	<div id="cp_shoes_list_div" class="cp_shoes_list_div"></div>
</body>
</html>