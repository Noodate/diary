function credit_login() {
    var user_name = $("#user_name").val();
    var user_pwd = $("#user_pwd").val();
    if (user_name == null || user_name == "") {
        alert("用户名不能为空！");
        return;
    }
    if (user_pwd == null || user_pwd == "") {
        alert("密码不能为空！");
        return;
    }
    var user_json = {"user_name": user_name, "user_pwd": user_pwd};
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "/login/login",
        data: $('#adminlogin').serialize(),
        success: function (result) {
            if (result.resultCode == 200) {
                //登录成功，根据用户权限查询菜单
                window.location.href = "jsp/home.html?id="+result.data.currentUser.id;
            }
            ;
            if (result.resultCode == 500) {
                alert(result.message);
            }
            ;
        },
        error: function (e) {
            alert("异常！");
        }
    });

}

// function getMenu(id) {
//     var params = {"id": id, "parent_id": "0"};
//     $.ajax({
//         type: "POST",
//         dataType: "json",
//         url: "/menu/getMenu",
//         data: params,
//         success: function (data) {
//             var list = data;
//             window.location.href = "index.jsp?pathlist=" + list;
//         },
//         error: function (e) {
//             alert("异常！");
//         }
//     });
// }