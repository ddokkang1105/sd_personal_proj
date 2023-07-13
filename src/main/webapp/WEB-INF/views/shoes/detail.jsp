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
	
	.content_div {
		margin-top: 220px;
	}
	
	.b_empty_board_div {
		font-family: 'NeoDunggeunmoPro-Regular';
		font-size: 50px;
		font-weight: bold;
		text-align: center;
	}
	
	.b_empty_board_text_div {
		margin-left: 35%;
		margin-right: 35%;
		border-bottom: black solid 5px;
	}
	
</style>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script>
<script type="text/javascript">
	
	$(function() {
		let s_no = <%= (Integer) request.getAttribute("s_no") %>;
		let imgPath = '<c:url value="resources/img/shoes/" />';
		let token = '<%= (String) request.getAttribute("generatedToken") %>';
		let m_id = '${sessionScope.loginMember.m_id}';
		let pageCount = <%= (Integer) request.getAttribute("pageCount") %>;
		
		if ('${sessionScope.loginMember.m_id}' === 'admin') {
			chgAndDelShoes(s_no);
		}
		
		getDetailShoes(s_no, imgPath);
		
		registBoard(s_no, token);
		
		let p_no = 1;
			
		getBoardPage(s_no, p_no, m_id, token);
		
		if (pageCount === 0) {
			$("#showBoard").empty();
			$("#showBoard").css("height", "50px");
			let empty_board_text_div = $("<div class='b_empty_board_text_div'></div>").text("아직 게시물이 없습니다.");
			let empty_board_div = $("<div class='b_empty_board_div'></div>").append(empty_board_text_div);
			$("#showBoard").append(empty_board_div);
		}
		
		$("#left_btn_div").click(function() {
			p_no--;
			if (p_no <= 0) {
				alert('첫 페이지입니다.');
				p_no++;
			} else {
				getBoardPage(s_no, p_no, m_id, token);
			}
		});
		
		$("#right_btn_div").click(function() {
			p_no++;
			if (p_no > pageCount) {
				alert('마지막 페이지입니다.');
				p_no--;
			} else {
				getBoardPage(s_no, p_no, m_id, token);
			}
		});
		
	});
</script>
</head>
<body>
	<div id="adminDiv"></div>
	<div id="shoesDetail"></div>
	<div class="board_title_h"><h1>&lt;&nbsp;게시판&nbsp;&gt;</h1></div>
	<c:if test="${sessionScope.loginMember != null }">
		<div id="boardRegist" class="board_regist_div"></div>
	</c:if>
	<div id="showBoard" class="show_board">
		<div class="show_board_frame">
			<div id="left_btn_div" class="left_btn_div">
				<div class="left_btn_t">&lt;</div>
			</div>
			<div id="getBoard" class="get_board"></div>
			<div id="right_btn_div" class="right_btn_div">
				<div class="right_btn_t">&gt;</div>
			</div>
		</div>
	</div>
</body>
</html>