$(".select").on("click", function () {
  console.log(111);
  var back= $("#address").hasClass("disappear");
  if (back) {
    $("#address").removeClass("disappear");
    $("#address").addClass("show");
  } else {
    $("#address").removeClass("show");
    $("#address").addClass("disappear");
  };
}) 



$(document).ready(function () {
  var height = $('body').height()-80;
  $('.complain-box').height(height);

  $(".deploy-sidebar").on("click", function () {
    var back= $(".header-box").hasClass("none");
    if (back) {
      $(".header-box").removeClass("none");
    } else {
      $(".header-box").addClass("none");
    };
  })
  $('.toushu').on("click", function(){
    $(".complain-box").toggleClass('none');
  })
  $('a.lt>button').on("click", function(){
    $(".complain-box").addClass('none');
  })
  $(".a-1").on("click", function () {
    $(this).children("span").attr("style","margin-top:0") 
    $(this).children("span").addClass('chang');
    $(this).children("img").attr("src","../../../h5-assets/img/dianpu/home-1.png") 
  })
  $(".a-2").on("click", function () {
    $(this).children("span").attr("style","margin-top:0") 
    $(this).children("span").addClass('chang');
    $(this).children("img").attr("src","../../../h5-assets/img/dianpu/supply-1.png") 
  })
  $(".a-3").on("click", function () {
    $(this).children("span").attr("style","margin-top:0") 
    $(this).children("span").addClass('chang');
    $(this).children("img").attr("src","../../../h5-assets/img/dianpu/gou-1.png") 
  })
  $(".a-4").on("click", function () {
    $(this).children("span").attr("style","margin-top:0") 
    $(this).children("span").addClass('chang');
    $(this).children("img").attr("src","../../../h5-assets/img/dianpu/chanpin-1.png") 
  })
  $(".a-5").on("click", function () {
    $(this).parent().nextAll().slideToggle();
    $(this).children("span").addClass('chang');
  })
  $(".a-6").on("click", function () {
    $(this).children("span").attr("style","margin-top:0") 
    $(this).children("span").addClass('chang');
    $(this).children("img").attr("src","../../../h5-assets/img/dianpu/dong-1.png") 
  })
  $(".a-7").on("click", function () {
    $(this).children("span").attr("style","margin-top:0") 
    $(this).children("span").addClass('chang');
    $(this).children("img").attr("src","../../../h5-assets/img/dianpu/zhaopin-1.png") 
  })
  $(".a-8").on("click", function () {
    $(this).children("span").attr("style","margin-top:0") 
    $(this).children("span").addClass('chang');
    $(this).children("img").attr("src","../../../h5-assets/img/dianpu/lianxi-2.png") 
  })
  $(".a-9").on("click", function () {
    $(this).children("span").attr("style","margin-top:0") 
    $(this).children("span").addClass('chang');
    $(this).children("img").attr("src","../../../h5-assets/img/dianpu/jieshao-1.png") 
  })
  $(".a-10").on("click", function () {
    $(this).children("span").attr("style","margin-top:0") 
    $(this).children("span").addClass('chang');
    $(this).children("img").attr("src","../../../h5-assets/img/dianpu/gongshan-1.png") 
  })
})

$(".deploy-sidebar").on("click", function () {
  console.log(111);
  var back= $(".header-box").hasClass("none");
  if (back) {
    $(".header-box").removeClass("none");
  } else {
    $(".header-box").addClass("none");
  };
})
$("#call-two").click(function () { 
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