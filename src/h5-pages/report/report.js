$(document).ready(function () {
  console.log(222);
  function stopPropagation(e) {
    if (e.stopPropagation) 
      e.stopPropagation();//停止冒泡  非ie
    else
      e.cancelBubble = true;//停止冒泡 ie
  }
  $(document).bind('click',function(){
    $('.list-1').css('display','none');
  });
  $('.list-1').bind('click',function(e){
    stopPropagation(e);
  });
  $('.list-1').parent().bind('click',function(e){
      stopPropagation(e);
    });
  $(".list").on("click", function () {
    $("ul.list-1").slideToggle();
    var direction= $(this).children("b").hasClass("down");
    if (direction) {
      $(this).children("b").removeClass("down").addClass("up");
    } else {
      $(this).children("b").removeClass("up").addClass("down");
    };

  });
  $(".jie").on("click", function () {
    var back= $(this).children("i").hasClass("shu");
    if (back) {
      $(this).children("i").removeClass("shu");
    } else {
      $(this).children("i").addClass("shu");
      $(this).siblings().children("i").removeClass("shu");
      var text = $(this).children("span").html();
      $('.list').children("span").html(text);
    };
    $("ul.list-1").slideToggle();

  })
  $(".sub").on('click', function () {
    var i = Math.random();
    if (i > 0.5) {
      $(".container-box").removeClass("none");
    var timer=setTimeout(() => {
      $(".container-box").addClass("none");
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
    
  })
  $("#call-phone").on("click", function () { 
      $("#bg").removeClass("none");
      $("#call-people").removeClass("none");     
  })
  $("#over").on("click",function () { 
      $("#bg").addClass("none");
    $("#call-people").addClass("none");
       
  })

})

