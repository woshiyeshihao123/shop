//弹出
$("body").on('click',"button#money",function() {
  var hb = $('.zhezao').hasClass("up");
  if (!hb) {
    $(".zezao").removeClass("close").addClass("up");
  }
//网页购买弹出框和页面内关键字共同js
  var date= $("#gjz").val(); //赋值
  // console.log(date);
  $('#gjz-tc').val(date);
  return false;
});




$("body").on('click',"a#money",function() {
  var hc = $('.zezao').hasClass("up");
  if (!hc) {
    $(".zhezao").removeClass("close").addClass("up");
  }
});
//提交成功

$(function() {
  $('body').on('click',".gm",function() {
    $('.zezao').removeClass("up").addClass("close");
    $('.zhezao').removeClass("up").addClass("close");
  });
});
// $("body").on('click',"#money",function () {
//     $('.zezao').toggleClass("close");
// });


$("body").on("click", ".gm", function () {
    $('#submit-success').toggleClass("close");
    // console.log(111);
    console.log($('#gjz-tc').val());
    var timer=setTimeout(() => {
        $('#submit-success').toggleClass("close");
        // $("#y").trigger("click");
        // $("#x").trigger("click");
        clearTimeout(timer);
        timer = null;
    }, 1000);
})


//收回
$("body").on("click", "#y", function() {
  $('.zezao').removeClass("up").addClass("close");
  // $("#gjz").val() = "";
});
$("body").on("click", "#qx", function () {
  $('.zezao').removeClass("up").addClass("close");
});

$("body").on("click", "#x", function() {
  $('.zhezao').removeClass("up").addClass("close");
});
$("body").on("click", ".cancel", function () {
  $('.zhezao').removeClass("up").addClass("close");
});
console.log($('#gjz-tc').val());   


