function makeSignUp() {
	
	// title
	let title_h = $("<h2 id='title_h' class='title_h'></h2>").text("회원가입");
	
	// id
	let id_h = $("<h3 id='id_h' class='input_h'></h3>").text("아이디");
	let id_h_div = $("<div class='h_div'></div>").append(id_h);
	let id_i = $("<input id='id_i' class='input' maxlength='10' autocomplete='off' autofocus='autofocus' placeholder=' 3 - 10 Letters' name='m_id'>");
	let id_i_div = $("<div id='id_i_div' class='i_div'></div>").append(id_i);
	let id_hi_div = $("<div class='hi_div'></div>").append(id_h_div, id_i_div);
	let id_er_div = $("<div id='id_er_div' class='er_div'></div>");
	let id_div = $("<div id='id_div' class='mem_div'></div>").append(id_hi_div, id_er_div);
	
	// pw
	let pw_h = $("<h3 id='pw_h' class='input_h'></h3>").text("비밀번호");
	let pw_h_div = $("<div class='h_div'></div>").append(pw_h);
	let pw_i = $("<input id='pw_i' class='input' maxlength='12' type='password' autocomplete='off' placeholder=' 8 - 12 Letters' name='m_pw'>");
	let pw_img = $("<img src='resources/img/member/vis_icon.png' class='pw_img'>");
	let pw_btn = $("<button id='pw_btn' class='pw_btn_img'></button>").append(pw_img);
	let pw_i_div = $("<div id='pw_i_div' class='i_div'></div>").append(pw_i, pw_btn);
	let pw_hi_div = $("<div class='hi_div'></div>").append(pw_h_div, pw_i_div);
	let pw_er_div = $("<div id='pw_er_div' class='er_div'></div>");
	let pw_div = $("<div id='pw_div' class='mem_div'></div>").append(pw_hi_div, pw_er_div);
	
	// pw_check
	let pw_ck_h = $("<h3 id='pw_ck_h' class='input_h'></h3>").text("비밀번호 확인");
	let pw_ck_h_div = $("<div class='h_div'></div>").append(pw_ck_h);
	let pw_ck_i = $("<input id='pw_ck_i' class='input' maxlength='12' type='password' autocomplete='off' placeholder=' Input Same PW' name='m_pw_ck'>");
	let pw_ck_img = $("<img src='resources/img/member/vis_icon.png' class='pw_img'>");
	let pw_ck_btn = $("<button id='pw_ck_btn' class='pw_btn_img'></button>").append(pw_ck_img);
	let pw_ck_i_div = $("<div id='pw_i_div' class='i_div'></div>").append(pw_ck_i, pw_ck_btn);
	let pw_ck_hi_div = $("<div class='hi_div'></div>").append(pw_ck_h_div, pw_ck_i_div);
	let pw_ck_er_div = $("<div id='pw_ck_er_div' class='er_div'></div>");
	let pw_ck_div = $("<div id='pw_ck_div' class='mem_div'></div>").append(pw_ck_hi_div, pw_ck_er_div);

	// name
	let name_h = $("<h3 id='name_h' class='input_h'></h3>").text("이름 / 닉네임");
	let name_h_div = $("<div class='h_div'></div>").append(name_h);
	let name_i = $("<input id='name_i' class='input' maxlength='10' autocomplete='off' placeholder=' 3 - 10 Letters' name='m_name'>");
	let name_i_div = $("<div id='name_i_div' class='i_div'></div>").append(name_i);
	let name_hi_div = $("<div class='hi_div'></div>").append(name_h_div, name_i_div);
	let name_er_div = $("<div id='name_er_div' class='er_div'></div>");
	let name_div = $("<div id='name_div' class='mem_div'></div>").append(name_hi_div, name_er_div);
	
	// phone number
	let pn_h = $("<h3 id='pn_h' class='input_h'></h3>").text("휴대폰 번호");
	let pn_h_div = $("<div class='h_div'></div>").append(pn_h);
	let pn_i = $("<input id='pn_i' class='input' maxlength='11' autocomplete='off' placeholder=' Except \"-\"' name='m_phone'>");
	let pn_i_div = $("<div id='pn_i_div' class='i_div'></div>").append(pn_i);
	let pn_hi_div = $("<div class='hi_div'></div>").append(pn_h_div, pn_i_div);
	let pn_er_div = $("<div id='pn_er_div' class='er_div'></div>");
	let pn_div = $("<div id='pn_div' class='mem_div'></div>").append(pn_hi_div, pn_er_div);
	
	// submit 버튼
	let btn_i = $("<input id='btn_i' class='btn' type='submit' value='가입하기'>")
	let btn_div = $("<div id='btn_div' class='btn_div'></div>").append(btn_i);
	
	let form = $("<form action='signUp.do' method='post'></form>").append(title_h, id_div, pw_div, pw_ck_div, name_div, pn_div, btn_div);
	let form_div = $("<div id='form_div'></div>").append(form);
	let sign_up_div = $("<div id='sign_up_div' class='sign_up_div'></div>").append(form_div);
	$("#cp_sign_up_div").append(sign_up_div);
	
	// 필드에 모든 값을 입력하기 전에는 반투명하게, 버튼 비활성화
	$("#btn_i").css("pointer-events", "none");
	$("#btn_i").css("opacity", "0.3");
	
	togglePwVisibility();
	togglePwCkVisibility();

}

function makeLogin() {
	// title - 로그인 부분에 다른 이미지나 홈페이지 이미지 넣기 !
	let title_h = $("<h2 id='title_h' class='title_h'></h2>").text("로그인");
	
	// id
	let id_h = $("<h3 id='id_h' class='input_h'></h3>").text("아이디");
	let id_h_div = $("<div class='h_div'></div>").append(id_h);
	let id_i = $("<input id='id_i' class='input' maxlength='10' autocomplete='off' autofocus='autofocus' placeholder=' 3 - 10 Letters' name='m_id'>");
	let id_i_div = $("<div id='id_i_div' class='i_div'></div>").append(id_i);
	let id_hi_div = $("<div class='hi_div'></div>").append(id_h_div, id_i_div);
	let id_er_div = $("<div id='id_er_div' class='er_div'></div>");
	let id_div = $("<div id='id_div' class='mem_div'></div>").append(id_hi_div, id_er_div);

	// pw
	let pw_h = $("<h3 id='pw_h' class='input_h'></h3>").text("비밀번호");
	let pw_h_div = $("<div class='h_div'></div>").append(pw_h);
	let pw_i = $("<input id='pw_i' class='input' maxlength='12' type='password' autocomplete='off' placeholder=' 8 - 12 Letters' name='m_pw'>");
	let pw_img = $("<img src='resources/img/member/vis_icon.png' class='pw_img'>");
	let pw_btn = $("<button id='pw_btn' class='pw_btn_img'></button>").append(pw_img);
	let pw_i_div = $("<div id='pw_i_div' class='i_div'></div>").append(pw_i, pw_btn);
	let pw_hi_div = $("<div class='hi_div'></div>").append(pw_h_div, pw_i_div);
	let pw_er_div = $("<div id='pw_er_div' class='er_div'></div>");
	let pw_div = $("<div id='pw_div' class='mem_div'></div>").append(pw_hi_div, pw_er_div);

	// login 버튼
	let btn_i = $("<input id='btn_i' class='btn' type='submit' value='로그인'>")
	let btn_div = $("<div id='btn_div' class='btn_div'></div>").append(btn_i);

	
	let form = $("<form action='login.do' method='post'></form>").append(title_h, id_div, pw_div, btn_div);
	let form_div = $("<div id='form_div'></div>").append(form);
	let signUp_a = $("<a href='signUp.go' class='login_a'></a>").text("회원가입");
	let find_id_a = $("<a href='login.find.id.go' class='login_a'></a>").text("아이디 찾기");
	let find_pw_a = $("<a href='login.find.pw.go' class='login_a'></a>").text("비밀번호 찾기");
	let signUp_li = $("<li id='signUp_li' class='login_li'></li>").append(signUp_a);
	let find_id_li = $("<li id='find_id_li' class='login_li'></li>").append(find_id_a);
	let find_pw_li = $("<li id='find_pw_li' class='login_li'></li>").append(find_pw_a);
	let login_ul = $("<ul id='login_ul' class='login_ul'></ul>").append(signUp_li, find_id_li, find_pw_li);
	let login_div = $("<div id='login_div' class='login_div'></div>").append(form_div, login_ul);
	$("#cp_login_div").append(login_div);
	
	// 필드에 모든 값을 입력하기 전에는 반투명하게, 버튼 비활성화
	$("#btn_i").css("pointer-events", "none");
	$("#btn_i").css("opacity", "0.3");
	
	togglePwVisibility();

}

function makeChange() {
	// title
	let title_h = $("<h2 id='title_h' class='title_h'></h2>").text("정보수정");
	
	// id
	let id_h = $("<h3 id='id_h' class='input_h'></h3>").text("아이디");
	let id_h_div = $("<div class='h_div'></div>").append(id_h);
	let id_i = $("<input id='id_i' class='input' readonly='readonly' name='m_id'>");
	let id_i_div = $("<div id='id_i_div' class='i_div'></div>").append(id_i);
	let id_hi_div = $("<div class='hi_div'></div>").append(id_h_div, id_i_div);
	let id_er_div = $("<div id='id_er_div' class='er_div'></div>");
	let id_div = $("<div id='id_div' class='mem_div'></div>").append(id_hi_div, id_er_div);
	
	// pw
	let pw_h = $("<h3 id='pw_h' class='input_h'></h3>").text("비밀번호");
	let pw_h_div = $("<div class='h_div'></div>").append(pw_h);
	let pw_i = $("<input id='pw_i' class='input' maxlength='12' type='password' autocomplete='off' placeholder=' 8 - 12 Letters' name='m_pw'>");
	let pw_img = $("<img src='resources/img/member/vis_icon.png' class='pw_img'>");
	let pw_btn = $("<button id='pw_btn' class='pw_btn_img'></button>").append(pw_img);
	let pw_i_div = $("<div id='pw_i_div' class='i_div'></div>").append(pw_i, pw_btn);
	let pw_hi_div = $("<div class='hi_div'></div>").append(pw_h_div, pw_i_div);
	let pw_er_div = $("<div id='pw_er_div' class='er_div'></div>");
	let pw_div = $("<div id='pw_div' class='mem_div'></div>").append(pw_hi_div, pw_er_div);

	
	// pw_check
	let pw_ck_h = $("<h3 id='pw_ck_h' class='input_h'></h3>").text("비밀번호 확인");
	let pw_ck_h_div = $("<div class='h_div'></div>").append(pw_ck_h);
	let pw_ck_i = $("<input id='pw_ck_i' class='input' maxlength='12' type='password' autocomplete='off' placeholder=' Input Same PW' name='m_pw_ck'>");
	let pw_ck_img = $("<img src='resources/img/member/vis_icon.png' class='pw_img'>");
	let pw_ck_btn = $("<button id='pw_ck_btn' class='pw_btn_img'></button>").append(pw_ck_img);
	let pw_ck_i_div = $("<div id='pw_i_div' class='i_div'></div>").append(pw_ck_i, pw_ck_btn);
	let pw_ck_hi_div = $("<div class='hi_div'></div>").append(pw_ck_h_div, pw_ck_i_div);
	let pw_ck_er_div = $("<div id='pw_ck_er_div' class='er_div'></div>");
	let pw_ck_div = $("<div id='pw_ck_div' class='mem_div'></div>").append(pw_ck_hi_div, pw_ck_er_div);
	
	// name
	let name_h = $("<h3 id='name_h' class='input_h'></h3>").text("이름 / 닉네임");
	let name_h_div = $("<div class='h_div'></div>").append(name_h);
	let name_i = $("<input id='name_i' class='input' maxlength='10' autocomplete='off' placeholder=' 3 - 10 Letters' name='m_name'>");
	let name_i_div = $("<div id='name_i_div' class='i_div'></div>").append(name_i);
	let name_hi_div = $("<div class='hi_div'></div>").append(name_h_div, name_i_div);
	let name_er_div = $("<div id='name_er_div' class='er_div'></div>");
	let name_div = $("<div id='name_div' class='mem_div'></div>").append(name_hi_div, name_er_div);

	
	// phone number
	let pn_h = $("<h3 id='pn_h' class='input_h'></h3>").text("휴대폰 번호");
	let pn_h_div = $("<div class='h_div'></div>").append(pn_h);
	let pn_i = $("<input id='pn_i' class='input' maxlength='11' autocomplete='off' placeholder=' Except \"-\"' name='m_phone'>");
	let pn_i_div = $("<div id='pn_i_div' class='i_div'></div>").append(pn_i);
	let pn_hi_div = $("<div class='hi_div'></div>").append(pn_h_div, pn_i_div);
	let pn_er_div = $("<div id='pn_er_div' class='er_div'></div>");
	let pn_div = $("<div id='pn_div' class='mem_div'></div>").append(pn_hi_div, pn_er_div);

	
	// submit 버튼
	let btn_i = $("<input id='btn_i' class='btn' type='submit' value='수정하기'>")
	let btn_div = $("<div id='btn_div' class='btn_div'></div>").append(btn_i);
	
	let form = $("<form action='login.change.do' method='post'></form>").append(title_h, id_div, pw_div, pw_ck_div, name_div, pn_div, btn_div);
	let form_div = $("<div id='form_div'></div>").append(form);
	
	// 회원탈퇴 버튼
	let drop_a = $("<a id='drop_a' class='drop_a'></a>").text("회원탈퇴");
	let drop_div = $("<div id='drop_div' class='drop_div'></div>").append(drop_a);
	
	let change_div = $("<div id='change_div' class='change_div'></div>").append(form_div, drop_div);
	$("#cp_change_div").append(change_div);
	
	// 필드에 모든 값을 입력하기 전에는 반투명하게, 버튼 비활성화
	$("#btn_i").css("pointer-events", "none");
	$("#btn_i").css("opacity", "0.3");
	
	togglePwVisibility();
	togglePwCkVisibility();
	
}

function makeFindId() {
	// title
	let title_h = $("<h2 id='title_h' class='title_h'></h2>").text("아이디 찾기");
	
	// info
	let info_div = $("<div id='info_div' class='info_div'></div>").html("가입 시 등록한 휴대전화를 입력하면 <br> 아이디를 알려드립니다.")
	
	// pn
	let pn_h = $("<h3 id='pn_h' class='input_h'></h3>").text("휴대폰 번호");
	let pn_h_div = $("<div class='h_div'></div>").append(pn_h);
	let pn_i = $("<input id='pn_i' class='input' maxlength='11' autocomplete='off' placeholder=' Except \"-\"' name='m_phone'>");
	let pn_i_div = $("<div id='pn_i_div' class='i_div'></div>").append(pn_i);
	let pn_hi_div = $("<div class='hi_div'></div>").append(pn_h_div, pn_i_div);
	let pn_er_div = $("<div id='pn_er_div' class='er_div'></div>");
	let pn_div = $("<div id='pn_div' class='mem_div'></div>").append(pn_hi_div, pn_er_div);

	// submit 버튼
	let btn_i = $("<input id='btn_i' class='btn' type='submit' value='아이디 찾기'>")
	let btn_div = $("<div id='btn_div' class='btn_div'></div>").append(btn_i);
	
	let form = $("<form action='login.find.id.do' method='post'></form>").append(title_h, info_div, pn_div, btn_div);
	let form_div = $("<div id='form_div'></div>").append(form);
	
	let find_id_div = $("<div id='find_id_div' class='find_id_div'></div>").append(form_div);
	$("#cp_find_id_div").append(find_id_div);
	
	$("#btn_i").css("pointer-events", "none");
	$("#btn_i").css("opacity", "0.3");
}

function makeFindPw() {
	// 휴대전화 정규표현식 추가하기
	let title_h = $("<h2 id='title_h' class='title_h'></h2>").text("비밀번호 찾기");
	
	// info
	let info_div = $("<div id='info_div' class='info_div'></div>").html("가입 시 등록한 휴대전화를 입력하면 <br> 아이디를 알려드립니다.")
	
	// pn
	let pn_h = $("<h3 id='pn_h' class='input_h'></h3>").text("휴대폰 번호");
	let pn_h_div = $("<div class='h_div'></div>").append(pn_h);
	let pn_i = $("<input id='pn_i' class='input' maxlength='11' autocomplete='off' placeholder=' Except \"-\"' name='m_phone'>");
	let pn_i_div = $("<div id='pn_i_div' class='i_div'></div>").append(pn_i);
	let pn_hi_div = $("<div class='hi_div'></div>").append(pn_h_div, pn_i_div);
	let pn_er_div = $("<div id='pn_er_div' class='er_div'></div>");
	let pn_div = $("<div id='pn_div' class='mem_div'></div>").append(pn_hi_div, pn_er_div);
	
	// id
	let id_h = $("<h3 id='id_h' class='input_h'></h3>").text("아이디");
	let id_h_div = $("<div class='h_div'></div>").append(id_h);
	let id_i = $("<input id='id_i' class='input' maxlength='10' autocomplete='off' autofocus='autofocus' placeholder=' 3 - 10 Letters' name='m_id'>");
	let id_i_div = $("<div id='id_i_div' class='i_div'></div>").append(id_i);
	let id_hi_div = $("<div class='hi_div'></div>").append(id_h_div, id_i_div);
	let id_er_div = $("<div id='id_er_div' class='er_div'></div>");
	let id_div = $("<div id='id_div' class='mem_div'></div>").append(id_hi_div, id_er_div);
	
	// submit 버튼
	let btn_i = $("<input id='btn_i' class='btn' type='submit' value='비밀번호 찾기'>")
	let btn_div = $("<div id='btn_div' class='btn_div'></div>").append(btn_i);
	
	let form = $("<form action='login.find.pw.do' method='post'></form>").append(title_h, info_div, pn_div, id_div, btn_div);
	let form_div = $("<div id='form_div'></div>").append(form);
	
	let find_pw_div = $("<div id='find_pw_div' class='find_pw_div'></div>").append(form_div);
	$("#cp_find_pw_div").append(find_pw_div);
	
	$("#btn_i").css("pointer-events", "none");
	$("#btn_i").css("opacity", "0.3");
}

function togglePwVisibility() {
	$("#pw_btn").click(function(event) {
		event.preventDefault();
	    if ($("#pw_i").attr("type") === "password") {
	    	$("#pw_i").attr("type", "text");
	    	$("#pw_btn").empty();
	    	$("#pw_btn").css("background-image", "url('resources/img/member/invis_icon.png')");
	    } else {
	    	$("#pw_i").attr("type", "password");
	    	$("#pw_btn").css("background-image", "url('resources/img/member/vis_icon.png')");
	    }
	});
}

function togglePwCkVisibility() {
	$("#pw_ck_btn").click(function(event) {
		event.preventDefault();
	    if ($("#pw_ck_i").attr("type") === "password") {
	    	$("#pw_ck_i").attr("type", "text");
	    	$("#pw_ck_btn").empty();
	    	$("#pw_ck_btn").css("background-image", "url('resources/img/member/invis_icon.png')");
	    } else {
	    	$("#pw_ck_i").attr("type", "password");
	    	$("#pw_ck_btn").css("background-image", "url('resources/img/member/vis_icon.png')");
	    }
	});
}

// 나중에 함수 이름 고쳐주기	
function checkSignUp() {
	$("input:not(#btn_i)").on("input", function() {
		// Activate the button when all values ​​are filled in the input
		checkInputNullSignUp();
	});
	
	$("#id_i").keyup(function() {
		checkId();
	});

	$("#pw_i").keyup(function() {
		checkPw();
	});
	
	$("#pw_ck_i").keyup(function() {
		checkPwCk();
	});
	
	$("#name_i").keyup(function() {
		checkName();
	});
	
	$("#pn_i").keyup(function() {
		checkPN();
	});
}

function checkInputNullSignUp() {
	let m_id = $("#id_i").val();
	let inputFilled = $("input:not(#btn_i)").filter(function() { return !this.value }).length == 0;
	let	ckId = rtnCkId();
	let	ckPw = rtnCkPw();
	let ckPwCk = rtnCkPwCk();
	let ckName = rtnCkName();
	let ckPN = rtnCkPN();

	checkIdDpctd(m_id, function(dpctd) {
		if (inputFilled && ckId && ckPw && ckPwCk && ckName && ckPN && !dpctd) {
			$("#btn_i").css({"pointer-events": "auto", "opacity": "1"});
		} else {
			$("#btn_i").css({"pointer-events": "none", "opacity": "0.3"});
		}
	});
}

function checkLogin() {
	$("input:not(#btn_i)").on("input", function() {
		// Activate the button when all values ​​are filled in the input
		checkInputNullLogin();
	});
	
	$("#id_i").keyup(function() {
		checkLoginId();
	});
	
	$("#pw_i").keyup(function() {
		checkPw();
	});
}

function checkInputNullLogin() {
	let m_id = $("#id_i").val();
	let inputFilled = $("input:not(#btn_i)").filter(function() { return !this.value }).length == 0;
	let	ckId = rtnCkId();
	let	ckPw = rtnCkPw();
	
	if (inputFilled && ckId && ckPw) {
		$("#btn_i").css({"pointer-events": "auto", "opacity": "1"});
	} else {
		$("#btn_i").css({"pointer-events": "none", "opacity": "0.3"});
	}
}

function checkChange() {
	$("input:not(#btn_i)").on("input", function() {
		// Activate the button when all values ​​are filled in the input
		checkInputNullChange();
	});	

	$("#pw_i").keyup(function() {
		checkPw();
	});
	
	$("#pw_ck_i").keyup(function() {
		checkPwCk();
	});
	
	$("#name_i").keyup(function() {
		checkName();
	});
	
	$("#pn_i").keyup(function() {
		checkPN();
	});
}

function checkInputNullChange() {
	let m_id = $("#id_i").val();
	let inputFilled = $("input:not(#btn_i)").filter(function() { return !this.value }).length == 0;
	let	ckPw = rtnCkPw();
	let ckPwCk = rtnCkPwCk();
	let ckName = rtnCkName();
	let ckPN = rtnCkPN();
	
	if (inputFilled && ckPw && ckPwCk && ckName && ckPN) {
		$("#btn_i").css({"pointer-events": "auto", "opacity": "1"});
	} else {
		$("#btn_i").css({"pointer-events": "none", "opacity": "0.3"});
	}
}

function checkFindId() {
	$("input:not(#btn_i)").on("input", function() {
		checkInputNullFindId();
	});
	
	$("#pn_i").keyup(function() {
		checkPN();
	});
}

function checkInputNullFindId() {
	let inputFilled = $("input:not(#btn_i)").filter(function() { return !this.value }).length == 0;
	let ckPN = rtnCkPN();

	if (inputFilled && ckPN) {
		$("#btn_i").css({"pointer-events": "auto", "opacity": "1"});
	} else {
		$("#btn_i").css({"pointer-events": "none", "opacity": "0.3"});
	}
}

function checkFindPw() {
	$("input:not(#btn_i)").on("input", function() {
		checkInputNullFindPw();
	});
	
	$("#pn_i").keyup(function() {
		checkPN();
	});
	
	$("#id_i").keyup(function() {
		checkLoginId();
	});
}

function checkInputNullFindPw() {
	let inputFilled = $("input:not(#btn_i)").filter(function() { return !this.value }).length == 0;
	let ckPN = rtnCkPN();
	let	ckId = rtnCkId();
	
	if (inputFilled && ckPN && ckId) {
		$("#btn_i").css({"pointer-events": "auto", "opacity": "1"});
	} else {
		$("#btn_i").css({"pointer-events": "none", "opacity": "0.3"});
	}
}

function checkIdDpctd(m_id, callback) {
	$.getJSON("signUp.check?m_id=" + m_id, function(check) {
		if (m_id === check.m_id || m_id === "admin") {
			$("#id_div").css("margin-bottom", "0px");
			$("#id_er_div").css("margin-top", "15px");
			$("#id_er_div").css("margin-bottom", "15px");
			$("#id_er_div").css("margin-right", "220px");
			let id_p = $("<p id='id_p' class='er_p'></p>").text("중복된 아이디입니다.");
			$("#id_er_div").empty();
			$("#id_er_div").append(id_p);
			$("#id_p").css("color", "green");
			callback(true);
		} else {
			$("#id_er_div").css("margin-top", "0px");
			$("#id_er_div").css("margin-bottom", "0px");
			$("#id_er_div").css("margin-right", "100px");
			$("#id_div").css("margin-bottom", "50px");
			$("#id_er_div").empty();
			callback(false);
			}
		});
}

function checkId() {
		let ck_id = /^[A-za-z0-9]{3,10}$/;
		let m_id = $("#id_i").val();
		if (m_id.match(ck_id) == null) {
			$("#id_div").css("margin-bottom", "0px");
			$("#id_er_div").css("margin-top", "15px");
			$("#id_er_div").css("margin-bottom", "15px");
			$("#id_er_div").css("margin-right", "100px");
			let id_p = $("<p id='id_p' class='er_p'></p>").text("영문, 숫자를 조합하여 입력해주세요. (3-10자)");
			$("#id_er_div").empty();
			$("#id_er_div").append(id_p);
			$("#id_p").css("color", "red");
			// return false;
		} else {
			// $("#id_er_div").empty();
			// return true;
		}
}

function checkLoginId() {
	let ck_id = /^[A-za-z0-9]{3,10}$/;
	let m_id = $("#id_i").val();
	if (m_id.match(ck_id) == null) {
		$("#id_div").css("margin-bottom", "0px");
		$("#id_er_div").css("margin-top", "15px");
		$("#id_er_div").css("margin-bottom", "15px");
		$("#id_er_div").css("margin-right", "100px");
		let id_p = $("<p id='id_p' class='er_p'></p>").text("영문, 숫자를 조합하여 입력해주세요. (3-10자)");
		$("#id_er_div").empty();
		$("#id_er_div").append(id_p);
		$("#id_p").css("color", "red");
	} else {
		$("#id_er_div").css("margin-top", "0px");
		$("#id_er_div").css("margin-bottom", "0px");
		$("#id_er_div").css("margin-right", "100px");
		$("#id_div").css("margin-bottom", "50px");
		$("#id_er_div").empty();
	}
}

function rtnCkId() {
		let ck_id = /^[A-za-z0-9]{3,10}$/;
		let m_id = $("#id_i").val();
		if (m_id.match(ck_id) == null) {
			return false;
		} else {
			return true;
		}
}

function checkPw() {
	let ck_pw = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{1,50}).{8,50}$/;
	let m_pw = $("#pw_i").val();
	if (m_pw.match(ck_pw) == null) {
		$("#pw_div").css("margin-bottom", "0px");
		$("#pw_er_div").css("margin-top", "15px");
		$("#pw_er_div").css("margin-bottom", "15px");
		$("#pw_er_div").css("margin-right", "100px");
		let pw_p = $("<p id='pw_p' class='er_p'></p>").text("영문, 숫자, 특수문자를 조합하여 입력해주세요. (8-12자)");
		$("#pw_er_div").empty();
		$("#pw_er_div").append(pw_p);
		$("#pw_p").css("color", "red");
		// return false;
	} else {
		$("#pw_er_div").css("margin-top", "0px");
		$("#pw_er_div").css("margin-bottom", "0px");
		$("#pw_er_div").css("margin-right", "100px");
		$("#pw_div").css("margin-bottom", "50px");
		$("#pw_er_div").empty();
		// return true;
	}
}

function rtnCkPw() {
		let ck_pw = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{1,50}).{8,50}$/;
		let m_pw = $("#pw_i").val();
		if (m_pw.match(ck_pw) == null) {
			return false;
		} else {
			return true;
		}
}

function checkPwCk() {
	let m_pw = $("#pw_i").val();
	let pw_ck = $("#pw_ck_i").val();
	if (m_pw !== pw_ck) {
		$("#pw_ck_div").css("margin-bottom", "0px");
		$("#pw_ck_er_div").css("margin-top", "15px");
		$("#pw_ck_er_div").css("margin-bottom", "15px");
		$("#pw_ck_er_div").css("margin-right", "135px");
		let pw_ck_p = $("<p id='pw_ck_p' class='er_p'></p>").text("비밀번호가 일치하지 않습니다.");
		$("#pw_ck_er_div").empty();
		$("#pw_ck_er_div").append(pw_ck_p);
		$("#pw_ck_p").css("color", "red");
	} else {
		$("#pw_ck_er_div").css("margin-top", "0px");
		$("#pw_ck_er_div").css("margin-bottom", "0px");
		$("#pw_ck_er_div").css("margin-right", "100px");
		$("#pw_ck_div").css("margin-bottom", "50px");
		$("#pw_ck_er_div").empty();
	}
}

function rtnCkPwCk() {
	let m_pw = $("#pw_i").val();
	let pw_ck = $("#pw_ck_i").val();
	if (m_pw !== pw_ck) {
		return false;
	} else {
		return true;
	}
}

function checkName() {
	let ck_name = /^[A-za-z0-9]{3,10}$/;
	let m_name = $("#name_i").val();
	if (m_name.match(ck_name) == null) {
		$("#name_div").css("margin-bottom", "0px");
		$("#name_er_div").css("margin-top", "15px");
		$("#name_er_div").css("margin-bottom", "15px");
		$("#name_er_div").css("margin-right", "100px");
		let name_p = $("<p id='name_p' class='er_p'></p>").text("영문, 숫자를 조합하여 입력해주세요. (3-10자)");
		$("#name_er_div").empty();
		$("#name_er_div").append(name_p);
		$("#name_p").css("color", "red");
	} else {
		$("#name_er_div").css("margin-top", "0px");
		$("#name_er_div").css("margin-bottom", "0px");
		$("#name_er_div").css("margin-right", "100px");
		$("#name_div").css("margin-bottom", "50px");
		$("#name_er_div").empty();
	}
}	

function rtnCkName() {
	let ck_name = /^[A-za-z0-9]{3,10}$/;
	let m_name = $("#name_i").val();
	if (m_name.match(ck_name) == null) {
		return false;
	} else {
		return true;
	}
}

function checkPN() {
	let ck_pn = /^010-?([0-9]{4})-?([0-9]{4})$/;
	let m_phone = $("#pn_i").val();
	if (m_phone.match(ck_pn) == null) {
		$("#pn_div").css("margin-bottom", "0px");
		$("#pn_er_div").css("margin-top", "15px");
		$("#pn_er_div").css("margin-bottom", "15px");
		$("#pn_er_div").css("margin-right", "130px");
		let pn_p = $("<p id='pn_p' class='er_p'></p>").text("숫자만 입력하세요 (11자리 | 010 ~ )");
		$("#pn_er_div").empty();
		$("#pn_er_div").append(pn_p);
		$("#pn_p").css("color", "red");
	} else {
		$("#pn_er_div").css("margin-top", "0px");
		$("#pn_er_div").css("margin-bottom", "0px");
		$("#pn_er_div").css("margin-right", "100px");
		$("#pn_div").css("margin-bottom", "50px");
		$("#pn_er_div").empty();
	}
}

function rtnCkPN() {
	let ck_pn = /^010-?([0-9]{4})-?([0-9]{4})$/;
	let m_phone = $("#pn_i").val();
	if (m_phone.match(ck_pn) == null) {
		return false;
	} else {
		return true;
	}
}

function askDrop() {
	let c = confirm("정말로 탈퇴하시겠습니까?");
	if (c) {
		return true;
	}
	return false;
}


