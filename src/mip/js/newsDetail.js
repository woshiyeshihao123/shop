$(document).ready(function () {
   
    
    $(".ts").on("click", function () {
        $('.complain-box').toggleClass('none');
    })
    $(".complaint-one").on("click", function () {
        $('.complain-box').toggleClass('none');
    })
    var height = $('body').height() - 80;
    $('.complain-box').height(height);
    $('.toushu').on("click", function () {
        $(".complain-box").removeClass('none');
        $(this).removeClass('bei-1').addClass('bei');
    });
    $(".one").click(function () {
        $(".complain-box").removeClass("none");
    });
    $(".two").click(function () {
        $(".complain-box").addClass("none");
    });
});
