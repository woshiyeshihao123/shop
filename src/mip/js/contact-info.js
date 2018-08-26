// 页头
$(".all-btn").on("click", function () {
    // $("#icon-nav").hasClass("nav-height").removeClass("nav-height");
    console.log($(".img-btn").attr("src"));
    if ($(".img-btn").attr("src") == '../../../h5-assets/img/dianpu/all.png' || $(".img-btn").attr("src") == '/h5-assets/img/dianpu/all.png') {
        $(".img-btn").attr("src", '../../../h5-assets/img/dianpu/shou.png');
        $(".img-btn").parent().next().html("收起");
    }
    else {
        console.log(2222);
        $(".img-btn").attr("src", '../../../h5-assets/img/dianpu/all.png');
        $(".img-btn").parent().next().html("全部");
    }
    $("#icon-nav-second").toggleClass("none");
});
// 投诉
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
    $(".com-plaints").on("click", function () {
        $(".tousu-box").removeClass("none");
    });
    $(".sub-btn").on('click', function () {
        $(".container-box").removeClass("none");
        var timer = setTimeout(function () {
            $(".container-box").addClass("none");
            clearTimeout(timer);
            timer = null;
        }, 1000);
    });
    $(".can-btn").on('click', function () {
        $(".tousu-box").addClass("none");
    });
    $(".black-cloth").on('click', function () {
        $(".tousu-box").addClass("none");
    });
});
