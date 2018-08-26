$('#main-tit').on('click', '[data-toggle="item"]', e => {
    var $tar = $(e.target);
    if (!$tar.parent().is("active")) {
      $tar.parent().addClass("active").siblings().removeClass("active");
      var id = $tar.attr("data-id");
      $(id).addClass("active").siblings().removeClass("active");
    }
  });
  $(function(){
    var oDropDown = $('.select');
    var oChangeA = $('.listA');
    oDropDown.click(function () {
      console.log(1);
       $(this).find('.selectList').toggle().siblings('.xl-icon').toggleClass('sq-icon');
   });

    oChangeA.click(function () {
      console.log(1);
        var oVal = $(this).text();
        $(this).parents('.listA-all').parents('.selectList').siblings('.selectVal').text(oVal)
    });
});
$(document).click(function (e) {
  if ($.contains(document.querySelector(".listA-all"), e.target)) {
    //点到列表上了，不做处理

  } else if($.contains(document.querySelector("#searh-information-box"), e.target)){
    //点到下拉按钮了，不做处理
  } else {
    $('.selectList').hide();
    $("#shadow").addClass("shadow-hide");
  }
})


$(".size").click(function(){
   $(".size").removeClass("border-size");
  $(this).addClass("border-size");
})
$(".selectVal").click(function(){
 $(this).addClass(".selectVal-change");
})
$(".select").click(function () {
  $("#shadow").toggleClass("shadow-hide");
})