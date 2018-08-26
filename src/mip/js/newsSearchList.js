// $(function(){
//   var oDropDown = $('.select');
//   var oChangeA = $('.listA');
//  oDropDown.click(function(){
//      $(this).find('.selectList').toggle().siblings('.xl-icon').toggleClass('sq-icon');
//  });
//   oChangeA.click(function(){
//       var oVal = $(this).text();
//       $(this).parents('.listA-all').parents('.selectList').siblings('.selectVal').text(oVal)
//   });
// });
$(document).ready(function () {
    console.log(222);
    $(".list").on("click", function () {
        $("ul.list-1").slideToggle();
        var direction = $(this).children("b").hasClass("down");
        if (direction) {
            $(this).children("b").removeClass("down").addClass("up");
        }
        else {
            $(this).children("b").removeClass("up").addClass("down");
        }
        ;
    });
    $(".jie").on("click", function () {
        var back = $(this).children("i").hasClass("shu");
        if (back) {
            $(this).children("i").removeClass("shu");
        }
        else {
            $(this).children("i").addClass("shu");
            $(this).siblings().children("i").removeClass("shu");
            var text = $(this).children("span").html();
            $('.list').children("span").html(text);
        }
        ;
    });
    $(".sub").on('click', function () {
        $(".container-box").removeClass("none");
    });
    $(".deploy-sidebar").on("click", function () {
        console.log(111);
        var back = $(".header-box").hasClass("none");
        if (back) {
            $(".header-box").removeClass("none");
        }
        else {
            $(".header-box").addClass("none");
        }
        ;
    });
});
