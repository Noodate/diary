function translates(sc) {
	var from;
	var to;
	console.log(sc.value);
	var p = /[a-z]/i; 
	if(p.test(sc.value)){
		from = 'en';
		to = 'zh';
	}else{
		from = 'zh';
		to = 'en';
	}
	var appid = '20191107000353921';
	var key = 'tqRp3gt2TCiSPQ1D35wz';
	var salt = (new Date).getTime();
	var query = sc.value;
	// 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
	var str1 = appid + query + salt + key;
	var sign = MD5(str1);
	$.ajax({
		url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
		type: 'get',
		dataType: 'jsonp',
		data: {
			q: query,
			appid: appid,
			salt: salt,
			from: from,
			to: to,
			sign: sign
		},
		success: function(data) {
			$("#contactMessageTextarea").val(data.trans_result[0].dst);
		}
	});
	
}

function tt(){
	var fromSpan=$('#fromInput').val();
	var from;
	var to;
	console.log(fromSpan);
	var p = /[a-z]/i; 
	if(p.test(fromSpan)){
		from = 'en';
		to = 'zh';
	}else{
		from = 'zh';
		to = 'en';
	}
	var appid = '20191107000353921';
	var key = 'tqRp3gt2TCiSPQ1D35wz';
	var salt = (new Date).getTime();
	var query = fromSpan;
	// 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
	var str1 = appid + query + salt + key;
	var sign = MD5(str1);
	$.ajax({
		url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
		type: 'get',
		dataType: 'jsonp',
		data: {
			q: query,
			appid: appid,
			salt: salt,
			from: from,
			to: to,
			sign: sign
		},
		success: function(data) {
			$("#contactMessageTextarea").val(data.trans_result[0].dst);
		}
	});
}