<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Shoes</title>
<link rel="icon" type="image/x-icon" href="resources/img/index/icon.png"/>
<link rel="stylesheet" href="resources/css/index.css">
<link rel="stylesheet" href="resources/css/shoes_admin.css">
<link rel="stylesheet" href="resources/css/shoes_list.css">
<link rel="stylesheet" href="resources/css/shoes_detail.css">
<link rel="stylesheet" href="resources/css/member.css">
<link rel="stylesheet" href="resources/css/board.css">
<script type="text/javascript" src="resources/js/jQuery.js"></script>
<script type="text/javascript" src="resources/js/index.js"></script>
<script type="text/javascript" src="resources/js/shoes_admin.js"></script>
<script type="text/javascript" src="resources/js/shoes_list.js"></script>
<script type="text/javascript" src="resources/js/shoes_detail.js"></script>
<script type="text/javascript" src="resources/js/member.js"></script>
<script type="text/javascript" src="resources/js/board.js"></script>
<script type="text/javascript">
	$(function() {
		var r = '<%= request.getAttribute("r") %>';
		if (r !== "null") {
		  alert(r);
		}

 		getExchangeData();
		
 		if (true) {
	 	    setTimeout(function() {
	 	        location.reload();
	 	    }, 60000);
		}
		
		window.addEventListener('scroll', function() {
			if (window.scrollY > 100) {
				$(".scroll_btn").css("display", "flex");
				$(".scroll_btn").click(function() {
					window.scrollTo({
					  	top: 0,
					  	behavior: "smooth"
					});
				});
			} else if (window.scrollY < 50) {
				$(".scroll_btn").css("display", "none");

			}
		});
	});		
</script>
</head>
<body>
	<div>
		<div class="fixed_div">
			<div class="main_log_div">
				<ul class="log_ul">
					<c:choose>
						<c:when test="${sessionScope.loginMember == null }">
							<li class="log_li"><a href="signUp.go" class="main_log_a">회원가입</a></li>
							<li class="log_li"><a href="login.go" class="main_log_a">로그인</a></li>
						</c:when>
						<c:when test="${sessionScope.loginMember != null }">
							<li class="log_li">${sessionScope.loginMember.m_name } 님 환영합니다 !</li>
							<li class="log_li">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
							<li class="log_li"><a href="login.change.go" class="main_log_a">정보수정</a></li>
							<li class="log_li"><a onclick="logout();" class="main_log_a">로그아웃</a></li>
						</c:when>
 					</c:choose>
				</ul>
			</div>
			<div class="title_div">
				<div class="title_main_div"><a href="home.go"><img class="main_img" src="resources/img/index/logo.png"></a></div>
				<div class="title_sub_div"><img class="sub_img" src="resources/img/index/not.png"></div>
			</div>
			<div class="ex_rate_div">
				<div id="ex_rate_when_div"></div>
				<div id="ex_rate_main_div"></div>
			</div>
			<div class="blank_div">&nbsp;</div>
			<div class="list_div">
				<ul class="ca_ul">
					<li class="ca_li"><a id="ca_li_all" class="ca_li_a" href="shoes.getSearchList?s_keyword=/">전체</a></li>
					<li class="ca_sl">l</li>
					<li class="ca_li"><a class="ca_li_a" href="shoes.getClassList?s_class=Fa">패션화</a></li>
					<li class="ca_sl">l</li>
					<li class="ca_li"><a class="ca_li_a" href="shoes.getClassList?s_class=Ru">런닝화</a></li> 
					<li class="ca_sl">l</li>
					<li class="ca_li"><a class="ca_li_a" href="shoes.getClassList?s_class=So">축구화</a></li> 
					<li class="ca_sl">l</li>
					<li class="ca_li"><a class="ca_li_a" href="shoes.getClassList?s_class=Ba">농구화</a></li>
					<li class="ca_sl">l</li>
					<li class="ca_li"><a class="ca_li_a" href="shoes.getClassList?s_class=Go">골프화</a></li>
					<li class="ca_sl">l</li>
					<li class="ca_li"><a class="ca_li_a" href="shoes.getClassList?s_class=We">헬스화</a></li>
				</ul>
			</div>
		
		</div>
		<div class="content_div">
			<c:choose>
				<c:when test="${cp != null }">
					<jsp:include page="${cp }" />
				</c:when>
			</c:choose>
		</div>
		<div class="scroll_btn_div_frame">
			<div class="scroll_btn_div">
				<img class="scroll_btn" src="resources/img/index/up.png">
			</div>
		</div>
	</div>
</body>
</html>