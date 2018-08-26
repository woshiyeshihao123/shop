// $(document).ready(function () {
//     if ($.cookie("rmbUser") == "true") {
//     $("#ck_rmbUser").attr("checked", true);
//     $("#txt_username").val($.cookie("username"));
//     $("#txt_password").val($.cookie("password"));
//     }
//   });
 
//   //记住用户名密码
//   function Save() {
//     if ($("#ck_rmbUser").attr("checked")) {
//       var str_username = $("#txt_username").val();
//       var str_password = $("#txt_password").val();
//       $.cookie("rmbUser", "true", { expires: 7 }); //存储一个带7天期限的cookie
//       $.cookie("username", str_username, { expires: 7 });
//       $.cookie("password", str_password, { expires: 7 });
//     }
//     else {
//       $.cookie("rmbUser", "false", { expire: -1 });
//       $.cookie("username", "", { expires: -1 });
//       $.cookie("password", "", { expires: -1 });
//     }
//   };



$("#txt_username").blur(

  function regtest() {

  var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则

  var phoneNum = $("#txt_username").val();//手机号码

  var flag = reg.test(phoneNum); //true

  if (!flag) {
    $("#phone-msg").css("display", "block");
  } else {
    $("#phone-msg").css("display", "none");
  }

  }
  
);