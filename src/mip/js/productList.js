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
