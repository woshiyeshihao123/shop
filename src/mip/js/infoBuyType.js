$(".supplyType-left-ul-li").click(function () {
    $(".supplyType-left-ul-li").removeClass("supplyType-left-li-active");
    $(".supplyType-left-ul-li>ul").removeClass("supplyType-ul-right-active");
    $(this).addClass("supplyType-left-li-active");
    $(this).children("ul").addClass("supplyType-ul-right-active");
});
