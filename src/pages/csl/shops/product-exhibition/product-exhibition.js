// var $menu=$(".dropdown>a");
// $menu
// .on("click",function(){
//   $(this).next().next().toggle(200);
// });


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
