$("#tc").click(function () {
  window.location.replace("../supplyType/supplyType.html");
})

$(".two").on("click", function(){
  $(".complain-box").addClass('none');
})
$(".toushu").on("click", function(){
  $(".complain-box").toggleClass('none');
})

$(".all-btn").on("click",function(){
    
    console.log($(".img-btn").attr("src"));
    if($(".img-btn").attr("src")=='../../h5-assets/img/dianpu/all.png'||$(".img-btn").attr("src")=='/h5-assets/img/dianpu/all.png'){
      $(".img-btn").attr("src",'../../h5-assets/img/dianpu/shou.png');
       $(".img-btn").parent().next().html("收起");
    }
    else{
      $(".img-btn").attr("src",'../../h5-assets/img/dianpu/all.png');
     $(".img-btn").parent().next().html("全部");
      
      
    }
    $("#icon-nav-second").toggleClass("none");
})
$(".a-0").click(function(){
        window.location.replace("../chens/storeShop/store-shop.html");
})
$(".a-1").click(function(){
  window.location.replace("../supplyInfoNew/supplyInfoNew.html");
})
$(".a-2").click(function(){
  window.location.replace("../infoBuyList/infoBuyList.html");
})
$(".a-3").click(function(){
  window.location.replace("../product-show/product-show.html");
})
$(".a-5").click(function(){
  window.location.replace("");
})
$(".a-6").click(function(){
  window.location.replace("../complain/recruit-list/recruit-listl.html");
})
$(".a-7").click(function(){
  window.location.replace("");
})
$(".a-8").click(function(){
  window.location.replace("../corpInductor/corpInductor.html");
})
$(".a-9").click(function () {
  window.location.replace("");
}) 
$("#call-phone").on("click", function () { 
  $("#bg").removeClass("none");
  $("#call-people").removeClass("none");     
})
$("#over").on("click",function () { 
  $("#bg").addClass("none");
$("#call-people").addClass("none");
   
})

// 点击查看
$(".on-more").on("click", function () {
  $(".main-box").removeClass("none");
  $(".black-cloth").removeClass("none");
})
  
  $(".black-cloth").on("click", function () { 
  $(".main-box").addClass("none");
  $(".black-cloth").addClass("none");
})


$(".see-btn").on("click", function () {
  $(".section-ul2").removeClass("none");
  $(".black-cloth").removeClass("none");
})
  
  $(".black-cloth").on("click", function () { 
  $(".section-ul2").addClass("none");
  
})