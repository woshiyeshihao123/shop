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


// 获取按钮 定时器
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

function pwddate() {
    var pwd1 = $("#pass-word1").val();
    var pwd2 = $("#pass-word2").val();
    
    if (pwd1 != pwd2) {
        $(".yan-z").removeClass("none");
    } else {
        $(".yan-z").addClass("none");
    }
}















