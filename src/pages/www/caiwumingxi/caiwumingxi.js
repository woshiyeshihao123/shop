$(function() {
  $(".nav-top").children().click(function() {
    var $target = $(this);
    if ($target.is("#all")) {
      $target.addClass("active").siblings().removeClass("active");
      $target.parent().next().children(".buy-update").addClass("up");
      $target.parent().next().children(".online").addClass("up");
      $target.parent().next().children(".buy-vip").removeClass("up");
    } else if ($target.is("#buy")) {
      $target.addClass("active").siblings().removeClass("active");
      $target.parent().next().children(".buy-vip").addClass("up");
      $target.parent().next().children(".buy-update").addClass("up");
      $target.parent().next().children(".online").removeClass("up");
    } else if ($target.is("#shopp")) {
      $target.addClass("active").siblings().removeClass("active")
      $target.parent().next().children(".buy-vip").addClass("up");
      $target.parent().next().children(".online").addClass("up");
      $target.parent().next().children(".buy-update").removeClass("up");
    }
  });
});
