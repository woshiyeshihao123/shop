$(".member-center-toggle-title").on("click",function( ){

    console.log(111);
    $(this).next().toggle(200);   
}); 
$(".member-center-list-box-item>a").on("click",function(){
    console.log(11);
    $(".member-center-list-box-item>a").removeClass("list-left-active");
    $(this).addClass("list-left-active");
    $(".member-center-list-box-item>a>span>b").removeClass("active-b");
    $(this).children().children("b").toggleClass("active-b");
});