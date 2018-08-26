$(document).ready(function () {
    var height = $('body').height() - 80;
    $('.complain-box').height(height);
    $('.tousu').on("click", function () {
        $(".complain-box").toggleClass('none');
    });
    $('a.lt>button').on("click", function () {
        $(".complain-box").addClass('none');
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
        $(this).children("span").addClass('chang');
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
function jump1(url) {
    window.location.href = url;
}
$("#call-phone").click(function () {
    if ($("#bg").hasClass("disappear")) {
        $("#bg").removeClass("disappear");
        $("#call-people").removeClass("disappear");
        $("#bg").addClass("show");
        $("#call-people").addClass("show");
    }
});
$("#over").click(function () {
    if ($("#bg").hasClass("show")) {
        $("#bg").removeClass("show");
        $("#call-people").removeClass("show");
        $("#bg").addClass("disappear");
        $("#call-people").addClass("disappear");
    }
});
$('#txt').change(function () {
    if ($("#txt").val().length < 10) {
        alert("字数最少10个");
    }
    if ($("#txt").val().length > 500) {
        alert("字数最多500个");
    }
});
$(".one").click(function () {
    $(".container-box").removeClass("none");
});
$(".two").click(function () {
    $(".container-box").addClass("none");
});
