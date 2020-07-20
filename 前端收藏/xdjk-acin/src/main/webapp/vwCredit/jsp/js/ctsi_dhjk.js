function openUserMainWin() {
    $('.person_box').hide();
    window.open ("../table/userMain.html","","width=800,height=600,top=200px,left=600px, toolbar =no, menubar=no, scrollbars=yes, resizable=no, location=no, status=no");
}
function openRoleEditWin() {
    $('.person_box').hide();
    window.open ("../table/roleMain.html","","width=800,height=600,top=200px,left=600px, toolbar =no, menubar=no, scrollbars=yes, resizable=no, location=no, status=no");
}
function changeEditFile(data) {
    var spanid="#cinFileId"+data;
    var inputid="#cinInputId"+data;
    $(spanid).hide();
    $(inputid).show();
}
function updateCinFile(data) {
    var spanid="#cinFileId"+data;
    var inputid="#cinInputId"+data;
    $(spanid).show();
    $(inputid).hide();
    var params = {"oldName":$(spanid).html(),"newName":$(inputid).val()};
    $.ajax({
        url: "/collection/updateDirName",
        contentType: "application/json;charset=UTF-8",
        data:JSON.stringify(params),
        dataType:"json",
        type: "POST",
        success: function(data){
            showCollection();
        },
        error : function(e) {
            alert("error !");
        }

    })
}
function newCinFile() {
    $('.file_box').hide();
    $.ajax({
        url: "/collection/mkdir",
        contentType: "application/json;charset=UTF-8",
        // data:JSON.stringify(params),

        //  data:$('#fileName').val(),
        //  dataType:"json",
        type: "POST",
        success: function(data){
            showCollection();
        },
        error : function(e) {
            alert("error !");

        }
    })
}
function moveCinFile(data) {
    var moveUrlList=new Array();
    $("input[type='checkbox']").each(function () {
        if($(this).is(":checked")&&$(this).val().charAt($(this).val().length-1)!=="~"){
            moveUrlList.push($(this).val());
        }
    });
    var path=data;
    if (moveUrlList.length==0){
        alert("请选择要移动的媒体文件");
        return;
    }
    if (path=='ctsi'){
        alert("请选择要目的文件夹");
        return;
    }
    $('#loadingDiv').show();
    $('.movefile_box').hide();
    var a=moveUrlList.toString();
    if(a.length>0){
        //第三个参数 vf代表文件由根目录移动到文件夹下、fv代表文件由文件夹下移动到根目录下、ff代表文件由一个文件夹移动到另一个文件夹下
        var idea;
        if($('#fileHide').val()==0){
            idea="vf";
        }
        if ($('#fileHide').val()!=0&&path==0){
            idea="fv";
        }
        if($('#fileHide').val()!=0&&path!=0){
            idea="ff";
        }
        var params = {"pathA":a,"pathB":path,"idea":idea};
        $.ajax({
            url: "/collection/movemkdir",
            contentType: "application/json;charset=UTF-8",
            data:JSON.stringify(params),
            dataType:"json",
            type: "POST",
            success: function(data){
                $('#loadingDiv').hide();
                showCollection();
            },
            error : function(e) {
                alert("error !");

            }
        })
    }
}
function changeView() {
    if($('.overTable2').css("display")=="none"){
        $('.overTable2').show();
        $('.overTable').hide();
    }else{
        $('.overTable').show();
        $('.overTable2').hide();
    }
}
function queryByTime(){
    $('.box').hide();
    $('#Asearch').css('background-color','rgb(59,140,255)');
    $('#Asearch').css('color','white');
    $('#Ayear').css('background-color','');
    $('#Ayear').css('color','rgb(59,140,255)');
    $('#Aall').css('background-color','');
    $('#Aall').css('color','rgb(59,140,255)');
    $('#Amonth').css('background-color','');
    $('#Amonth').css('color','rgb(59,140,255)');

    var params = {"beginTime":$('#h3Ele').val(),"endTime":$('#h3Ele2').val()};
    $.ajax({
        url: "/serach/queryByTime",
        contentType: "application/json;charset=UTF-8",
        data:JSON.stringify(params),
        dataType:"json",
        type: "POST",
        success: function(data){
            console.log(data);
            var newsitems="<tr>";
            var newlistArr=data;
            console.log(newlistArr);
            $('.overTable').html("");
            $('.overTable2').html("");
            if (newlistArr.length>0){
                for ( var i = newlistArr.length-1; i >=0; i--){
                    if((newlistArr.length-1-i)%newlinenum==0&&(newlistArr.length-1-i)!=0){
                        newsitems+="</tr><tr>";
                    }
                    newsitems+="<td  align=\"left\"><img onclick='showImgVideoList(this)' name='"+newlistArr[i].fullname+"' width=\"60px\" height=\"60px\"\n" +
                        " src=\"../images/documentImg.jpg\"> <br> <a\n" +
                        ">"+newlistArr[i].name+"</a></td>";
                }
                newsitems+="</tr>"
                $('.overTable').append(newsitems);
                //切换视图只做到媒体文件
                $('.overTable').show();
                $('.overTable2').hide();
                $('#listImg').hide();
            }else {
                $('.overTable').html("");
                $('.overTable2').html("");
            }
        },
        error : function(e) {
            alert("error !");
        }
    })
}
function showOrHidebox(){
    $('.person_box').hide()
    $('.file_box').hide()
    $('.movefile_box').hide()
    if($('.box').css("display")=="none"){
        $('.box').show()
    }else{
        $('.box').hide()
    }
    $('.con').height($('#datadiv').height()+56);
    $('#databutton1').css("top",$('#datadiv').height()-4);
    $('#databutton2').css("top",$('#datadiv').height()-4);
}
function showOrHideperson_box(){
    $('.box').hide()
    $('.file_box').hide()
    $('.movefile_box').hide()
    if($('.person_box').css("display")=="none"){
        $('.person_box').show()
    }else{
        $('.person_box').hide()
    }
}
function addFileBox(){
    $('.box').hide()
    $('.person_box').hide()
    $('.movefile_box').hide()
    if($('.file_box').css("display")=="none"){
        $('.file_box').show()
    }else{
        $('.file_box').hide()
    }
}
function moveFileBox(){
    // document.getElementById("movefileName").options.length=0;
    $("#movefileName").html("");
    $('.box').hide()
    $('.person_box').hide()
    $('.file_box').hide()
        $.ajax({
            url: "/collection/getDirList",
            dataType:"json",
            type: "POST",
            success: function(data){
                $("#movefileName").append("<li><a style=\" color:white;\" name='ctsi' onclick='moveCinFile(this.name)'>-请选择文件夹-</a></li>");
                $("#movefileName").append("<li><a style=\" color:white;\" name='0' onclick='moveCinFile(this.name)'>收藏夹根目录</a></li>");
                $.each(data, function (i) {
                    $("#movefileName").append("<li><a style=\" color:white;\"name='" + data[i].usercollection_path + "' onclick='moveCinFile(this.name)'>" + data[i].usercollection_name.substring(0,data[i].usercollection_name.length-1) + "</a></li>");
                });
              //  $('.movefile_box').show();

            }});

}
function showCheckBox() {
    $('#downTrue').show();
}
function upToDown() {
    var downUrlList=new Array();
    $("input[type='checkbox']").each(function () {
        if($(this).is(":checked")){
            downUrlList.push($(this).val());
        }
    })
    var a=downUrlList.toString();
    $('#downTrue').hide();
    if (a.length>0){
        window.open("/download/down.action?downUrlList1="+a)
    }
}
function cin () {
    var downUrlList=new Array();
    $("input[type='checkbox']").each(function () {
        if($(this).is(":checked")){
            downUrlList.push($(this).val());
        }
    })
    var a=downUrlList.toString();
    a=encodeURI(encodeURI(a),'utf-8');
    var params = {"downUrlList1" : a};
    if (a.length>0){
        $.ajax({
            url: "/collection/byPath",
            data:params,
            dataType:"json",
            type: "POST",
            success: function(data){
            }});
        alert("收藏成功")
    }
}
function cout () {
    var downUrlList=new Array();
    $("input[type='checkbox']").each(function () {
        if($(this).is(":checked")){
            downUrlList.push($(this).val());
        }
    })
    var a=downUrlList.toString();
    a=encodeURI(encodeURI(a),'utf-8');
    var params = {downUrlList1 : a};
    if (a.length>0){
        $.ajax({
            url: "/collection/delectPath",
            data:params,
            dataType:"json",
            type: "POST",
            success: function(data){
            }});
        alert("取消收藏成功");

        showCollection();
    }
}


    function back() {
        if($('#fileHide').val()!=0){
            showCollection();
            return;
        }
        replyCinImg();
        var color=$('#Amonth').css('color');
        if (color=='rgb(255, 255, 255)'){
            query('month');
        }
        color=$('#Ayear').css('color');
        if (color=='rgb(255, 255, 255)'){
            query('year');
        }
        color=$('#Aall').css('color');
        if (color=='rgb(255, 255, 255)'){
            query('all');
        }
        color=$('#Asearch').css('color');
        if (color=='rgb(255, 255, 255)'){
            queryByTime();
        }
    }

    function query(data){
        replyCinImg();
        var url;
        if(data=="month"){
            $('#Amonth').css('background-color','rgb(59,140,255)');
            $('#Amonth').css('color','white');
            $('#Ayear').css('background-color','');
            $('#Ayear').css('color','rgb(59,140,255)');
            $('#Aall').css('background-color','');
            $('#Aall').css('color','rgb(59,140,255)');
            $('#Asearch').css('background-color','');
            $('#Asearch').css('color','rgb(59,140,255)');

            url="/serach/queryByMonth.action";
        }
        if(data=="year"){
            $('#Ayear').css('background-color','rgb(59,140,255)');
            $('#Ayear').css('color','white');
            $('#Amonth').css('background-color','');
            $('#Amonth').css('color','rgb(59,140,255)');
            $('#Aall').css('background-color','');
            $('#Aall').css('color','rgb(59,140,255)');
            $('#Asearch').css('background-color','');
            $('#Asearch').css('color','rgb(59,140,255)');
            url="/serach/queryByYear.action";
        }
        if(data=="all"){
            $('#Aall').css('background-color','rgb(59,140,255)');
            $('#Aall').css('color','white');
            $('#Amonth').css('background-color','');
            $('#Amonth').css('color','rgb(59,140,255)');
            $('#Ayear').css('background-color','');
            $('#Ayear').css('color','rgb(59,140,255)');
            $('#Asearch').css('background-color','');
            $('#Asearch').css('color','rgb(59,140,255)');
            url="/serach/queryByAll.action";
        }
        $('.overTable').html("");
        $('.overTable2').html("");
        $('#loadingDiv').show();
        $.ajax({
                url: url,
                dataType: "json",
                type: "POST",
                success: function(data){
                    console.log(data);
                    var newsitems="<tr>";
                    var newlistArr=data;
                    console.log(newlistArr);
                    if (newlistArr.length>0){
                        for ( var i = newlistArr.length-1; i >=0; i--){
                            if((newlistArr.length-1-i)%newlinenum==0&&(newlistArr.length-1-i)!=0){
                                newsitems+="</tr><tr>";
                            }
                            newsitems+="<td  style='cursor: pointer;text-align: center;' align=\"left\"><img onclick='showImgVideoList(this)' name='"+newlistArr[i].fullname+"' height=\"80px\"\n" +
                                " src=\"../images/documentImg.jpg\"> <br> <a style='font-size: 17px;' \n" +
                                ">"+newlistArr[i].name+"</a></td>";
                        }
                        newsitems+="</tr>"

                        $('.overTable').append(newsitems);
                        //切换视图只做到媒体文件
                        $('.overTable').show();
                        $('.overTable2').hide();
                        $('#listImg').hide();
                    }else {
                        $('.overTable').html("");
                        $('.overTable2').html("");
                    }
                    $('#loadingDiv').hide();
                    mainHeightToMenu();
                },
                error : function(e) {
                    alert("error !");

                }
            }

        );

    }


    function showImgVideoListCin(data) {
        var  fileurl=data.name;
        $('#fileHide').val(fileurl);
        $('#addFileBox').hide();
        showImgVideoList(data);
        $('#cout').show();
        $('#cin').hide();
    }
function showImgVideoList(data) {
    $('.overTable').html("");
    $('.box').hide();
    $('.spanData').hide();
    $('.spanDownCinBack').show();
    $('.spanDownCinBack').css("left","20px");
    $('#cout').hide();
    $('#cin').show();
    $('#loadingDiv').show();
    var params = {"path": data.name};
    $.ajax({
        url: "/serach/imgVideoList.action",
        dataType: "json",
        data:params,
        type: "POST",
        success: function(data){
            var newsitems="<tr>";
            var newsitems2="<tr>";
            var newlistArr=data;
            console.log(newlistArr);
            $('.overTable').html("");
            $('.overTable2').html("");
            if (newlistArr.length>0){
                //大图标视图
                var j=0;
                for ( var i = 0; i <newlistArr.length; i++){
                    if(j%imgvideolinenum==0&&j!=0){
                        newsitems+="</tr><tr>";
                    }
                    var str=newlistArr[i].path.substring(newlistArr[i].path.lastIndexOf('.')+1,newlistArr[i].path.length);
                    if (str=='jpg'){
                        j++;
                        newsitems+="<td  style='text-align: center;width: 140px'  align=\"left\"><img style='cursor: pointer' onclick='enlarge(this)'  class='img-size' " +
                            " src='../video"+newlistArr[i].path+"'> <br>   <input type=\"checkbox\" class=\"checkbox\" name=\"cb\" value=\""+newlistArr[i].path+"\"><br> <a\n" +
                            ">"+newlistArr[i].name.substring(newlistArr[i].name.length-10,newlistArr[i].name.length)+"</a></td>";
                    }else{
                        j++;
                        newsitems+="<td style='text-align: center;width: 140px' align=\"left\">" +
                            "<img  style='cursor: pointer' onclick='video_play(this)' class='img-size' src='../video"+newlistArr[i].path+".jpg"+"'><br>" +
                            // "<source src='../video"+newlistArr[i].path+"' type='video/mp4' />" +
                            // "<embed onclick='video_play(this)' src=\"../video"+newlistArr[i].path+"\" autostart=false controls='' width='120px' height='100px'></video><br> " +
                            "<input type='checkbox' class='checkbox' name='cb' value="+newlistArr[i].path+".mp4"+"><br>" +
                            " <a>"+newlistArr[i].name.substring(newlistArr[i].name.length-10,newlistArr[i].name.length)+".mp4"+"</a></td>";
                    }
                }
                //列表视图
                // for ( var i = 0; i <newlistArr.length; i++){
                //     newsitems2+="</tr><tr>";
                //     var str=newlistArr[i].path.charAt(newlistArr[i].path.length -1);
                //     if (str!='4'){
                //         newsitems2+="<td align=\"left\" >"+
                //             "<div class='img_div' onclick='enlarge($(this).children(1))'>" +
                //             "<img  class='img-size' onclick='enlarge(this)'    src='../video"+newlistArr[i].path+"'>" +
                //             "<span>"+newlistArr[i].name+"</span> </div>"+
                //             "<input type=\"checkbox\" class=\"checkbox\" name=\"cb\" value=\""+newlistArr[i].path+"\"><br></td>";
                //     }else {
                //         newsitems2+="<td align=\"left\">"+
                //             "<div class='video_div' onclick='video_play($(this).children(0))'>" +
                //             "<video  onclick='video_play(this)' style='width: 20px;height: 20px' src='../video"+newlistArr[i].path+"' class=\"video-size\" ></video> "+
                //             "<span>"+newlistArr[i].name+"</span></div>"+
                //             "<input type=\"checkbox\" class=\"checkbox\" name=\"cb\" value=\""+newlistArr[i].path+"\"><br></td>";
                //     }
                // }
                newsitems+="</tr>"
                $('#listImg').show();
                $('.overTable').append(newsitems);
                //$('.overTable2').append(newsitems2);
            }else {
                $('.overTable').html("");
                $('.overTable2').html("");
            }
            $('#loadingDiv').hide();
            $('#backImg').show();
            $('#backA').show();
        },
        error : function(e) {
            alert("error !");

        }

    })
}

function video_play(data){
    $(".pop").show();
    $(".pop .video-view").attr("src",data.src.substring(0,data.src.length-4)+".mp4");
    $(".pop-bg").fadeIn("fast");
}
function hidevideoplay(){
    $(".pop").hide();
    $(".pop .video-view").trigger('pause')
    $(".pop-bg").fadeOut("fast");
}
function showCollection(){
    if($('#fileHide').val()!=0){
        $('#fileHide').val(0);
    }
    $('.spanData').hide();
    $('.spanDownCinBack').css("left","20px");
    $('#cout').show();
    $('#cin').hide();
    // $('#moveFileBox').css("left","349px");
    $('#addFileBox').css("left","477px");
    $('.person_box').hide();
    $('#cinButton').hide();
    $('#exitCin1').hide();
    $('#coutButton').show();
    $('#exitCin0').show();
    $('#loadingDiv').show();
    $('.spanDownCinBack').show();
    $.ajax({
        url: "/collection/showCollection",
        dataType: "json",
        type: "POST",
        success: function(data){
            var newsitems="<tr>";
            var newlistArr=data;
            $('.overTable').html("");
            if (newlistArr.length>0){
                //大图标视图
                for ( var i = 0; i <newlistArr.length; i++){
                    if(i%imgvideolinenum==0&&i!=0){
                        newsitems+="</tr><tr>";
                    }
                    var fileName=newlistArr[i].name;
                    var fileNameOutTheLast=fileName.substring(0,fileName.length-1);
                    var str=newlistArr[i].path.charAt(newlistArr[i].path.length -1);
                    if (str=='4'){  //mp4
                        newsitems+="<td style='text-align: center' align=\"left\"><video  style='cursor: pointer' onclick='video_play(this)' src='../video"+newlistArr[i].path+"' class=\"video-size\" ><source src='../video"+newlistArr[i].path+"' type='video/mp4' /><embed onclick='video_play(this)' src=\"../video"+newlistArr[i].path+"\" autostart=false controls='' width='120px' height='100px'></video><br> " +
                            "<input type=\"checkbox\" class=\"checkbox\" value=\""+newlistArr[i].path+"\"><br><a\n" +
                            ">"+fileName.substring(fileName.length-17,fileName.length)+"</a></td>";
                    }else if (str=='~'){  //文件夹以~结尾
                        newsitems+="<td  style='text-align: center' align=\"left\"><img style='cursor: pointer' onclick='showImgVideoListCin(this)' name='"+newlistArr[i].path+"' height=\"80px\"\n" +
                            " src=\"../images/documentImg.jpg\"> <br> " +
                            "<input type=\"checkbox\" class=\"checkbox\" value=\""+newlistArr[i].path+"\"><br>" +
                            "<span id='cinFileId"+i+"' style='width: 100%' onclick='changeEditFile("+i+")'>"+fileNameOutTheLast+"</span> <input id='cinInputId"+i+"' style='display: none' onblur='updateCinFile("+i+")' maxlength='10' value='"+fileNameOutTheLast+"'></input></td>";
                    }
                    else {  //img
                        newsitems+="<td style='text-align: center' align=\"left\"><img style='cursor: pointer' onclick='enlarge(this)'   class='img-size'" +
                            " src='../video"+newlistArr[i].path+"'> <br>   <input type=\"checkbox\" class=\"checkbox\"  value=\""+newlistArr[i].path+"\"><br> <a\n" +
                            ">"+fileName.substring(fileName.length-10,fileName.length)+"</a></td>";
                    }
                }
                newsitems+="</tr>"
                $('.overTable').append(newsitems);
            }else {
                $('.overTable').html("");
            }
            $('#loadingDiv').hide();
            $('#backImg').show();
            $('#backA').show();
            $('#addFileBox').show();
            $('#moveFileBox').show();
            moveFileBox();
        },
    })

}

    function comeTwoMenu(data){
        mainHeightToMenu();
        var menuHideValue=$('#menuHide').val();
        var menuHideName=$('#menuHide').height();
        var dataid=data.id;
        if(menuHideValue!=dataid){
            $('.changeColor').remove();
            var oneMenu="oneMenuA"+data.id;
            var params = {"id": data.name,"parent_id":data.id};
            $.ajax({
                type: "POST",
                dataType: "json",
                url: "/menu/getMenu",
                data: params,
                success: function (data) {
                    for (var i=0;i<data.length;i++)
                    {
                        $('.'+oneMenu+'').append(' <li>   <a class="changeColor" style="cursor: pointer;  display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" name="'+data[i].menu_path+'" onclick="saveSession(this)"> '+data[i].menu_name+' </a> </li> ');
                    }
                    $('#menuHide').val(dataid);
                    $('#menuHide').height(1);
                    // var list = data;
                    // window.location.href = "index.jsp?pathlist=" + list;
                    mainHeightToMenu();
                },
                error: function (e) {
                    alert("异常！");
                }
            });
        }else {
            $('.changeColor').remove();
            $('#menuHide').val(0);
            mainHeightToMenu();
        }
    }
    function mainHeightToMenu() {
        var high=$('.dropdown').height();
        $('#u2').height(high);
        $('#u2_state0').height(high);
    }
    function replyCinImg() {
        $('#loadingDiv').hide();
        $('.movefile_box').hide();
        $('.spanData').show();
        $('.spanDownCinBack').hide();
        $('#cinButton').show();
        $('#exitCin1').show();
        $('#coutButton').hide();
        $('#exitCin0').hide();
        $('#backImg').hide();
        $('#backA').hide();
        $('#addFileBox').hide();
        $('#moveFileBox').hide();
        $('.box').hide();
        $('.person_box').hide();
        $('.file_box').hide();
        $('#fileHide').val(0);
    }
function saveSession(data) {
    $('.changeColor').css('background-color','');
    data.style.backgroundColor= "rgb(82, 147, 239)";
    replyCinImg();
    $('#loadingDiv').show();
    var params = {"path": data.name};
    $.ajax({
        type: "POST",
        dataType: "text",
        url: "/session/saveSession",
        data: params,
        success: function (data) {
            query('all');
        },
        error: function (e) {
            alert("异常！");
        }
    });
}


// 图片放大函数
function enlarge(obj) {
    var _this = $(obj);
    imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);
    function imgShow(outerdiv, innerdiv, bigimg, _this) {
        var src = _this.attr("src"); //获取当前点击的pimg元素中的src属性
        $(bigimg).attr("src", src); //设置#bigimg元素的src属性

        /*获取当前点击图片的真实大小，并显示弹出层及大图*/
        $("<img/>").attr("src", src).load(function () {
            var windowW = $(window).width(); //获取当前窗口宽度
            var windowH = $(window).height(); //获取当前窗口高度
            var realWidth = this.width; //获取图片真实宽度
            var realHeight = this.height; //获取图片真实高度
            var imgWidth, imgHeight;
            var scale = 0.8; //缩放尺寸，当图片真实宽度和高度大于窗口宽度和高度时进行缩放

            if (realHeight > windowH * scale) { //判断图片高度
                imgHeight = windowH * scale; //如大于窗口高度，图片高度进行缩放
                imgWidth = imgHeight / realHeight * realWidth; //等比例缩放宽度
                if (imgWidth > windowW * scale) { //如宽度扔大于窗口宽度
                    imgWidth = windowW * scale; //再对宽度进行缩放
                }
            } else if (realWidth > windowW * scale) { //如图片高度合适，判断图片宽度
                imgWidth = windowW * scale; //如大于窗口宽度，图片宽度进行缩放
                imgHeight = imgWidth / realWidth * realHeight; //等比例缩放高度
            } else { //如果图片真实高度和宽度都符合要求，高宽不变
                imgWidth = realWidth;
                imgHeight = realHeight;
            }
            $(bigimg).css("width", imgWidth); //以最终的宽度对图片缩放

            var w = (windowW - imgWidth) / 2; //计算图片与窗口左边距
            var h = (windowH - imgHeight) / 2; //计算图片与窗口上边距
            $(innerdiv).css({
                "top": h,
                "left": w
            }); //设置#innerdiv的top和left属性
            $(outerdiv).fadeIn("fast"); //淡入显示#outerdiv及.pimg
        });

        $(outerdiv).click(function () { //再次点击淡出消失弹出层
            $(this).fadeOut("fast");
        });
    }
}


