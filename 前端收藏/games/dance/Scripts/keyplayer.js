// JavaScript Document
var key=1;
	var code1=0;
	var code2=0;
	var code3=0;
	var code4=0;
	var code5=0;
	var code6=0;
	var code7=0;
	var code8=0;
	var code9=0;
	var lever=5000;
	var game; 
	var next;
	var g = 0;
	var mark;
	var red=["images/trueup.gif","images/trueright.gif","images/trueleft.gif","images/truedown.gif"];
			var yel=["images/falseup.gif","images/falseright.gif","images/falseleft.gif","images/falsedown.gif"];
			$(document).ready(function () {
			    $('#lever').val(lever);
			    $(window).keydown(function (event) {

			        switch (key) {
			            case 1:
			                if (event.keyCode == 73 || event.keyCode == 76 || event.keyCode == 74 || event.keyCode == 75) {
			                    if (event.keyCode == code1) {
			                        switch (code1) {
			                            case 73:
			                                $("#im1").attr("src", red[0]);
			                                break;
			                            case 76:
			                                $("#im1").attr("src", red[1]);
			                                break;
			                            case 74:
			                                $("#im1").attr("src", red[2]);
			                                break;
			                            case 75:
			                                $("#im1").attr("src", red[3]);
			                                break;
			                            default:
			                                break;
			                        }
			                        $("#show").attr("src", "images/偶来了.gif");
			                        mark++;
			                        $('#time').html(mark + '分');
			                    }
			                    else {
			                        switch (code1) {
			                            case 73:
			                                $("#im1").attr("src", yel[0]);
			                                break;
			                            case 76:
			                                $("#im1").attr("src", yel[1]);
			                                break;
			                            case 74:
			                                $("#im1").attr("src", yel[2]);
			                                break;
			                            case 75:
			                                $("#im1").attr("src", yel[3]);
			                                break;
			                            default:
			                                break;
			                        }
			                        $("body").append("<img src='images/笨蛋.gif' class='ben' />"); //("src", "images/笨蛋.gif");
			                    }
			                    key++;
			                }
			                break;
			            case 2:
			                if (event.keyCode == 73 || event.keyCode == 76 || event.keyCode == 74 || event.keyCode == 75) {
			                    if (event.keyCode == code2) {
			                        switch (code2) {
			                            case 73:
			                                $("#im2").attr("src", red[0]);
			                                break;
			                            case 76:
			                                $("#im2").attr("src", red[1]);
			                                break;
			                            case 74:
			                                $("#im2").attr("src", red[2]);
			                                break;
			                            case 75:
			                                $("#im2").attr("src", red[3]);
			                                break;
			                            default:
			                                break;
			                        }
			                        $("#show").attr("src", "images/偶来了.gif");
			                        mark++;
			                        $('#time').html(mark + '分');
			                    }
			                    else {
			                        switch (code2) {
			                            case 73:
			                                $("#im2").attr("src", yel[0]);
			                                break;
			                            case 76:
			                                $("#im2").attr("src", yel[1]);
			                                break;
			                            case 74:
			                                $("#im2").attr("src", yel[2]);
			                                break;
			                            case 75:
			                                $("#im2").attr("src", yel[3]);
			                                break;
			                            default:
			                                break;
			                        }
			                        $("body").append("<img src='images/笨蛋.gif' class='ben' />");
			                    }
			                    key++;
			                }
			                break;
			            case 3:
			                if (event.keyCode == 73 || event.keyCode == 76 || event.keyCode == 74 || event.keyCode == 75) {
			                    if (event.keyCode == code3) {
			                        switch (code3) {
			                            case 73:
			                                $("#im3").attr("src", red[0]);
			                                break;
			                            case 76:
			                                $("#im3").attr("src", red[1]);
			                                break;
			                            case 74:
			                                $("#im3").attr("src", red[2]);
			                                break;
			                            case 75:
			                                $("#im3").attr("src", red[3]);
			                                break;
			                            default:
			                                break;
			                        }
			                        $("#show").attr("src", "images/偶来了.gif");
			                        mark++;
			                        $('#time').html(mark + '分');
			                    }
			                    else {
			                        switch (code3) {
			                            case 73:
			                                $("#im3").attr("src", yel[0]);
			                                break;
			                            case 76:
			                                $("#im3").attr("src", yel[1]);
			                                break;
			                            case 74:
			                                $("#im3").attr("src", yel[2]);
			                                break;
			                            case 75:
			                                $("#im3").attr("src", yel[3]);
			                                break;
			                            default:
			                                break;
			                        }
			                        $("body").append("<img src='images/笨蛋.gif' class='ben' />");
			                    }
			                    key++;
			                }
			                break;
			            case 4:
			                if (event.keyCode == 73 || event.keyCode == 76 || event.keyCode == 74 || event.keyCode == 75) {
			                    if (event.keyCode == code4) {
			                        switch (code4) {
			                            case 73:
			                                $("#im4").attr("src", red[0]);
			                                break;
			                            case 76:
			                                $("#im4").attr("src", red[1]);
			                                break;
			                            case 74:
			                                $("#im4").attr("src", red[2]);
			                                break;
			                            case 75:
			                                $("#im4").attr("src", red[3]);
			                                break;
			                            default:
			                                break;
			                        }
			                        $("#show").attr("src", "images/偶来了.gif");
			                        mark++;
			                        $('#time').html(mark + '分');
			                    }
			                    else {
			                        switch (code4) {
			                            case 73:
			                                $("#im4").attr("src", yel[0]);
			                                break;
			                            case 76:
			                                $("#im4").attr("src", yel[1]);
			                                break;
			                            case 74:
			                                $("#im4").attr("src", yel[2]);
			                                break;
			                            case 75:
			                                $("#im4").attr("src", yel[3]);
			                                break;
			                            default:
			                                break;
			                        }
			                        $("body").append("<img src='images/笨蛋.gif' class='ben' />");
			                    }
			                    key++;
			                }
			                break;
			            case 5:
			                if (event.keyCode == 73 || event.keyCode == 76 || event.keyCode == 74 || event.keyCode == 75) {
			                    if (event.keyCode == code5) {
			                        switch (code5) {
			                            case 73:
			                                $("#im5").attr("src", red[0]);
			                                break;
			                            case 76:
			                                $("#im5").attr("src", red[1]);
			                                break;
			                            case 74:
			                                $("#im5").attr("src", red[2]);
			                                break;
			                            case 75:
			                                $("#im5").attr("src", red[3]);
			                                break;
			                            default:
			                                break;
			                        }
			                        $("#show").attr("src", "images/偶来了.gif");
			                        mark++;
			                        $('#time').html(mark + '分');
			                    }
			                    else {
			                        switch (code5) {
			                            case 73:
			                                $("#im5").attr("src", yel[0]);
			                                break;
			                            case 76:
			                                $("#im5").attr("src", yel[1]);
			                                break;
			                            case 74:
			                                $("#im5").attr("src", yel[2]);
			                                break;
			                            case 75:
			                                $("#im5").attr("src", yel[3]);
			                                break;
			                            default:
			                                break;
			                        }
			                        $("body").append("<img src='images/笨蛋.gif' class='ben' />");
			                    }
			                    key++;
			                }
			                break;
			            case 6:
			                if (event.keyCode == 73 || event.keyCode == 76 || event.keyCode == 74 || event.keyCode == 75) {
			                    if (event.keyCode == code6) {
			                        switch (code6) {
			                            case 73:
			                                $("#im6").attr("src", red[0]);
			                                break;
			                            case 76:
			                                $("#im6").attr("src", red[1]);
			                                break;
			                            case 74:
			                                $("#im6").attr("src", red[2]);
			                                break;
			                            case 75:
			                                $("#im6").attr("src", red[3]);
			                                break;
			                            default:
			                                break;
			                        }
			                        $("#show").attr("src", "images/偶来了.gif");
			                        mark++;
			                        $('#time').html(mark + '分');
			                    }
			                    else {
			                        switch (code6) {
			                            case 73:
			                                $("#im6").attr("src", yel[0]);
			                                break;
			                            case 76:
			                                $("#im6").attr("src", yel[1]);
			                                break;
			                            case 74:
			                                $("#im6").attr("src", yel[2]);
			                                break;
			                            case 75:
			                                $("#im6").attr("src", yel[3]);
			                                break;
			                            default:
			                                break;
			                        }
			                        $("body").append("<img src='images/笨蛋.gif' class='ben' />");
			                    }
			                    key++;
			                }
			                break;
			            case 7:
			                if (event.keyCode == 73 || event.keyCode == 76 || event.keyCode == 74 || event.keyCode == 75) {
			                    if (event.keyCode == code7) {
			                        switch (code7) {
			                            case 73:
			                                $("#im7").attr("src", red[0]);
			                                break;
			                            case 76:
			                                $("#im7").attr("src", red[1]);
			                                break;
			                            case 74:
			                                $("#im7").attr("src", red[2]);
			                                break;
			                            case 75:
			                                $("#im7").attr("src", red[3]);
			                                break;
			                            default:
			                                break;
			                        }
			                        $("#show").attr("src", "images/偶来了.gif");
			                        mark++;
			                        $('#time').html(mark + '分');
			                    }
			                    else {
			                        switch (code7) {
			                            case 73:
			                                $("#im7").attr("src", yel[0]);
			                                break;
			                            case 76:
			                                $("#im7").attr("src", yel[1]);
			                                break;
			                            case 74:
			                                $("#im7").attr("src", yel[2]);
			                                break;
			                            case 75:
			                                $("#im7").attr("src", yel[3]);
			                                break;
			                            default:
			                                break;
			                        }
			                        $("body").append("<img src='images/笨蛋.gif' class='ben' />");
			                    }
			                    key++;
			                }
			                break;
			            case 8:
			                if (event.keyCode == 73 || event.keyCode == 76 || event.keyCode == 74 || event.keyCode == 75) {
			                    if (event.keyCode == code8) {
			                        switch (code8) {
			                            case 73:
			                                $("#im8").attr("src", red[0]);
			                                break;
			                            case 76:
			                                $("#im8").attr("src", red[1]);
			                                break;
			                            case 74:
			                                $("#im8").attr("src", red[2]);
			                                break;
			                            case 75:
			                                $("#im8").attr("src", red[3]);
			                                break;
			                            default:
			                                break;
			                        }
			                        $("#show").attr("src", "images/偶来了.gif");
			                        mark++;
			                        $('#time').html(mark + '分');
			                    }
			                    else {
			                        switch (code8) {
			                            case 73:
			                                $("#im8").attr("src", yel[0]);
			                                break;
			                            case 76:
			                                $("#im8").attr("src", yel[1]);
			                                break;
			                            case 74:
			                                $("#im8").attr("src", yel[2]);
			                                break;
			                            case 75:
			                                $("#im8").attr("src", yel[3]);
			                                break;
			                            default:
			                                break;
			                        }
			                        $("body").append("<img src='images/笨蛋.gif' class='ben' />");
			                    }
			                    key++;
			                }
			                break;
			            case 9:
			                if (event.keyCode == 73 || event.keyCode == 76 || event.keyCode == 74 || event.keyCode == 75) {
			                    if (event.keyCode == code9) {
			                        switch (code9) {
			                            case 73:
			                                $("#im9").attr("src", red[0]);
			                                break;
			                            case 76:
			                                $("#im9").attr("src", red[1]);
			                                break;
			                            case 74:
			                                $("#im9").attr("src", red[2]);
			                                break;
			                            case 75:
			                                $("#im9").attr("src", red[3]);
			                                break;
			                            default:
			                                break;
			                        }
			                        $("#show").attr("src", "images/偶来了.gif");
			                        mark++;
			                        $('#time').html(mark+'分');
			                    }
			                    else {
			                        switch (code9) {
			                            case 73:
			                                $("#im9").attr("src", yel[0]);
			                                break;
			                            case 76:
			                                $("#im9").attr("src", yel[1]);
			                                break;
			                            case 74:
			                                $("#im9").attr("src", yel[2]);
			                                break;
			                            case 75:
			                                $("#im9").attr("src", yel[3]);
			                                break;
			                            default:
			                                break;
			                        }
			                        $("body").append("<img src='images/笨蛋.gif' class='ben' />");
			                    }
			                    key = 0;
			                }
			                break;
			            default:
			                break;
			        }
			    });


			    $('#fast').click(function () {
			        if (lever > 1000) {
			            lever = lever - 1000;
			            $('#lever').val(lever);
			        }
			    });
			    $('#slow').click(function () {
			        if (lever <= 15000) {
			            lever = lever + 1000;
			            $('#lever').val(lever);
			        }
			    });
			    $('#begin').click(function () {
			        begingame();
			    });
			    $('#end').click(function () {
			        clearInterval(game);
			        //clearInterval(next);
			        $('#tishi').html('');
			        $('#time').html("");
			        $("#show").attr("src", "images/晕.gif");
			        stopP();
			        g = 0;
			        $('.ben').remove();
			    });

			});
function begingame()
{
    mark = 0;
    game = setInterval(function () {
        var img = new Array();
        img = ["images/waitup.gif", "images/waitright.gif", "images/waitleft.gif", "images/waitdown.gif"];
        if (g == 0) {
            var t = lever;
            /*next=setInterval(function(){
            t=t-1;
            $('#time').html(t);
            if(t<1){
            $('#time').html("next lever！！");
            t=lever;
            }
            },1);*/
            display(lever / 10);
        }
        key = 1;
        g = 1;
        
        $('#tishi').html('J,K,L,I代表上下左右GO!!!!!!!!!!!!');
        switch (Math.ceil(Math.random() * 4)) {
            case 1:
                $("#im1").attr("src", img[0]);
                code1 = 73;
                break;
            case 2:
                $("#im1").attr("src", img[1]);
                code1 = 76;
                break;
            case 3:
                $("#im1").attr("src", img[2]);
                code1 = 74;
                break;
            case 4:
                $("#im1").attr("src", img[3]);
                code1 = 75;
                break;
            default:
                break;
        }
        switch (Math.ceil(Math.random() * 4)) {
            case 1:
                $("#im2").attr("src", img[0]);
                code2 = 73;
                break;
            case 2:
                $("#im2").attr("src", img[1]);
                code2 = 76;
                break;
            case 3:
                $("#im2").attr("src", img[2]);
                code2 = 74;
                break;
            case 4:
                $("#im2").attr("src", img[3]);
                code2 = 75;
                break;
            default:
                break;
        }
        switch (Math.ceil(Math.random() * 4)) {
            case 1:
                $("#im3").attr("src", img[0]);
                code3 = 73;
                break;
            case 2:
                $("#im3").attr("src", img[1]);
                code3 = 76;
                break;
            case 3:
                $("#im3").attr("src", img[2]);
                code3 = 74;
                break;
            case 4:
                $("#im3").attr("src", img[3]);
                code3 = 75;
                break;
            default:
                break;
        }
        switch (Math.ceil(Math.random() * 4)) {
            case 1:
                $("#im4").attr("src", img[0]);
                code4 = 73;
                break;
            case 2:
                $("#im4").attr("src", img[1]);
                code4 = 76;
                break;
            case 3:
                $("#im4").attr("src", img[2]);
                code4 = 74;
                break;
            case 4:
                $("#im4").attr("src", img[3]);
                code4 = 75;
                break;
            default:
                break;
        }
        switch (Math.ceil(Math.random() * 4)) {
            case 1:
                $("#im5").attr("src", img[0]);
                code5 = 73;
                break;
            case 2:
                $("#im5").attr("src", img[1]);
                code5 = 76;
                break;
            case 3:
                $("#im5").attr("src", img[2]);
                code5 = 74;
                break;
            case 4:
                $("#im5").attr("src", img[3]);
                code5 = 75;
                break;
            default:
                break;
        }
        switch (Math.ceil(Math.random() * 4)) {
            case 1:
                $("#im6").attr("src", img[0]);
                code6 = 73;
                break;
            case 2:
                $("#im6").attr("src", img[1]);
                code6 = 76;
                break;
            case 3:
                $("#im6").attr("src", img[2]);
                code6 = 74;
                break;
            case 4:
                $("#im6").attr("src", img[3]);
                code6 = 75;
                break;
            default:
                break;
        }
        switch (Math.ceil(Math.random() * 4)) {
            case 1:
                $("#im7").attr("src", img[0]);
                code7 = 73;
                break;
            case 2:
                $("#im7").attr("src", img[1]);
                code7 = 76;
                break;
            case 3:
                $("#im7").attr("src", img[2]);
                code7 = 74;
                break;
            case 4:
                $("#im7").attr("src", img[3]);
                code7 = 75;
                break;
            default:
                break;
        }
        switch (Math.ceil(Math.random() * 4)) {
            case 1:
                $("#im8").attr("src", img[0]);
                code8 = 73;
                break;
            case 2:
                $("#im8").attr("src", img[1]);
                code8 = 76;
                break;
            case 3:
                $("#im8").attr("src", img[2]);
                code8 = 74;
                break;
            case 4:
                $("#im8").attr("src", img[3]);
                code8 = 75;
                break;
            default:
                break;
        }
        switch (Math.ceil(Math.random() * 4)) {
            case 1:
                $("#im9").attr("src", img[0]);
                code9 = 73;
                break;
            case 2:
                $("#im9").attr("src", img[1]);
                code9 = 76;
                break;
            case 3:
                $("#im9").attr("src", img[2]);
                code9 = 74;
                break;
            case 4:
                $("#im9").attr("src", img[3]);
                code9 = 75;
                break;
            default:
                break;
        }
    }, lever);
	}
	
	var already = 0;
  var allsta = 0;
  var timer;
  function display(max){
     already++;
     var dispObj = document.all.load_progress;
     dispObj.style.width = 100.0*already/max+"%";
    
     timer = window.setTimeout("display("+max+")",10);
     if (already >= max){
        already =0;
	
     }
  }
  function stopP()
  {
	window.clearTimeout(timer); 
	 var dispObj = document.all.load_progress;
     dispObj.style.width = 0;

  }
  