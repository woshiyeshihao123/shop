$("#radio-two .checkbox-span-choose").on("click", function () {
  $(".checkbox-span-choose").removeClass("checkbox-span-choose-active");
  $(this).addClass("checkbox-span-choose-active");
});
$("#no-limit").click(function () {
  $(this).toggleClass("checkbox-span-choose-active");
});


$(".release-info-message-type-onetwothree>.type-choose").focus(function () {
  $(this).next(".alert-box").toggleClass("none");
});
$(document).click(function(e){
    $(".release-info-message-type-onetwothree").each(function(){
      if($.contains(this,e.target)){

      }else{
        $(this).children(".alert-box").addClass("none");
      }
    })
});
$(".release-info-message-type-onetwothree>.alert-box").click(function (e) {
 if($(e.target).is("a")){
  $(this).prev().val($(e.target).html());
 }
  $(this).toggleClass("none");
});

$("#company-intro a").click(function () {
  $(".modal-full-screen").toggleClass("none");
  $("#submit-success").toggleClass("none");
  var timer = setTimeout(function () {
    $(".modal-full-screen").toggleClass("none");
    $("#submit-success").toggleClass("none");
    clearTimeout(timer);
    timer=null;
  }, 500);
});

$(".btn-release-info-message-type").click(function () {
  $(".feedback-modal").toggleClass("none");
  $(".modal-full-screen").toggleClass("none");
});
$(".feedback-modal #close-icon").click(function () {
  $(this).parent().parent().toggleClass("none");
  $(".modal-full-screen").toggleClass("none");
})

