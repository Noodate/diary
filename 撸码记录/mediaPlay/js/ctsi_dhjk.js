function video_play(data) {
	console.log(data)
	$(".pop").show();
	if (data.name != undefined) {
		var src = data.name;
	} else {
		var src = data.src;
	}
	$(".pop .video-view").attr("src", src);
	$(".pop-bg").fadeIn("fast");
}

function hidevideoplay() {
	$(".pop").hide();
	$(".pop .video-view").trigger('pause')
	$(".pop-bg").fadeOut("fast");
}


// 图片放大函数
function img_play(data) {
    console.log(data)
    $(".pop2").show();
    if (data.name != undefined) {
    	var src = data.name;
    } else {
    	var src = data.src;
    }
    $(".pop2 .image-view").attr("src", src);
    $(".pop-bg2").fadeIn("fast");
}

function hideImg() {
	$(".pop2").hide();
	$(".pop2 .image-view").trigger('pause')
	$(".pop-bg2").fadeOut("fast");
}
