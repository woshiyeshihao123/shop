$('.look-ck').click(function () {
  // $('.zw').attr('style', 'height:500px;');
  $('.zw').removeClass("hei-ght");
  $('.look-ck').css('display', 'none');
});

// tousu
// $('#txt').change(function(){
        
//   if($("#txt").val().length<10){
//     alert("字数最少10个")
//   }
    
//   if($("#txt").val().length>500){
//     alert("字数最多500个")
//   }
// })
// $(".one").click(function(){
//   $(".container-box").removeClass("none");
//   $(".toushu").removeClass('bei').addClass('bei-1');  
// })
// $("button.two").click(function () {
//   console.log(1);
//   $(".complain-box").addClass("none");
//   $(".toushu").removeClass('bei').addClass('bei-1');
// })

// 拨打电话js
$(".two-p").click(function () { 
  if ($("#bg").hasClass("disappear")) {
    $("#bg").removeClass("disappear");
    $("#call-people").removeClass("disappear");
    $("#bg").addClass("show");
    $("#call-people").addClass("show");
     }
})
$("#over").click(function () { 
  if ($("#bg").hasClass("show")) {
    $("#bg").removeClass("show");
    $("#call-people").removeClass("show");
    $("#bg").addClass("disappear");
    $("#call-people").addClass("disappear");
     }
})

// 拨打电话
$("#call-phone").click(function () { 
if ($("#bg").hasClass("disappear")) {
$("#bg").removeClass("disappear");
$("#call-people").removeClass("disappear");
$("#bg").addClass("show");
$("#call-people").addClass("show");
}
})
$("#over").click(function () { 
if ($("#bg").hasClass("show")) {
$("#bg").removeClass("show");
$("#call-people").removeClass("show");
$("#bg").addClass("disappear");
$("#call-people").addClass("disappear");
}
})


// 投诉
$(document).ready(function () {
  
  $(".list").on("click", function () {
    console.log(151);
    $("ul.list-1").slideToggle();
    var direction= $(this).children("b").hasClass("down");
    if (direction) {
      $(this).children("b").removeClass("down").addClass("up");
    } else {
      $(this).children("b").removeClass("up").addClass("down");
    };
console.log(333);
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


  $(".com-plaints").on("click", function () {
   
    $(".tousu-box").removeClass("none");
  })
  $(".sub-btn").on('click', function () {
    $(".container-box").removeClass("none");
    var timer=setTimeout(() => {
      $(".container-box").addClass("none");
        clearTimeout(timer);
        timer = null;
    }, 1000);
  })

  $(".can-btn").on('click', function () {
    $(".tousu-box").addClass("none");
  })

  $(".black-cloth").on('click', function () {
    $(".tousu-box").addClass("none");
  })
  

})