function registBoard(s_no, token) {
	let s_no_i = $("<input name='b_s_no' value= " + s_no + " type='hidden'>");
	let s_no_div = $("<div></div>").append(s_no_i);
	
	let token_i = $("<input name='token' value='" + token + "' type='hidden'>");
	let token_div = $("<div></div>").append(token_i);

	let b_text_tA = $("<textarea id='b_text_tA' class='r_b_text_tA' maxlength='200' autocomplete='off' " + 
				"placeholder='200자 내외로 작성하세요.' name='b_text'></textarea>");
	let b_text_div = $("<div id='b_text_div' class='r_b_text_div'></div>").append(b_text_tA);

	let btn_i = $("<input id='btn_i' class='r_btn_i' type='submit' value='등록'>")
	let btn_div = $("<div id='btn_div' class='r_btn_div'></div>").append(btn_i);

	let border_div_frame = $("<div class='r_border_div_frame'></div>").append(s_no_div, 
			token_div, b_text_div, btn_div);
	
	let form = $("<form action='board.regist' method='post'></form>").append(border_div_frame);
	let form_div = $("<div id='form_div' class='r_b_form_div'></div>").append(form);
	let board_reg_div = $("<div id='board_reg_div' class='board_reg_div'></div>").append(form_div);
	$("#boardRegist").append(board_reg_div);
}

function getBoardPage(s_no, p_no, m_id, token) {
	$("#getBoard").empty();
	$.getJSON("board.JSON?b_s_no=" + s_no + "&p_no=" + p_no, function(board) {
		$.each(board.boards, function(i, b) {
			let id_info_t_div = $("<div class='b_id_info_t_div'></div>").text("떠든사람");
			let id_info_div = $("<div class='b_id_info_div'></div>").append(id_info_t_div);
			
			let id_t_div = $("<div id='id_t_div' class='b_id_t_div'></div>").text(b.b_writer);
			let id_div = $("<div id='id_div' class='b_id_idv'></div>").append(id_t_div);

			let id_all_div = $("<div class='b_id_all_div'></div>").append(id_info_div, id_div);
			
			let when = new Date(b.b_when);
			let b_when = formatDateBoard(when);
			
			let time_info_t_div = $("<div class='b_time_info_t_div'></div>").text("작성일자");
			let time_info_div = $("<div class='b_time_info_div'></div>").append(time_info_t_div);
			
			let time_t_div = $("<div id='time_t_div' class='b_time_t_div'></div>").text(b_when);
			let time_div = $("<div id='time_div' class='b_time_div'></div>").append(time_t_div);
			
			let time_all_div = $("<div class='b_time_all_div'></div>").append(time_info_div, time_div);
			
			let id_time_inline_div = $("<div class='id_time_inline_div'></div>").append(id_all_div, time_all_div);
			
			
			let replacedText = b.b_text.replace(/<br>/g, '\r\n');
			let text_tA = $("<textarea class='b_text_tA' readonly='readonly'></textarea>").html(replacedText);
			let text_tA_div = $("<div id='text_t_div' class='b_text_tA_div'></div>").append(text_tA);
			let text_div = $("<div id='text_div_" + i + "' class='b_text_div'></div>").append(text_tA_div);
			
			let board_div = $("<div id='board_div' class='b_board_div'></div>").append(id_time_inline_div, text_div);
			let board_div_frame = $("<div id='board_div_frame' class='b_board_div_frame'></div>").append(board_div);
			$("#getBoard").append(board_div_frame);
			
			if (b.b_writer === m_id || m_id === 'admin') {
				let cha_btn_i = $("<input id='cha_btn_i' class='cha_btn_i' type='submit' " + 
							"onclick='showChangeDiv(" + i + ", " + b.b_no + ", \"" + b.b_text + "\", " + s_no + ", \"" + token + "\");' value='수정'>");
				let cha_div = $("<div id='cha_div_" + i + "'></div>").append(cha_btn_i);
				
				let del_b_no = $("<input name='b_no' value= " + b.b_no + " type='hidden'>");
				let del_s_no = $("<input name='b_s_no' value= " + s_no + " type='hidden'>");
				let del_btn_i = $("<input id='del_btn_i' class='del_btn_i' type='submit' value='삭제'>")
				let del_btn_div = $("<div id='del_btn_div' class='b_del_btn_div'></div>").append(del_b_no, del_s_no, del_btn_i);
				
				let form = $("<form action='board.drop' method='post' onsubmit='return checkDelete();'></form>").append(del_btn_div);
				let form_div = $("<div id='form_div'></div>").append(form);
				let btn_div = $("<div id='ctrl_div' class='b_ctrl_div'></div>").append(cha_div, form_div);
				
				board_div_frame.append(btn_div);
			}
		});		
	});
}

function formatDateBoard(when) {
    let year = when.getFullYear();
    let month = ("0" + (when.getMonth() + 1)).slice(-2);
    let day = ("0" + when.getDate()).slice(-2);
    let hours = ("0" + when.getHours()).slice(-2);
    let minutes = ("0" + when.getMinutes()).slice(-2);
    
    return year + "/" + month + "/" + day + " " + hours + ":" + minutes;
}

function checkDelete() {
	let c = confirm("삭제하시겠습니까?");
	if (c) {
		return true;
	}
	return false;
}

//board 수정할 때 원래 있던 내용을 파라미터로 넘겨서 textArea 만드는 함수
function showChangeDiv(i, b_no, text, s_no, token) {
	let replacedText = text.replace(/<br>/g, '\r\n');
	$("#text_div_" + i).empty();
		let promptDiv = document.createElement("div");
	promptDiv.innerHTML = 
		'<form action="board.change" method="post">' + 
		'<div class="c_all_div">' + 
		'<div class="c_all_input_div">' +
		'<input name="b_no" value= ' + b_no + ' type="hidden">' + 
		'<input name="b_s_no" value= ' + s_no + ' type="hidden">' + 
		'<input name="token" value="' + token + '" type="hidden">' + 
		'<div class="c_b_text_tA_div"><textarea class="c_b_text_tA" name="b_text">' + replacedText + '</textarea></div> ' + 
		'</div>' + 
		'<div class="c_btn_div">' + 
		'<button id="boardChangeBtn" class="c_btn_i">수정</button>' +
		'</div>' +
		'</div>' + 
		'</form>';
	$("#cha_div_" + i).css("visibility", "hidden");
	document.getElementById("text_div_" + i).appendChild(promptDiv);
	// div 속성을 id가 아닌 class로 지정했을 때 밑의 코드로 수정하기
	// document.querySelector(".prompt-container").appendChild(promptDiv);
}

