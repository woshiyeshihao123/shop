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
  $(".complain-box").removeClass("none");
  $("#bg1").removeClass("none");
})
function jumpUrl(url) {
  location.href = url;
}
