function getDetailShoes(s_no, imgPath) {
	$.getJSON("shoes.getDetailJSON?s_no=" + s_no, function(detail) {
		let img = detail.s_image;
		let s_image = img.includes(',') ? img.split(',') : [img];
		
		let s_img;
		let s_img_div;
		let s_img_bxslider_div = $("<div class='d_s_img_bxslider_div'></div>");
		for (let i = 0; i < s_image.length; i++) {
		  s_img = $("<img class='d_s_img' src='" + imgPath + s_image[i] + "' />");
		  s_img_div = $("<div class='d_s_img_div'></div>").append(s_img);
		  s_img_bxslider_div.append(s_img_div);
		}
		
		let s_img_bxslider_div_frame = $("<div class='d_s_img_bxslider_div_frame'></div>").append(s_img_bxslider_div);

		let s_brand = $("<div class='d_s_brand'></div>").text(detail.s_brand);
		let s_brand_div = $("<div class='d_s_brand_div'></div>").append(s_brand);
		
		let s_name = $("<div class='d_s_name'></div>").text(detail.s_name);
		let s_name_div = $("<div class='d_s_name_div'></div>").append(s_name);
		let google = 'https://www.google.com/search?q=';
		let s_name_a = $("<a class='d_s_name_a' href='" + google + detail.s_name + "' target='_blank'></a>").text("구글 검색");
		let s_name_a_div = $("<div class='d_s_name_a_div'></div>").append(s_name_a);
		
		let s_name_inline_div = $("<div class='d_s_name_inline_div'></div>").append(s_name_div, s_name_a_div);
		
		let s_price_text = $("<div class='d_s_price_text'></div>").text("출시가");
		let s_price_text_div = $("<div class='d_s_price_text_div'></div>").append(s_price_text);
		
		let formatted_price = (detail.s_price).toLocaleString('ko-KR') + "원";
		let s_price = $("<div class='d_s_price'></div>").text(formatted_price);
		let s_price_div = $("<div class='d_s_price_div'></div>").append(s_price);

		let s_price_inline_div = $("<div class='d_s_price_inline_div'></div>").append(s_price_text_div, s_price_div);
		
		let s_color_text = $("<div class='d_s_color_text'></div>").text("색상");
		let s_color_text_div = $("<div class='d_s_color_text_div'></div>").append(s_color_text);
		
		let s_color = $("<div class='d_s_color'></div>").text(detail.s_color);
		let s_color_div = $("<div class='d_s_color_div'></div>").append(s_color);
		
		let s_color_inline_div = $("<div class='d_s_color_inline_div'></div>").append(s_color_text_div, s_color_div);
		
		let s_when_text = $("<div class='d_s_when_text'></div>").text("출시일");
		let s_when_text_div = $("<div class='d_s_when_text_div'></div>").append(s_when_text);
		
		let when = new Date(detail.s_when);
		let when_text = formatDateShoes(when);
		let s_when = $("<div class='d_s_when'></div>").text(when_text);
		let s_when_div = $("<div class='d_s_when_div'></div>").append(s_when);
		
		let s_when_inline_div = $("<div class='d_s_when_inline_div'></div>").append(s_when_text_div, s_when_div);
		
		let border_div = $("<div class='border_div'></div>").append(s_price_inline_div, s_color_inline_div, s_when_inline_div);
		
		let detail_shoes_img_div_frame = $("<div class='detail_shoes_img_div_frame'></div>").append(s_img_bxslider_div_frame);
		let detail_shoes_text_div_frame = $("<div class='detail_shoes_text_div_frame'></div>").append(s_brand_div, s_name_inline_div, border_div);
		let detail_shoes_div_frame = $("<div class='detail_shoes_div_frame'></div>").append(detail_shoes_img_div_frame, detail_shoes_text_div_frame);
		$("#shoesDetail").append(detail_shoes_div_frame);
		
        $('.d_s_img_bxslider_div').bxSlider({
			mode: 'fade',
			controls: false,
			minSlides: 1,
			maxSlides: 1,
			slideWidth: 320
        });
	});
}

	
	