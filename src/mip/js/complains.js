$(".cancel").click(function () {
    $("#complains").toggleClass("none");
    $(".modal-full-screen").toggleClass("none");
});
$("#select-modal").on("click", ">ul>li", function () {
    // 给这个li下的下拉列表的每个下拉选项设置点击左侧边框
    $("#select-modal>ul>li>span").removeClass("active");
    $(this).children().addClass("active");
    // 点击后更换html内容
    $("#select-modal>a>span").html($(this).children().html());
    // $("#select-modal>ul").toggleClass("none");
});
// 点到该列表上，打开下拉列表
$("#select-modal>a").click(function () {
    $("#select-modal>ul").removeClass("none");
    // 顺便把小箭头变成向上的
    $("#select-modal>a>b").addClass("active");
});
// 点到列表外面，关闭下拉列表
$(document).click(function (e) {
    if ($.contains(document.querySelector("#select-modal"), e.target)) {
        // 点到列表里面了，或者点到证据及类型这一行了，不作处理
    }
    else {
        // 关闭下拉列表
        $("#select-modal>ul").addClass("none");
        // 把小箭头变成向下的
        $("#select-modal>a>b").removeClass("active");
    }
});
