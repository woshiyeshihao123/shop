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
$(".one").click(function () {  
  $(".complain-box").addClass("none");
  $("#bg1").addClass("none");
})  
$(".two").click(function () {  
  $(".complain-box").addClass("none");
  $("#bg1").addClass("none");
}) 
$("#complain").click(function () {
  $("#complains").toggleClass("none");
  $(".modal-full-screen").toggleClass("none");
  // $("html").toggleClass("none-scroll");
});
$("#complained").click(function () {
  $("#complains").toggleClass("none");
  $(".modal-full-screen").toggleClass("none");
  // $("html").toggleClass("none-scroll");
});

// 投诉框
$(document).ready(function () {
console.log(222);
$(".list").on("click", function () {
$("ul.list-1").toggleClass("none");
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
