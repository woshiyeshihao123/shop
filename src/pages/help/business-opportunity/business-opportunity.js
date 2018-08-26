$(document).ready(function () {
    $(".inquiry").on("click",function(){
       $(".right-box").removeClass("none");
    });
    $(".close").on("click",function(){
        $(".right-box").addClass("none");
        // console.log($(this));
    });
});