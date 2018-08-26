$(document).ready(function () {
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
    var height = $('body').height() - 80;
    $('.complain-box').height(height);
    $('.toushu').on("click", function () {
        $(".complain-box").removeClass('none');
        $(this).removeClass('bei-1').addClass('bei');
    });
    $(".complain-box button.two").click(function () {
        $(".complain-box").addClass("none");
        $(".toushu").removeClass('bei').addClass('bei-1');
    });
    $(".a-1").on("click", function () {
        $(this).children("span").attr("style", "margin-top:0");
        $(this).children("span").addClass('chang');
        $(this).children("img").attr("src", "../../../h5-assets/img/dianpu/home-1.png");
    });
    $(".a-2").on("click", function () {
        $(this).children("span").attr("style", "margin-top:0");
        $(this).children("span").addClass('chang');
        $(this).children("img").attr("src", "../../../h5-assets/img/dianpu/supply-1.png");
    });
    $(".a-3").on("click", function () {
        $(this).children("span").attr("style", "margin-top:0");
        $(this).children("span").addClass('chang');
        $(this).children("img").attr("src", "../../../h5-assets/img/dianpu/gou-1.png");
    });
    $(".a-4").on("click", function () {
        $(this).children("span").attr("style", "margin-top:0");
        $(this).children("span").addClass('chang');
        $(this).children("img").attr("src", "../../../h5-assets/img/dianpu/chanpin-1.png");
    });
    $(".a-5").on("click", function () {
        $(this).parent().nextAll().slideToggle();
        $(this).children("span").toggleClass('chang');
        console.log(33);
        console.log($(this).children("img").attr("src"));
        if ($(this).children("img").attr("src") == '/h5-assets/img/dianpu/shou.png' || $(this).children("img").attr("src") == '../../h5-assets/img/dianpu/shou.png') {
            console.log(33);
            $(this).children("span").html('全部');
            $(this).children("img").attr("src", "../../h5-assets/img/dianpu/all.png");
        }
        else {
            $(this).children("span").html('收起');
            $(this).children("img").attr("src", "../../h5-assets/img/dianpu/shou.png");
        }
    });
    $(".a-6").on("click", function () {
        $(this).children("span").attr("style", "margin-top:0");
        $(this).children("span").addClass('chang');
        $(this).children("img").attr("src", "../../../h5-assets/img/dianpu/dong-1.png");
    });
    $(".a-7").on("click", function () {
        $(this).children("span").attr("style", "margin-top:0");
        $(this).children("span").addClass('chang');
        $(this).children("img").attr("src", "../../../h5-assets/img/dianpu/zhaopin-1.png");
    });
    $(".a-8").on("click", function () {
        $(this).children("span").attr("style", "margin-top:0");
        $(this).children("span").addClass('chang');
        $(this).children("img").attr("src", "../../../h5-assets/img/dianpu/lianxi-2.png");
    });
    $(".a-9").on("click", function () {
        $(this).children("span").attr("style", "margin-top:0");
        $(this).children("span").addClass('chang');
        $(this).children("img").attr("src", "../../../h5-assets/img/dianpu/jieshao-1.png");
    });
    $(".a-10").on("click", function () {
        $(this).children("span").attr("style", "margin-top:0");
        $(this).children("span").addClass('chang');
        $(this).children("img").attr("src", "../../../h5-assets/img/dianpu/gongshan-1.png");
    });
});
