// 投诉
$(document).ready(function () {
  console.log(222);
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
    

  })


  $(".com-plaints").on("click", function () {
    // $(".black-cloth").removeClass("none");
    // $(".tousu-pic").removeClass("none");
    // $(".container").removeClass("none");
    $(".tousu-box").removeClass("none");
  })
  $(".sub-btn").on('click', function () {
    $(".container-box").removeClass("none");
    var timer=setTimeout(() => {
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
  // $(".deploy-sidebar").on("click", function () {
  //   console.log(111);
  //   var back= $(".header-box").hasClass("none");
  //   if (back) {
  //     $(".header-box").removeClass("none");
  //   } else {
  //     $(".header-box").addClass("none");
  //   };
  // })


  // $("#call-phone").on("click", function () { 
  //     $("#bg").removeClass("none");
  //     $("#call-people").removeClass("none");     
  // })


  // $("#over").on("click",function () { 
  //     $("#bg").addClass("none");
  //   $("#call-people").addClass("none");
       
  // })

})



// 选择类别
$(".supplyType-left-ul-li").click(function () {
  $(".supplyType-left-ul-li").removeClass("supplyType-left-li-active");
  $(".supplyType-left-ul-li>ul").removeClass("supplyType-ul-right-active");
  $(this).addClass("supplyType-left-li-active");
  $(this).children("ul").addClass("supplyType-ul-right-active");
})


$(".divide-btn").on('click', function () {
  $(".Select-category").toggleClass("none");
  $(".devide-cloth").toggleClass("none");
})

$(".close-btn").on('click', function () {
  $(".Select-category").addClass("none");
  $(".devide-cloth").addClass("none");
})

$(".devide-cloth").on('click', function () {
  $(".Select-category").addClass("none");
  $(".devide-cloth").addClass("none");
})











// 页头

$(".all-btn").on("click", function () {
  // $("#icon-nav").hasClass("nav-height").removeClass("nav-height");
  console.log($(".img-btn").attr("src"));
  if($(".img-btn").attr("src")=='../../../h5-assets/img/dianpu/all.png'||$(".img-btn").attr("src")=='/h5-assets/img/dianpu/all.png'){
    $(".img-btn").attr("src",'../../../h5-assets/img/dianpu/shou.png');
     $(".img-btn").parent().next().html("收起");
  }
  else{
    console.log(2222);
    $(".img-btn").attr("src",'../../../h5-assets/img/dianpu/all.png');
   $(".img-btn").parent().next().html("全部");
    
    
  }
  $("#icon-nav-second").toggleClass("none");
})
//查看更多
$(".see-more").on("click", function () {
  
  $(".see-more").removeClass("see-more").addClass("none");
  $(".introduct-detail").removeClass("more-show");
})









