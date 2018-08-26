$(document).ready(function(){
    $(".modal-1").on("click",function(){
        $("#modal-1").removeClass("md-modal");
    })
    $(".md-close").on("click",function(){
        $("#modal-1").addClass("md-modal");
    })
});


$(document).ready(function(){
    $(".modal-2").on("click",function(){
        $("#modal-2").removeClass("md-modal");
    })
    $(".modal-buy").on("click",function(){
        $("#modal-2").addClass("md-modal");
    });
    $(".md-close").on("click",function(){
        $("#modal-2").addClass("md-modal");
    })
});

$(document).ready(function(){
    $(".modal-3").on("click",function(){
        $("#modal-3").removeClass("md-modal");
    })
    $(".md-close").on("click",function(){
        $("#modal-3").addClass("md-modal");
    })
});


$(document).ready(function(){
    $(".modal-buy").on("click",function(){
        $("#modal-4").removeClass("md-modal");
    })
    $(".md-close").on("click",function(){
        $("#modal-4").addClass("md-modal");
    })
});


$(".img-url").click(function(){
    $(".img-url").removeClass("img-url-choosed")
    $(this).addClass("img-url-choosed");
})