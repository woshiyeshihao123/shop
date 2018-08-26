$(".open1").on("click",function () {
    $("#pay1").css('display', "block");
});
$(".open2").on("click",function () {
    $("#pay2").css('display', "block");
});
$(".open3").on("click",function () {
    $("#pay3").css('display', "block");
});
$(".md-close").on("click",function () {
    $("#pay1").css('display', 'none');
    $("#pay2").css('display', 'none');
    $("#pay3").css('display', 'none');
    $("#buy-success").css('display', 'none');
});
$(".modal-buy1").on("click",function(){
    $("#pay1").css('display', 'none');
    $("#buy-success").css('display', 'block');
    $(".md-content1").children("div").children("img").attr("src", "../../assets/img/photos/9-1/silver-medal.png");
    $(".md-content1").children("p").text("您已成功开通银牌会员！");
})
$(".modal-buy2").on("click",function(){
    $("#pay2").css('display', 'none');
    $("#buy-success").css('display', 'block');
    $(".md-content1").children("div").children("img").attr("src", "../../assets/img/photos/9-1/gold-medal.png");
    $(".md-content1").children("p").text("您已成功开通金牌会员！");
})
$(".modal-buy3").on("click",function(){
    $("#pay3").css('display', 'none');
    $("#buy-success").css('display', 'block');
    $(".md-content1").children("div").children("img").attr("src", "../../assets/img/photos/9-1/medal.png");
    $(".md-content1").children("p").text("您已成功开通钻石会员！");
})
