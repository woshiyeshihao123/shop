$(document).ready(function () {
    console.log("2222");
    $(".inquiry").on("click", function () {
        $(".left-box").removeClass("none");
    });
    $(".close").on("click", function () {
        $(".left-box").addClass("none");
        // console.log($(this));
    });
    $(".pullBtn").unbind().click(function () {
        $(this).prev().toggleClass('small-height');
        $(this).prev().children().toggleClass('small-height');
        // $(this).prev().toggle(400);
    });
    $(".xuanze li").on("click", function () {
      $(this).children('a').css('color', 'red');
      $(this).siblings().children('a').css('color', '#333');
    })
  });
  