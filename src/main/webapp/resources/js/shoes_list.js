function getData(s_keyword, imgPath) {
	$.getJSON("shoes.getSearchJSON?s_keyword=" + s_keyword, function(search) {
		$("#cp_shoes_list_div").empty();
		$.each(search.shoes, function(i, s) {
			let s_img = $("<img src='" + imgPath + s.s_no + "_0.png' />");
			let s_img_div = $("<div class='s_img_div'></div>").append(s_img);
			let s_no_div = $("<div class='s_no_div'></div>").append(s_img_div);
			
			let s_brand = $("<div class='s_brand'></div>").text(s.s_brand);
			let s_brand_div = $("<div class='s_brand_div'></div>").append(s_brand);
			
			let s_name = $("<div class='s_name'></div>").text(s.s_name);
			let s_name_div = $("<div class='s_name_div'></div>").append(s_name);
			
			let formatted_price = (s.s_price).toLocaleString('ko-KR') + "원";
			let s_price = $("<div class='s_price'></div>").text(formatted_price);
			let s_price_div = $("<div class='s_price_div'></div>").append(s_price);
			
			let s_price_text = $("<div class='s_price_text'></div>").text("출시가");
			let s_price_text_div = $("<div id='s_price_text_div'></div>").append(s_price_text);
			
			let shoes_div = $("<div id='shoesDiv' class='shoes_list_div' " + 
					"onclick='goShoesDetail(" + s.s_no +");'></div>").append(s_no_div, s_brand_div, s_name_div, s_price_div, s_price_text_div);
			let shoes_div_frame = $("<div class='shoes_list_div_frame'></div>").append(shoes_div);
			$("#cp_shoes_list_div").append(shoes_div_frame);
		});
	});
}


function getSearchData(imgPath) {
	$("#search_btn").click(function() {
		let keyword = $("#search").val();
		// 인풋값에 있는 검색 키워드를 받아서 JSON 파라미터로 요청
		$.getJSON("shoes.getSearchJSON?s_keyword=" + keyword, function(search) {
			$("#cp_shoes_list_div").empty();
			$.each(search.shoes, function(i, s) {
				let img = s.s_image;
				let s_image = img.includes(',') ? img.split(',') : [img];
				
				let s_img = $("<img src='" + imgPath + s_image[0] + "' />");;
				let s_img_div = $("<div class='s_img_div'></div>").append(s_img);
				let s_no_div = $("<div class='s_no_div'></div>").append(s_img_div);
				
				let s_brand = $("<div class='s_brand'></div>").text(s.s_brand);
				let s_brand_div = $("<div class='s_brand_div'></div>").append(s_brand);
				
				let s_name = $("<div class='s_name'></div>").text(s.s_name);
				let s_name_div = $("<div class='s_name_div'></div>").append(s_name);
				
				let formatted_price = (s.s_price).toLocaleString('ko-KR') + "원";
				let s_price = $("<div class='s_price'></div>").text(formatted_price);
				let s_price_div = $("<div class='s_price_div'></div>").append(s_price);
				
				let s_price_text = $("<div class='s_price_text'></div>").text("출시가");
				let s_price_text_div = $("<div id='s_price_text_div'></div>").append(s_price_text);
				
				let shoes_div = $("<div id='shoesDiv' class='shoes_list_div' " + 
						"onclick='goShoesDetail(" + s.s_no +");'></div>").append(s_no_div, s_brand_div, s_name_div, s_price_div, s_price_text_div);
				let shoes_div_frame = $("<div class='shoes_list_div_frame'></div>").append(shoes_div);
				$("#cp_shoes_list_div").append(shoes_div_frame);
			});
		});
	});
	
	$("#search").keyup(function(enter) {
		$("#search_btn").trigger("click");
	});
}

function getClassData(s_class, imgPath) {
		$.getJSON("shoes.getShoesJSON?s_class=" + s_class, function(test) {
		$.each(test.shoes, function(i, s) {
			let img = s.s_image;
			let s_image = img.includes(',') ? img.split(',') : [img];
			
			let s_img = $("<img src='" + imgPath + s_image[0] + "' />");
			let s_img_div = $("<div class='s_img_div'></div>").append(s_img);
			let s_no_div = $("<div class='s_no_div'></div>").append(s_img_div);
			
			let s_brand = $("<div class='s_brand'></div>").text(s.s_brand);
			let s_brand_div = $("<div class='s_brand_div'></div>").append(s_brand);
			
			let s_name = $("<div class='s_name'></div>").text(s.s_name);
			let s_name_div = $("<div class='s_name_div'></div>").append(s_name);
			
			let formatted_price = (s.s_price).toLocaleString('ko-KR') + "원";
			let s_price = $("<div class='s_price'></div>").text(formatted_price);
			let s_price_div = $("<div class='s_price_div'></div>").append(s_price);
			
			let s_price_text = $("<div class='s_price_text'></div>").text("출시가");
			let s_price_text_div = $("<div id='s_price_text_div'></div>").append(s_price_text);
			
			let shoes_div = $("<div id='shoesDiv' class='shoes_list_div' " + 
					"onclick='goShoesDetail(" + s.s_no +");'></div>").append(s_no_div, s_brand_div, s_name_div, s_price_div, s_price_text_div);
			let shoes_div_frame = $("<div class='shoes_list_div_frame'></div>").append(shoes_div);
			$("#cp_shoes_list_div").append(shoes_div_frame);			
		});
	});
}


function goShoesDetail(s_no) {
	location.href = "shoes.getShoesDetail?s_no=" + s_no;
}



