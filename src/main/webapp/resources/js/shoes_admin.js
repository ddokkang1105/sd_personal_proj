function makeRegistShoes(s_noP1) {
	
	// title
	let title_h = $("<h2 id='title_h' class='s_title_h'></h2>").text("게시물 등록");
	
	// s_no
	let no_h = $("<h3 id='no_h' class='s_input_h'></h3>").text("No.");
	let no_h_div = $("<div class='h_div'></div>").append(no_h);
	let no_i = $("<input id='no_i' class='s_input' readonly='readonly' value='" + s_noP1 + "' name='s_no'>");
	let no_i_div = $("<div id='no_i_div' class='s_i_div'></div>").append(no_i);
	let no_hi_div = $("<div class='hi_div'></div>").append(no_h_div, no_i_div);
	let no_div = $("<div id='no_div' class='shoes_div'></div>").append(no_hi_div);
	
	// s_brand - Jordan
	let brand_h = $("<h3 id='brand_h' class='s_input_h'></h3>").text("브랜드");
	let brand_h_div = $("<div class='h_div'></div>").append(brand_h);
	let brand_i = $("<input id='brand_i' class='s_input' maxlength='20' autocomplete='off' " + 
				"autofocus='autofocus' placeholder='Ex> Jordan' name='s_brand'>");
	let brand_i_div = $("<div id='brand_i_div' class='s_i_div'></div>").append(brand_i);
	let brand_hi_div = $("<div class='hi_div'></div>").append(brand_h_div, brand_i_div);
	let brand_div = $("<div id='brand_div' class='shoes_div'></div>").append(brand_hi_div);
	
	// s_class - Fashion/Running/BasketBall/Golf
	let class_h = $("<h3 id='class_h' class='s_input_h'></h3>").text("종류");
	let class_h_div = $("<div class='h_div'></div>").append(class_h);
	let class_tA = $("<textarea id='class_tA' class='s_tA' maxlength='50' autocomplete='off' " + 
				"placeholder='Ex> Fashion/Running/BasketBall/Golf' name='s_class'></textarea>");
	let class_tA_div = $("<div id='class_tA_div' class='s_tA_div'></div>").append(class_tA);
	let class_htA_div = $("<div class='hi_div'></div>").append(class_h_div, class_tA_div);
	let class_div = $("<div id='class_div' class='shoes_div'></div>").append(class_htA_div);

	// s_name - Jordan 1 Retro High OG Black and Lucky Green
	let name_h = $("<h3 id='s_name_h' class='s_input_h'></h3>").text("이름");
	let name_h_div = $("<div class='h_div'></div>").append(name_h);
	let name_tA = $("<textarea id='name_tA' class='s_tA' maxlength='100' autocomplete='off' " + 
				"placeholder='Ex> Jordan 1 Retro High OG Black and Lucky Green' name='s_name'></textarea>");
	let name_tA_div = $("<div id='name_tA_div' class='s_tA_div'></div>").append(name_tA);
	let name_htA_div = $("<div class='hi_div'></div>").append(name_h_div, name_tA_div);
	let name_div = $("<div id='name_div' class='shoes_div'></div>").append(name_htA_div);

	// s_price number(7) - 숫자만
	let price_h = $("<h3 id='price_h' class='s_input_h'></h3>").text("가격");
	let price_h_div = $("<div class='h_div'></div>").append(price_h);
	let price_i = $("<input id='price_i' class='s_input' maxlength='7' autocomplete='off' placeholder='출시가' name='s_price'>");
	let price_i_div = $("<div id='price_i_div' class='s_i_div'></div>").append(price_i);
	let price_hi_div = $("<div class='hi_div'></div>").append(price_h_div, price_i_div);
	let price_div = $("<div id='price_div' class='shoes_div'></div>").append(price_hi_div);
	
	// s_color
	let color_h = $("<h3 id='color_h' class='s_input_h'></h3>").text("색상");
	let color_h_div = $("<div class='h_div'></div>").append(color_h);
	let color_tA = $("<textarea id='color_tA' class='s_tA' maxlength='50' autocomplete='off' " + 
				"placeholder='Ex> BLACK/GREEN/WHITE' name='s_color'></textarea>");
	let color_tA_div = $("<div id='color_tA_div' class='s_tA_div'></div>").append(color_tA);
	let color_htA_div = $("<div class='hi_div'></div>").append(color_h_div, color_tA_div);
	let color_div = $("<div id='color_div' class='shoes_div'></div>").append(color_htA_div);
	
	// s_when 
	let when_h = $("<h3 id='when_h' class='s_input_h'></h3>").text("출시일");
	let when_h_div = $("<div class='h_div'></div>").append(when_h);
	let when_i = $("<input id='when_i' class='s_input' maxlength='8' autocomplete='off' " + 
				"placeholder='EX> 20210403' name='when'>");
	let when_i_div = $("<div id='when_i_div' class='s_i_div'></div>").append(when_i);
	let when_hi_div = $("<div class='hi_div'></div>").append(when_h_div, when_i_div);
	let when_div = $("<div id='when_div' class='shoes_div'></div>").append(when_hi_div);
	
	// s_keyword - nike/fashion/basketBall/jordan/jordan 1 retro high og black and lucky green/나이키/패션/농구/조던/검정색/흰색/인기/올해/쿠션/편안함/
	let key_h = $("<h3 id='key_h' class='s_input_h'></h3>").text("키워드");
	let key_h_div = $("<div class='h_div'></div>").append(key_h);
	let key_tA = $("<textarea id='key_tA' class='s_tA' maxlength='300' autocomplete='off' " + 
				"placeholder='Ex> nike/fashion/basketBall/jordan/jordan 1 retro high og black and lucky green/나이키/패션/농구/조던/검정색/흰색/인기/올해/쿠션/편안함/ ' " + 
				"name='s_keyword'></textarea>");
	let key_tA_div = $("<div id='key_tA_div' class='s_tA_div'></div>").append(key_tA);
	let key_htA_div = $("<div class='hi_div'></div>").append(key_h_div, key_tA_div);
	let key_div = $("<div id='key_div' class='shoes_div'></div>").append(key_htA_div);
	
	// s_image
	let img_h = $("<h3 id='img_h' class='s_input_h'></h3>").text("사진 선택");
	let img_h_div = $("<div class='h_div'></div>").append(img_h);
	let img_pre_div = $("<div id='img_pre_div'></div>")
	let img_i = $("<input id='img_i' class='s_input' type='file' name='files' multiple='multiple' onchange='previewFiles()'>");
	let img_i_div = $("<div id='img_i_div' class='s_i_div'></div>").append(img_i);
	let img_hi_div = $("<div class='hi_div'></div>").append(img_h_div, img_pre_div, img_i_div);
	let img_info_div = $("<div id='img_info_div' class='img_info_div'></div>").text("EX> 1_0.png,1_1.png,1_2.png (320 * 320)");
	let img_div = $("<div id='img_div' class='shoes_div'></div>").append(img_hi_div, img_info_div);
	
	
	// submit 버튼
	let btn_i = $("<input id='btn_i' class='s_btn' type='submit' value='등록'>")
	let btn_div = $("<div id='btn_div' class='btn_div'></div>").append(btn_i);
	
	let form = $("<form action='shoes.regist' method='post' " + 
				"enctype='multipart/form-data'></form>").append(title_h, no_div, brand_div, class_div, name_div, 
						price_div, color_div, when_div, key_div, img_div, btn_div);
	let form_div = $("<div id='form_div'></div>").append(form);
	let regist_div = $("<div id='regist_div' class='regist_div'></div>").append(form_div);
	// div 하나 더 추가할지 말지 고민해보기 ! -> 완	
	$("#cp_regist_div").append(regist_div);
}

function makeChangeShoes(s_no, imgPath) {
	
	$.getJSON("shoes.getDetailJSON?s_no=" + s_no, function(cha) {
		
		let title_h = $("<h2 id='title_h' class='s_title_h'></h2>").text("신발 정보 수정");
		
		// s_no 
		let no_h = $("<h3 id='no_h' class='s_input_h'></h3>").text("No.");
		let no_h_div = $("<div class='h_div'></div>").append(no_h);
		let no_i = $("<input id='no_i' class='s_input' readonly='readonly' value='" + s_no + "' name='s_no'>");
		let no_i_div = $("<div id='no_i_div' class='s_i_div'></div>").append(no_i);
		let no_hi_div = $("<div class='hi_div'></div>").append(no_h_div, no_i_div);
		let no_div = $("<div id='no_div' class='shoes_div'></div>").append(no_hi_div);

		
		// s_brand - Jordan
		let brand_h = $("<h3 id='brand_h' class='s_input_h'></h3>").text("브랜드");
		let brand_h_div = $("<div class='h_div'></div>").append(brand_h);
		let brand_i = $("<input id='brand_i' class='s_input' maxlength='20' autocomplete='off' " + 
					"placeholder='Ex> Jordan' name='s_brand' " + 
					"autofocus='autofocus' value='" + cha.s_brand + "' name='s_brand'>");
		let brand_i_div = $("<div id='brand_i_div' class='s_i_div'></div>").append(brand_i);
		let brand_hi_div = $("<div class='hi_div'></div>").append(brand_h_div, brand_i_div);
		let brand_div = $("<div id='brand_div' class='shoes_div'></div>").append(brand_hi_div);

		// s_class - Fashion/Running/BasketBall/Golf
		let class_h = $("<h3 id='class_h' class='s_input_h'></h3>").text("종류");
		let class_h_div = $("<div class='h_div'></div>").append(class_h);
		let class_tA = $("<textarea id='class_tA' class='s_tA' maxlength='50' autocomplete='off' " + 
					"placeholder='Ex> Fashion/Running/BasketBall/Golf' " + 
					"name='s_class'></textarea>").text(cha.s_class);
		let class_tA_div = $("<div id='class_tA_div' class='s_tA_div'></div>").append(class_tA);
		let class_htA_div = $("<div class='hi_div'></div>").append(class_h_div, class_tA_div);
		let class_div = $("<div id='class_div' class='shoes_div'></div>").append(class_htA_div);

		// s_name - Jordan 1 Retro High OG Black and Lucky Green
		let name_h = $("<h3 id='s_name_h' class='s_input_h'></h3>").text("이름");
		let name_h_div = $("<div class='h_div'></div>").append(name_h);
		let name_tA = $("<textarea id='name_tA' class='s_tA' maxlength='100' autocomplete='off' " + 
					"placeholder='Ex> Jordan 1 Retro High OG Black and Lucky Green' " + 
					"name='s_name'></textarea>").text(cha.s_name);
		let name_tA_div = $("<div id='name_tA_div' class='s_tA_div'></div>").append(name_tA);
		let name_htA_div = $("<div class='hi_div'></div>").append(name_h_div, name_tA_div);
		let name_div = $("<div id='name_div' class='shoes_div'></div>").append(name_htA_div);
		
		// s_price number(7) - 숫자만
		let price_h = $("<h3 id='price_h' class='s_input_h'></h3>").text("가격");
		let price_h_div = $("<div class='h_div'></div>").append(price_h);
		let price_i = $("<input id='price_i' class='s_input' maxlength='7' autocomplete='off' " + 
				"placeholder='출시가' value=" + cha.s_price + " name='s_price'>");
		let price_i_div = $("<div id='price_i_div' class='s_i_div'></div>").append(price_i);
		let price_hi_div = $("<div class='hi_div'></div>").append(price_h_div, price_i_div);
		let price_div = $("<div id='price_div' class='shoes_div'></div>").append(price_hi_div);
		
		// s_color
		let color_h = $("<h3 id='color_h' class='s_input_h'></h3>").text("색상");
		let color_h_div = $("<div class='h_div'></div>").append(color_h);
		let color_tA = $("<textarea id='color_tA' class='s_tA' maxlength='50' autocomplete='off' " + 
					"placeholder='Ex> BLACK/GREEN/WHITE' name='s_color'></textarea>").text(cha.s_color);
		let color_tA_div = $("<div id='color_tA_div' class='s_tA_div'></div>").append(color_tA);
		let color_htA_div = $("<div class='hi_div'></div>").append(color_h_div, color_tA_div);
		let color_div = $("<div id='color_div' class='shoes_div'></div>").append(color_htA_div);

		// s_when 
		let when = new Date(cha.s_when);
		let s_when = formatDateShoes(when);

		let when_h = $("<h3 id='when_h' class='s_input_h'></h3>").text("출시일");
		let when_h_div = $("<div class='h_div'></div>").append(when_h);
		let when_i = $("<input id='when_i' class='s_input' maxlength='8' autocomplete='off' " + 
					"placeholder='출시일 / EX> 20210403' value='" + s_when + "' name='when'>");
		let when_i_div = $("<div id='when_i_div' class='s_i_div'></div>").append(when_i);
		let when_hi_div = $("<div class='hi_div'></div>").append(when_h_div, when_i_div);
		let when_div = $("<div id='when_div' class='shoes_div'></div>").append(when_hi_div);

		
		// s_keyword - nike/fashion/basketBall/jordan/jordan 1 retro high og black and lucky green/나이키/패션/농구/조던/검정색/흰색/인기/올해/쿠션/편안함/
		let key_h = $("<h3 id='key_h' class='s_input_h'></h3>").text("키워드");
		let key_h_div = $("<div class='h_div'></div>").append(key_h);
		let key_tA = $("<textarea id='key_tA' class='s_tA' maxlength='300' autocomplete='off' " + 
					"placeholder='Ex> nike/fashion/basketBall/jordan/jordan 1 retro high og black and lucky green/나이키/패션/농구/조던/검정색/흰색/인기/올해/쿠션/편안함/ ' " + 
					"name='s_keyword'></textarea>").text(cha.s_keyword);
		let key_tA_div = $("<div id='key_tA_div' class='s_tA_div'></div>").append(key_tA);
		let key_htA_div = $("<div class='hi_div'></div>").append(key_h_div, key_tA_div);
		let key_div = $("<div id='key_div' class='shoes_div'></div>").append(key_htA_div);

		
		// s_image 기존
		let ex_img_div = $("<div id='ex_img_div'></div>");
		let ex_imgs_div = $("<div class='ex_imgs_div'></div>");
		let ex_img_h = $("<h3 id='ex_img_h' class='ex_img_h'></h3>").text("기존 사진");
		let ex_img_i = $("<input name='s_image' value= '" + cha.s_image + "' type='hidden'>");
		ex_img_div.append(ex_img_h, ex_img_i);
		
		let ex = cha.s_image;
		let s_image = ex.includes(',') ? ex.split(',') : [ex];
		
		let ex_img;
		let ex_img_divs;
		for (let i = 0; i < s_image.length; i++) {
		  ex_img = $("<img src='" + imgPath + s_image[i] + "' />");
		  ex_img.attr("class", "ex_img")
		  ex_img_divs = $("<div id='ex_img_div_" + i + "' class='ex_img_div'></div>").append(ex_img);
		  ex_imgs_div.append(ex_img_divs);
		}
		ex_img_div.append(ex_imgs_div);
		
		// s_image 변경 
		let img_h = $("<h3 id='img_h' class='s_input_h'></h3>").text("사진 선택");
		let img_h_div = $("<div class='h_div'></div>").append(img_h);
		let img_pre_div = $("<div id='img_pre_div'></div>")
		let img_i = $("<input id='img_i' class='s_input' type='file' name='files' multiple='multiple' onchange='previewFiles()'>");
		let img_i_div = $("<div id='img_i_div' class='s_i_div'></div>").append(img_i);
		let img_hi_div = $("<div class='hi_div'></div>").append(img_h_div, img_pre_div, img_i_div);
		let img_info_div = $("<div id='img_info_div' class='img_info_div'></div>").text("EX> 1_0.png,1_1.png,1_2.png (320 * 320)");
		let img_div = $("<div id='img_div' class='shoes_div'></div>").append(img_hi_div, img_info_div);
		
		// submit 버튼
		let btn_i = $("<input id='btn_i' class='s_btn' type='submit' value='등록'>")
		let btn_div = $("<div id='btn_div' class='btn_div'></div>").append(btn_i);
		
		let form = $("<form action='shoes.change' method='post' " + 
					"enctype='multipart/form-data'></form>").append(title_h, no_div, brand_div, class_div, name_div, 
							price_div, color_div, when_div, key_div, ex_img_div, img_div, btn_div);
		let form_div = $("<div id='form_div'></div>").append(form);
		let change_div = $("<div id='change_div' class='s_change_div'></div>").append(form_div);
		// div 하나 더 추가할지 말지 고민해보기 ! -> 완	
		$("#cp_change_div").append(change_div);
	});
}

function registShoes() {
	let admin_h = $("<h2 class='l_admin_h'></h2>").text("관리자 권한 : ");
	let admin_a = $("<a href='shoes.regist' class='l_admin_a'></a>").text("등록하기");
	let admin_h_div = $("<div></div>").append(admin_h);
	let admin_a_div = $("<div></div>").append(admin_a);
	let admin_div = $("<div id='admin_div' class='l_admin_div'></div>").append(admin_h_div, admin_a_div);
	$("#adminDiv").append(admin_div);
}

function chgAndDelShoes(s_no) {
	$.getJSON("shoes.getDetailJSON?s_no=" + s_no, function(detail) {
		let admin_h = $("<h2 class='admin_h'></h2>").text("관리자 권한 : ");
		let admin_h_div = $("<div></div>").append(admin_h);
		
		let a_chg_s_no = $("<input name='s_no' value= " + s_no + " type='hidden'>");
		let a_chg_btn_i = $("<input id='a_chg_btn_i' class='admin_btn' type='submit' value='수정'>");
		let a_chg_div = $("<div id='a_chg_div'></div>").append(a_chg_s_no, a_chg_btn_i);
		
		let a_del_s_no = $("<input name='s_no' value= " + s_no + " type='hidden'>");
		let a_del_s_img = $("<input name='s_image' value= '" + detail.s_image + "' type='hidden'>");
		let a_del_btn_i = $("<input id='a_del_btn_i' class='admin_btn' type='submit' value='삭제'>");
		let a_del_div = $("<div id='a_del_div'></div>").append(a_del_s_no, a_del_s_img, a_del_btn_i);
		
		
		let c_form = $("<form action='shoes.changePage' method='post'></form>").append(a_chg_div);
		let c_form_div = $("<div id='c_form_div'></div>").append(c_form);
		
		let d_form = $("<form action='shoes.drop' method='post' onsubmit='return checkDelete();'></form>").append(a_del_div);
		let d_form_div = $("<div id='c_form_div'></div>").append(d_form);
		
		let admin_div = $("<div id='admin_div' class='admin_div'></div>").append(admin_h_div, c_form_div, d_form_div);
		$("#adminDiv").append(admin_div);
	});
}

function previewFiles() {
	let img_pre = $("#img_pre_div"); // #img_pre_div 요소를 jQuery를 이용해서 선택
	img_pre.empty(); // #img_pre_div 요소 삭제
	let files = $("#img_i").prop("files"); // #img_i 요소의 files 속성을 가져옴
	
	for (let i = 0; i < files.length; i++) { // files의 개수만큼 반복
	  (function(file) { // 즉시 실행 함수(IIFE)를 이용해서 file 변수를 인자로 전달
	    let reader = new FileReader(); // FileReader 객체를 생성
	
	    reader.onloadend = function() { // FileReader 객체의 onloadend 이벤트 리스너를 설정
	      let img = $("<img>"); // img 요소를 생성
	      img.attr("src", reader.result); // img 요소의 src 속성에 FileReader 객체의 result 값을 설정
	      img.attr("class", "img_l");
	      img_pre.append(img); // #preview 요소에 img 요소를 추가
	    }
	
	    reader.readAsDataURL(file); // FileReader 객체의 readAsDataURL 메서드를 이용해서 file 객체의 내용을 읽어들임
	  })(files[i]); // files[i]를 즉시 실행 함수의 인자로 전달
	}
}

function formatDateShoes(when) {
    let year = when.getFullYear();
    let month = ("0" + (when.getMonth() + 1)).slice(-2);
    let day = ("0" + when.getDate()).slice(-2);

    return year + month + day;
}

