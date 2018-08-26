
    $(".cl").unbind().click(function () {
       $(this).next().slideToggle();
      var backg = $(this).hasClass("quxiao");
      //console.log(backg);
      if (backg) {
        $(this).removeClass("quxiao");
      } else {
        $(this).addClass("quxiao");
      };
      
      // $(this).parent().css('margin-top', '0');
      // $(this).prev().toggle(400);
});
    