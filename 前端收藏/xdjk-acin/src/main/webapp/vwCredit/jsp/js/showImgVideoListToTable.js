//功能：一个媒体的list
function showImgVideoListToTable(tableName,videoImgList,newLineNum) {
    var newsitems="<tr>";
    console.log(videoImgList);
    $('.'+tableName+'').html("");
    if (videoImgList.length>0){
        for ( var i = 0; i <videoImgList.length; i++){
            if(i%newLineNum==0&&i!=0){
                newsitems+="</tr><tr>";
            }
            var str=videoImgList[i].path.substring(videoImgList[i].path.lastIndexOf('.')+1,videoImgList[i].path.length);
            if (str=='jpg'){
                newsitems+="<td align=\"left\"><img onclick='enlarge(this)'  width=\"100px\" height=\"100px\"\n" +
                    " src='../video"+videoImgList[i].path+"'> <br>   <input type=\"checkbox\" class=\"checkbox\" name=\"cb\" value=\""+videoImgList[i].path+"\"><br> <a\n" +
                    ">"+videoImgList[i].name.substring(videoImgList[i].name.length-10,videoImgList[i].name.length)+"</a></td>";
            }
            if(str=='mp4'){
                newsitems+="<td align=\"left\"><video  onclick='video_play(this)' src='../video"+videoImgList[i].path+"' class=\"video-size\" width=\"120px\" height=\"100px\"><source src='../video"+videoImgList[i].path+"' type='video/mp4' /><embed onclick='video_play(this)' src=\"../video"+videoImgList[i].path+"\" autostart=false controls='' width='120px' height='100px'></video><br> <input type=\"checkbox\" class=\"checkbox\" name=\"cb\" value=\""+videoImgList[i].path+"\"><br><a\n" +
                    ">"+videoImgList[i].name.substring(videoImgList[i].name.length-17,videoImgList[i].name.length)+"</a></td>";
            }
        }
        newsitems+="</tr>"
    }
}