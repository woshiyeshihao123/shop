$(document).ready(function(){
    $(".close-btn").each(function(){
        $(this).siblings("ul").show();
    });
    $(".cate-items").on("click",".close-btn",function(){
        $(this).addClass("open-btn").removeClass("close-btn");
        $(this).parent().parent().css("height","35px");
    });
    $(".cate-items").on("click",".open-btn",function(){
        console.log(1111);
        $(this).addClass("close-btn").removeClass("open-btn");
        $(this).parent().parent().removeAttr("style");
    });


});

$(document).ready(function(){
    $(".push-btn").each(function(){
        $(this).siblings("ul").show();
    });
    $(".choose-box").on("click",".push-btn",function(){
        
        $(this).addClass("pull-btn").removeClass("push-btn");
        $(this).parent().parent().css("height","28px");
        $(this).parent().parent().siblings("div").addClass("hidden-box");
    });
    $(".choose-box").on("click",".pull-btn",function(){
        
        $(this).addClass("push-btn").removeClass("pull-btn");
        $(this).parent().parent().removeAttr("style");
        $(this).parent().parent().siblings("div").removeClass("hidden-box")
    });


});