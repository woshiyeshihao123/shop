$(document).ready(function() {
  if ($.cookie("rmbUser") == "true") {
    $("#ck_rmbUser").attr("checked", true);
    $("#txt_username").val($.cookie("username"));
    $("#txt_password").val($.cookie("password"));
  }
});

//记住用户名密码
function Save() {
  if ($("#ck_rmbUser").attr("checked")) {
    var str_username = $("#txt_username").val();
    var str_password = $("#txt_password").val();
    $.cookie("rmbUser", "true", {
      expires: 7
    }); //存储一个带7天期限的cookie
    $.cookie("username", str_username, {
      expires: 7
    });
    $.cookie("password", str_password, {
      expires: 7
    });
  } else {
    $.cookie("rmbUser", "false", {
      expire: -1
    });
    $.cookie("username", "", {
      expires: -1
    });
    $.cookie("password", "", {
      expires: -1
    });
  }
};
