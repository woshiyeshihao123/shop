$(document).ready(function () {
  $(".section-title h4+p").unbind().click(function () {
    $(this).parent().next().slideToggle();
    var tag = $(this).html();

    if (tag == '<span>展开</span><img src="../../h5-assets/img/index/drawable-xhdpi/show.png">') {
      $(this).html('<span>收起</span><img src="../../h5-assets/img/index/drawable-xhdpi/hide.png">')
    } else {
      $(this).html('<span>展开</span><img src="../../h5-assets/img/index/drawable-xhdpi/show.png">')
    }

  });
  $(".deploy-sidebar").on("click", function () {
    console.log(111);
    var back= $(".header-box").hasClass("none");
    if (back) {
      $(".header-box").removeClass("none");
      $(".modal-full-screen").toggleClass("none");
    } else {
      $(".header-box").addClass("none");
      $(".modal-full-screen").toggleClass("none");
    };
  })
});