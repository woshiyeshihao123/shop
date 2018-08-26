$(document).ready(function () {
  $(".section-title h4+p").unbind().click(function () {
    $(this).parent().next().slideToggle();
    var tag = $(this).html();

    if (tag == '<span>展开</span><mip-img src="../../h5-assets/img/index/drawable-xhdpi/hide.png" class="mip-element mip-layout-container mip-img-loaded"><img class="mip-fill-content mip-replaced-content" src="../../h5-assets/img/index/drawable-xhdpi/show.png"><div class="mip-placeholder mip-placeholder-png"></div></mip-img>') {
      $(this).html('<span>收起</span><mip-img src="../../h5-assets/img/index/drawable-xhdpi/hide.png" class="mip-element mip-layout-container mip-img-loaded"><img class="mip-fill-content mip-replaced-content" src="../../h5-assets/img/index/drawable-xhdpi/hide.png"></mip-img>')
    } else {
      $(this).html('<span>展开</span><mip-img src="../../h5-assets/img/index/drawable-xhdpi/hide.png" class="mip-element mip-layout-container mip-img-loaded"><img class="mip-fill-content mip-replaced-content" src="../../h5-assets/img/index/drawable-xhdpi/show.png"></mip-img>')
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