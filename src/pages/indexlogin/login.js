// $(function() {
//   console.log('login');
// });

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


// 显示密码

// $('.eye').click(function(){	
//   if($(this).attr('src')=='../../assets/img/photos/login-register/eye.png'){
//     $(this).attr('src','../../assets/img/photos/login-register/close-eye.png');
//   }else{
//     $(this).attr('src','../../assets/img/photos/login-register/eye.png');
//   }
// });


$(function() {
	 


  //查看密码
  $(".eye").click(function(){
    if ($(this).attr("data-show") == 2) {//明文
      $(this).attr("data-show", "1");
      $(this).attr('src','../../assets/img/photos/login-register/close-eye.png');
      $(this).parent("div").children(".mima_dd").show();
      $(this).parent("div").children(".mima_wz").hide();
      $(this).parent("div").children(".mima_dd").val($(this).parent("div").children(".mima_wz").val()); 

      return;
      }
    if($(this).attr("data-show")==1){//密文
      $(this).attr("data-show", "2");
      $(this).attr('src','../../assets/img/photos/login-register/eye.png');
      $(this).parent("div").children(".mima_dd").hide();
      $(this).parent("div").children(".mima_wz").show();
      $(this).parent("div").children(".mima_wz").val($(this).parent("div").children(".mima_dd").val()); 
      return;
      } 
    });
    
   
  
   
});	
  

  
$("#sub").click(function () {
  var str = $("#txt_username").val();
  console.log(str);
    var ret = /^[a-zA-Z0-9_-]{5,20}$/;
    if(ret.test(str)){
      $("#usernameMsg").hide();
    } else {
      $("#usernameMsg").show();
    }
  });

$("#sub").click(function () {
  if ($(this).attr("data-show") == 1) {
    var str2 = $(".eye").parent("div").children(".mima_dd").val();
  } else {
    var str2 = $(".eye").parent("div").children(".mima_wz").val();
  }
      var ret = /^[a-zA-Z0-9_-]{5,20}$/;
      if(ret.test(str2)){
        $("#passwordMsg").hide();
      } else {
        $("#passwordMsg").show();
      }
    });