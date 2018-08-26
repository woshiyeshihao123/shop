$(document).ready(function () {
  console.log("2222");
  $(".inquiry").on("click", function () {
      $(".left-box").removeClass("none");
  });
  $(".close").on("click", function () {
      $(".left-box").addClass("none");
      // console.log($(this));

    });
    $('.left-box').children('button').on('click', function () {
        console.log($(this));
        var input = $('.left-box ul li:eq(3)').children('input');
            var email = $('.left-box ul li:eq(3)').children('input').val;
            var reg =/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
            if(!reg.test(email)){
            alert("*邮箱不合法");
        }
        
            
        var i = Math.random();
        if (i > 0.5) {
          $(".container-box").removeClass("none");
        var timer=setTimeout(() => {
            $(".container-box").addClass("none");
            $(".left-box").addClass('none');  
            clearTimeout(timer);
            timer = null;
        }, 1000);
        }
        else {
          $(".container-box-1").removeClass("none");
        var timer=setTimeout(() => {
          $(".container-box-1").addClass("none");
            clearTimeout(timer);
            timer = null;
        }, 1000);
        }
    
    
    }
       
    );
    

  $(".pullBtn").unbind().click(function () {
      $(this).prev().toggleClass('small-height').attr("overflow","hidden");
      $(this).prev().children().toggleClass('small-height');
      // $(this).prev().toggle(400);
  });
  $(".xuanze li").on("click", function () {
    $(this).children('a').css('color', 'red');
    $(this).siblings().children('a').css('color', '#333');
  })
});
