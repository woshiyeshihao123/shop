$(document).ready(function () {
  var height = $('body').height();
  $('.complaint-three').height(height);
  $(".deploy-sidebar").on("click", function () {
    console.log(111);
    var back = $(".header-box").hasClass("none");
    if (back) {
      $(".header-box").removeClass("none");
      $(".modal-full-screen").toggleClass("none");
    } else {
      $(".header-box").addClass("none");
      $(".modal-full-screen").toggleClass("none");
    };
  })
  $(".complaint-button").on("click", function () {
    console.log(222);
    var go = $(".complaint-three").hasClass("none");
    if (go) {
      $(".complaint-three").removeClass("none");
    } else {
      $(".complaint-three").addClass("none");
    }
  })
  $(".ts").on("click", function () {
    console.log(333);
    var come = $(".complaint-three").hasClass("none");
    if (come) {
      $(".complaint-three").removeClass("none");
      $(".modal-full-screen").toggleClass("none");
    } else {
      $(".complaint-three").addClass("none");
      $(".modal-full-screen").toggleClass("none");
    }
  })
  $(".one").on("click", function () {
    $('.container-box').removeClass("none");
    console.log(111);
    var timer = setTimeout(() => {
      $('.container-box').addClass("none");
        $('.complaint-three').addClass("none");
        // $("#y").trigger("click");
        // $("#x").trigger("click");
        clearTimeout(timer);
        timer = null;
    }, 2000);
  })
  $(".cancel").click(function () {
    $(".complaint-three").addClass("none");
  })
})