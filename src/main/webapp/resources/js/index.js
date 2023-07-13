function getExchangeData() {
	$.getJSON("exchange.getJSON", function(ex_rate) {
		let sub_divs = [];
		$.each(ex_rate.exchangeRateItems, function(i, er) {
			let when = new Date(er.er_when);
			let er_when = formatDateEx(when);
			let when_text_div = $("<div class='text_div'></div>").text(er_when);
			let er_cur_nm_text_div = $("<div class='text_div'></div>").text(er.er_cur_nm);
			let er_kftc_deal_bas_r_text_div = $("<div class='text_div'></div>").text(er.er_kftc_deal_bas_r);
			let when_div = $("<div id='er_when' class='er_when_div'></div>").append(when_text_div);
			let er_cur_nm_div = $("<div id='" + er.er_cur_unit + "_cur_nm' class='er_data_div'></div>").append(er_cur_nm_text_div);
			let er_kftc_deal_bas_r_div = $("<div id='" + er.er_cur_unit + "_kftc' class='er_data_div'></div>").append(er_kftc_deal_bas_r_text_div);
			let sub_div = $("<div id='sub_div_" + i + "'></div>").append(er_cur_nm_div, er_kftc_deal_bas_r_div);
			getWhen(when_div);
			sub_divs.push(sub_div);
		});
		roulette(sub_divs);			
	});
}

function getWhen(when_div) {
	$("#ex_rate_when_div").empty();
	$("#ex_rate_when_div").append(when_div);
}

function roulette(sub_divs) {
    let index = 0;
    
    setInterval(function() {
    	$("#ex_rate_main_div").fadeOut(1000, function() {
    		$("#ex_rate_main_div").empty();
    		$("#ex_rate_main_div").append(sub_divs[index % sub_divs.length]).fadeIn(1000);
        });
        index++;
        if (index >= sub_divs.length) {
            index = 0;
        }
    }, 2000);
}

function formatDateEx(when) {
    let year = when.getFullYear();
    let month = ("0" + (when.getMonth() + 1)).slice(-2);
    let day = ("0" + when.getDate()).slice(-2);
    let hours = ("0" + when.getHours()).slice(-2);
    let minutes = ("0" + when.getMinutes()).slice(-2);
    
    let now = new Date();

    if (now.getDay() == 6) {
    	day -= 1;
		hours = "18";
		minutes = "00";
    } else if (now.getDay() == 0) {
		day -= 2;			
		hours = "18";
		minutes = "00";
    } else if (now.getDay() == 1 && (parseInt(hours) < 11 && parseInt(hours) >= 0)) {
    	day -= 3;
		hours = "18";
		minutes = "00";
    }
    
    if (parseInt(hours) >= 18 && parseInt(hours) < 24) {
		hours = "18";
		minutes = "00";
	} else if (parseInt(hours) < 11 && parseInt(hours) >= 0) {
		day -= 1;			
		hours = "18";
		minutes = "00";
	}
    
    day = ("0" + day).slice(-2);
    
    return year + "/" + month + "/" + day + " " + hours + ":" + minutes;
}

function logout() {
	let c = confirm("로그아웃하시겠습니까?");
	if (c) {
		location.href = "logout.go";
	}
}
