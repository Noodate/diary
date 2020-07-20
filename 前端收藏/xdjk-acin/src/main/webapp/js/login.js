function new_login() {
    var userName = $("#userName").val();
    var password = $("#password").val();
    if (userName == null || userName == "") {
        alert("用户名不能为空！");
        return;
    }
    if (password == null || password == "") {
        alert("密码不能为空！");
        return;
    }
    if (userName =="admin" && password=="1"){
        window.location.href = "main.jsp";
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "/vwCredit/log/login",
            data: $('#adminlogin').serialize(),
            success: function (result) {
                if (result.resultCode == 200) {
                //     setCookie("userName", result.data.currentUser.userName);
                //     setCookie("roleName", result.data.currentUser.roleName);
                //     window.location.href = "main.jsp";
                }

            },
            error: function () {
                alert("异常！");
            }
        });
    }else {
        alert("用户名 admin  密码 123");
    }


}