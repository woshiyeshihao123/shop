// $(document).ready(function(){
//     $(".close_menu").each(function(){
//         $(this).siblings("ul").hide();
//     });
//     $(document).on("click",".close_menu span",function(){
//         $(this).parent().addClass("open_menu").removeClass("close_menu");
//         $(this).parent().siblings("ul").fadeIn();

//     });
//     $(document).on("click",".open_menu span",function(){
//         $(this).parent().addClass("close_menu").removeClass("open_menu");
//         $(this).parent().parent().find("ul").hide();

//     });

// });
 // $(".modify-btn").each(function(){
    //     $(this).parent().parent().parent()
    //     .siblings(".pop-dis").hide();
    // });


// // 获取按钮 定时器
// function task(){
//     var end=new Date()
// }
// task()
// var timer=setInterval(task,60000);
//     //为btn绑定单击事件
//     document.getElementById("btn")
//       .onclick=function(){
//       //如果timer中不是空
//       if(timer!=null){//停止定时器
//         clearInterval(timer);
//         timer=null;
//         this.className="play";
//       }else{//否则,启动定时器
//         timer=setInterval(task,60000);
//         this.className="pause";
//       }
//     }

$(document).ready(function(){
//    console.log(23);
    $(".modify-btn").on("click",function(){
        // console.log("1");
        // $(this).parent().parent().parent()
        // .siblings("#pop-up").removeClass("pop-dis");
        $("#pop-up").removeClass("pop-dis");

    });

    $("#cancel-btn").on("click",function(){
        console.log(111);
        $("#pop-up").addClass("pop-dis");
    });
    $("#sure-btn").on("click",function(){
        console.log(111);
        $("#pop-up").addClass("pop-dis");
    });

});















