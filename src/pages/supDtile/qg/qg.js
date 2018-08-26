$(document).ready(function () {
  $(".pullBtn").unbind().click(function () {
    $(this).prev().children().not('.first').slideToggle();
    return false;
    // $(this).prev().toggle(400);
  });
});