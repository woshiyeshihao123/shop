var $menu = $(".dropdown>a");
$menu.on("click", function() {
  $(this).next().next().toggle(200);
});

$('#mian-tit').on('click', '[data-toggle="item"]', e => {
  var $tar = $(e.target);
  if (!$tar.parent().is("active")) {
    $tar.parent().addClass("active").siblings().removeClass("active");
    var id = $tar.attr("data-id");
    $(id).addClass("active").siblings().removeClass("active");
  }
});


$(document).ready(function(){
  $(".modal-1").on("click",function(){
      $("#modal-1").removeClass("md-modal");
  })
  $(".md-close").on("click",function(){
      $("#modal-1").addClass("md-modal");
  })
});


$(document).ready(function(){
  $(".modal-2").on("click",function(){
      $("#modal-2").removeClass("md-modal");
  })
  $(".modal-buy").on("click",function(){
      $("#modal-2").addClass("md-modal");
  });
  $(".md-close").on("click",function(){
      $("#modal-2").addClass("md-modal");
  })
});

$(document).ready(function(){
  $(".modal-3").on("click",function(){
      $("#modal-3").removeClass("md-modal");
  })
  $(".md-close").on("click",function(){
      $("#modal-3").addClass("md-modal");
  })
});
