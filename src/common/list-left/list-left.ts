$(".member-center-toggle-title").on("click",function( ){
    $(this).next().toggle(200);   
}); 
$(".member-center-list-box-item>a").on("click",function(){
    $(".member-center-list-box-item>a").removeClass("list-left-active");
    $(this).addClass("list-left-active");
    $(".member-center-list-box-item>a>span>b").removeClass("active-b");
    $(this).children().children("b").toggleClass("active-b");
});

$(".member-center-second-list>li>a").on("click", function () {
    $(".member-center-second-list>li>a").removeClass("font-orange");
    $(this).addClass("font-orange");
})