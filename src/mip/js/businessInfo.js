$(document).ready(function () {
    var height = $('body').height();
    $('.complaint-three').height(height);
    $(".deploy-sidebar").on("click", function () {
        console.log(111);
        var back = $(".header-box").hasClass("none");
        if (back) {
            $(".header-box").removeClass("none");
            $("#modalS").toggleClass("none");
        }
        else {
            $(".header-box").addClass("none");
            $("#modalS").toggleClass("none");
        }
        ;
    });
    $(".complaint-button").on("click", function () {
        console.log(222);
        var go = $(".complaint-three").hasClass("none");
        if (go) {
            $(".complaint-three").removeClass("none");
        }
        else {
            $(".complaint-three").addClass("none");
        }
    });
    $(".ts").on("click", function () {
        console.log(333);
        var come = $(".complaint-three").hasClass("none");
        if (come) {
            $(".complaint-three").removeClass("none");
            // $("#modalS").removeClass("none");
        }
        else {
            $(".complaint-three").addClass("none");
            // $("#modalS").addClass("none");
        }
    });
});
