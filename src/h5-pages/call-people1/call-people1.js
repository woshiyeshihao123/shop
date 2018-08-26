$("#call-phone").click(function () { 
  if ($("#bg").hasClass("disappear")) {
    $("#bg").removeClass("disappear");
    $("#call-people").removeClass("disappear");
    $("#bg").addClass("show");
    $("#call-people").addClass("show");
     }
})
$("#over").click(function () { 
  if ($("#bg").hasClass("show")) {
    $("#bg").removeClass("show");
    $("#call-people").removeClass("show");
    $("#bg").addClass("disappear");
    $("#call-people").addClass("disappear");
     }
})