$(document).ready(function () {
  console.log(222);
  $(".list").on("click", function () {
    $("ul.list-1").slideToggle();
    var direction= $(this).children("b").hasClass("down");
    if (direction) {
      $(this).children("b").removeClass("down").addClass("up");
    } else {
      $(this).children("b").removeClass("up").addClass("down");
    };

  });
  $(".jie").on("click", function () {
    var back= $(this).children("i").hasClass("shu");
    if (back) {
      $(this).children("i").removeClass("shu");
    } else {
      $(this).children("i").addClass("shu");
    };
  })
  $(".sub").on('click', function () {
    $(".container-box").removeClass("none");
  })
  $(".deploy-sidebar").on("click", function () {
    console.log(111);
    var back= $(".header-box").hasClass("none");
    if (back) {
      $(".header-box").removeClass("none");
    } else {
      $(".header-box").addClass("none");
    };
  })
})
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




// $(".size").click(function(){
//  $(".size").removeClass("border-size");
// $(this).addClass("border-size");
// })
// $(".selectVal").click(function(){
// $(this).addClass(".selectVal-change");
// })
// $(".select").click(function () {
// $("#shadow").toggleClass("shadow-hide")
// })
$(".supplyType-left-ul-li").click(function () {
  $(".supplyType-left-ul-li").removeClass("supplyType-left-li-active");
  $(".supplyType-left-ul-li>ul").removeClass("supplyType-ul-right-active");
  $(this).addClass("supplyType-left-li-active");
  $(this).children("ul").addClass("supplyType-ul-right-active");
})
