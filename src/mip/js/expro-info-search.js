$('#main-tit').on('click', '[data-toggle="item"]', function (e) {
    var $tar = $(e.target);
    if (!$tar.parent().is("active")) {
        $tar.parent().addClass("active").siblings().removeClass("active");
        var id = $tar.attr("data-id");
        $(id).addClass("active").siblings().removeClass("active");
    }
});
$(function () {
    var oDropDown = $('.select');
    var oChangeA = $('.listA');
    oDropDown.click(function () {
        $(this).find('.selectList').toggle().siblings('.xl-icon').toggleClass('sq-icon');
    });
    oChangeA.click(function () {
        var oVal = $(this).text();
        $(this).parents('.listA-all').parents('.selectList').siblings('.selectVal').text(oVal);
    });
});
$(".size").click(function () {
    $(".size").removeClass("border-size");
    $(this).addClass("border-size");
});
$(".selectVal").click(function () {
    $(this).addClass(".selectVal-change");
});
$(".select").click(function () {
    $("#shadow").toggleClass("shadow-hide");
});
