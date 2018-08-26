
$(document).ready(function () {
    var height = $('body').height()-80;
    $('.complain-box').height(height);
  
    
    $('.toushu').on("click", function(){
      $(".complain-box").toggleClass('none');
    })
    $('a.lt>button').on("click", function(){
      $(".complain-box").addClass('none');
    })
    $(".a-1").on("click", function () {
      $(this).children("span").attr("style","margin-top:0") 
      $(this).children("span").addClass('chang');
      $(this).children("img").attr("src","../../../h5-assets/img/dianpu/home-1.png") 
    })
    $(".a-2").on("click", function () {
      $(this).children("span").attr("style","margin-top:0") 
      $(this).children("span").addClass('chang');
      $(this).children("img").attr("src","../../../h5-assets/img/dianpu/supply-1.png") 
    })
    $(".a-3").on("click", function () {
      $(this).children("span").attr("style","margin-top:0") 
      $(this).children("span").addClass('chang');
      $(this).children("img").attr("src","../../../h5-assets/img/dianpu/gou-1.png") 
    })
    $(".a-4").on("click", function () {
      $(this).children("span").attr("style","margin-top:0") 
      $(this).children("span").addClass('chang');
      $(this).children("img").attr("src","../../../h5-assets/img/dianpu/chanpin-1.png") 
    })
    $(".a-5").on("click", function () {
      $(this).parent().nextAll().slideToggle();
      $(this).children("span").addClass('chang');

      if ($(".img-btn").attr("src") == '../../../h5-assets/img/dianpu/all.png' || $(".img-btn").attr("src") == '/h5-assets/img/dianpu/all.png') {
        $(".img-btn").attr("src", '../../../h5-assets/img/dianpu/shou.png');
        $(".img-btn").next().html("收起");
      }
      else {
        console.log(2222);
        $(".img-btn").attr("src", '../../../h5-assets/img/dianpu/all.png');
        $(".img-btn").next().html("全部");
      } 

    })
    $(".a-6").on("click", function () {
      $(this).children("span").attr("style","margin-top:0") 
      $(this).children("span").addClass('chang');
      $(this).children("img").attr("src","../../../h5-assets/img/dianpu/dong-1.png") 
    })
    $(".a-7").on("click", function () {
      $(this).children("span").attr("style","margin-top:0") 
      $(this).children("span").addClass('chang');
      $(this).children("img").attr("src","../../../h5-assets/img/dianpu/zhaopin-1.png") 
    })
    $(".a-8").on("click", function () {
      $(this).children("span").attr("style","margin-top:0") 
      $(this).children("span").addClass('chang');
      $(this).children("img").attr("src","../../../h5-assets/img/dianpu/lianxi-2.png") 
    })
    $(".a-9").on("click", function () {
      $(this).children("span").attr("style","margin-top:0") 
      $(this).children("span").addClass('chang');
      $(this).children("img").attr("src","../../../h5-assets/img/dianpu/jieshao-1.png") 
    })
    $(".a-10").on("click", function () {
      $(this).children("span").attr("style","margin-top:0") 
      $(this).children("span").addClass('chang');
      $(this).children("img").attr("src","../../../h5-assets/img/dianpu/gongshan-1.png") 
    })
  })
  function jump1(url) {
    window.location.href = url;
  }




// 投诉

$(document).ready(function () {
  console.log(222);
  $(".list").on("click", function () {
    $("ul.list-1").slideToggle();
    var direction = $(this).children("b").hasClass("down");
    if (direction) {
      $(this).children("b").removeClass("down").addClass("up");
    } else {
      $(this).children("b").removeClass("up").addClass("down");
    };

  });
  $(".jie").on("click", function () {
    var back = $(this).children("i").hasClass("shu");
    if (back) {
      $(this).children("i").removeClass("shu");
    } else {
      $(this).children("i").addClass("shu");
      $(this).siblings().children("i").removeClass("shu");
      var text = $(this).children("span").html();
      $('.list').children("span").html(text);
    };
    

  })


  $(".com-plaints").on("click", function () {
    
    console.log(444);
    $(".tousu-box").removeClass("none");
  })
  $(".sub-btn").on('click', function () {
    $(".container-box").removeClass("none");
    var timer = setTimeout(() => {
      $(".container-box").addClass("none");
      clearTimeout(timer);
      timer = null;
    }, 1000);
  })

  $(".can-btn").on('click', function () {
    $(".tousu-box").addClass("none");
  })

  $(".black-cloth").on('click', function () {
    $(".tousu-box").addClass("none");
  })
})