//页面切换
$("#change1").on("click",function (e) {
    $("#page1").css('display','block');
    $("#page2").css('display','none');
    $("#page3").css('display','none');
    $("#update-all").css('display','inline-block');
});
$("#change2").on("click",function(e){
    $("#page1").css('display','none');
    $("#page2").css('display','block');
    $("#page3").css('display','none');
    $("#update-all").css('display','none');
});
$("#change3").on("click",function(e){
    $("#page1").css('display','none');
    $("#page2").css('display','none');
    $("#page3").css('display','block');
    $("#update-all").css('display','none');
});

// 确认删除吗
$(".supply-info-manage").on("click", ".delete", function () {
  $("#modal-delete").toggleClass("none");
  $(".modal-full-screen").toggleClass("none");
});
// 取消确认删除
$("#modal-delete>div>a:first-child+a").on("click",function () {
  $("#modal-delete").toggleClass("none");
  $(".modal-full-screen").toggleClass("none");
});


// 批量更新
$("#update-all").on("click",function () {
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
$("#delete-all").on("click",function () {
  $("#modal-delete").toggleClass("none");
  $(".modal-full-screen").toggleClass("none");
});



$(".supply-info-manage").on("click", ".fupdate", function () {
  $("#submit-update").toggleClass("none");
  $(".modal-full-screen").toggleClass("none");
  var timer=setTimeout(() => {
    $("#submit-update").toggleClass("none");
    $(".modal-full-screen").toggleClass("none");
  }, 2000);
});
