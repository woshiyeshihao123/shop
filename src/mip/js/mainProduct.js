$(document).ready(function () {
    console.log(222);
    $(".deploy-sidebar").on("click", function () {
        console.log(111);
        var back = $(".header-box").hasClass("none");
        if (back) {
            $(".header-box").removeClass("none");
        }
        else {
            $(".header-box").addClass("none");
        }
        ;
    });
});
