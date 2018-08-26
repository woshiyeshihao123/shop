

// 点击输入框，日历弹出来
$(".calendar-input").click(function () {
    $(this).next(".date-picker-container").toggleClass("none");
    console.log(11);
});
// 监听整个页面，没有点到日历上，就关闭日历，点到了，就返回选中的日期
$(".calendar-line input").click(function () {
    $(this).next().next(".date-picker-container").toggleClass("none");
    $(this).next().toggleClass("b-active");
});
$("#friendshiplink-check").change(function(){
    console.log($(this).find("option:selected").text());
     var text=$(this).find("option:selected").text();
     if(text=="全部"){
        $(".friendship-link-message").eq(0).removeClass("none").siblings().addClass("none");
        $(".zhuangtai-time").removeClass("none");
     }else if(text=="审核通过"){
        $(".friendship-link-message").eq(1).removeClass("none").siblings().addClass("none");
        $(".zhuangtai-time").removeClass("none");
     }else if(text=="审核未通过"){
        $(".friendship-link-message").eq(2).removeClass("none").siblings().addClass("none");
        $(".zhuangtai-time").removeClass("none");
     }
})

  //删除
  $("body").on("click",".delete-a",function(){
    event.preventDefault();
    $("#alert-success1").children().children("div").removeClass().addClass("right");
    $("#alert-success1").children().children("p").text("确定删除")
    $("#alert-success1").removeClass().addClass("show");


})
$(".confirm").click(function(){
    console.log($(this).html());
    $("#alert-success1").removeClass().addClass("no");
    //$(".delete-a").parent().parent().parent().remove();
})
$(".cancel").click(function(){
    console.log($(this).html());
    $("#alert-success1").removeClass().addClass("no");
    //$(this).parent().parent().parent().remove();
})