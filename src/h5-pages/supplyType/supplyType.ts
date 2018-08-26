$(".supplyType-left-ul-li").click(function () {
  $(".supplyType-left-ul-li").removeClass("supplyType-left-li-active");
  $(".supplyType-left-ul-li>ul").removeClass("supplyType-ul-right-active");
  $(this).addClass("supplyType-left-li-active");
  // var index = $(this).index();
  // $.get("http://127.0.0.1:8080/h5-pages/supplyType/supplyType.html?first=" + index,function () {
  //   $(this).children("ul").addClass("supplyType-ul-right-active");
  // })
  $(this).children("ul").addClass("supplyType-ul-right-active");
  
})


$(".deploy-sidebar").on("click", function () {
  console.log(111);
  var back = $(".header-box").hasClass("none");
  if (back) {
    $(".header-box").removeClass("none");
  } else {
    $(".header-box").addClass("none");
  };
});

// window.history.back(-1);
$(".supplyType-title img").click(function () {
  window.history.back(-1);
});