$(document).ready(function () {
  console.log(222);
  $(".list").on("click", function () {
    $("ul.list-1").unbind().slideToggle();
    var direction= $(this).children("b").hasClass("down");
    if (direction) {
      $(this).children("b").removeClass("down").addClass("up");
    } else {
      $(this).children("b").removeClass("up").addClass("down");
    };

  });
  $(".jie").on("click", function () {
    var back= $(this).children("i").hasClass("shu");
    if (back) {
      $(this).children("i").removeClass("shu");
    } else {
      $(this).children("i").addClass("shu");
      $(this).siblings().children("i").removeClass("shu");
      var text = $(this).children("span").html();
      $('.list').children("span").html(text);
    };
    
 
  })
 
  $('#txt').change(function(){
        
    if($("#txt").val().length<10){
      alert("字数最少10个")
    }
      
    if($("#txt").val().length>500){
      alert("字数最多500个")
    }
  })
  $(".one").click(function(){
    $(".container-box").removeClass("none");
    var mobile = $("#usermobile").val();
    if (mobile != "") {
      if (!/^1(3|5|7|8)[0-9]{9}$/.test(mobile)) {
        alert("手机号填写的格式不对，请正确填写");
        return false;
      }
    }
})  
$(".two").click(function(){
  $(".container-box").addClass("none");
  })  
})

