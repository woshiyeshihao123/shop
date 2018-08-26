// $(".btn-supply-info-manage").click(function(){
//     $(".modal-full-screen").toggleClass("none");
//     $(".modal-submit").toggleClass("none");
//     var timer=setTimeout(function(){
//         $(".modal-full-screen").toggleClass("none");
//         $(".modal-submit").toggleClass("none");
//         clearTimeout(timer);
//     },500);
// });

// 确认删除吗
$(".supply-info-manage").on("click", ".delete", function () {
  $("#modal-delete").toggleClass("none");
  $(".modal-full-screen").toggleClass("none");
  // $(this).parent().find(".checkBox").trigger("click");
  // var checkbox = $(this).parent().find(".checkBox");
  // $("#modal-delete>div>a:first-child+a").one("click", function () {
  //   checkbox.trigger("click");
  //})
});
// 批量更新
$("#update-all").click(function () {
  $("#submit-update").toggleClass("none");
  $(".modal-full-screen").toggleClass("none");
  var timer = setTimeout(() => {
    $("#submit-update").toggleClass("none");
    $(".modal-full-screen").toggleClass("none");
    clearTimeout(timer);
    timer = null;
  }, 1000);
});

// 批量删除
$("#delete-all").click(function () {
  $("#modal-delete").toggleClass("none");
  $(".modal-full-screen").toggleClass("none");
  // $(".all-check").trigger("click");
});


// 取消确认删除
$("#modal-delete>div>a:first-child+a").click(function () {
  $("#modal-delete").toggleClass("none");
  $(".modal-full-screen").toggleClass("none");

});


$(".supply-info-manage").on("click", ".fupdate", function () {
  $("#submit-update").toggleClass("none");
  $(".modal-full-screen").toggleClass("none");
  var timer = setTimeout(() => {
    $("#submit-update").toggleClass("none");
    $(".modal-full-screen").toggleClass("none");
  }, 2000);
});
