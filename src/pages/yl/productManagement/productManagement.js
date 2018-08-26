
    //切换 界面
    $(".audit-switch-span").click(function(){       
        if(!$(this).hasClass("color-red")){
            $(this).addClass("color-red audit-switch-span")
                    .siblings().removeClass();
            var id=$(this).attr("href");
            $(id).addClass("in").siblings().removeClass("in");
        }
        if($(this).html()=="审核通过的产品"){
            $(".all").removeClass().addClass("all choose-noright");
            $(".all-change").removeClass("all-change-hide");
            $(".choose1").children().removeClass().addClass("choose-noright");
            $(".choose2").children().removeClass().addClass("choose-noright");
            $(".choose3").children().removeClass().addClass("choose-noright");
        }else if($(this).html()=="待审核的产品"){
            $(".all").removeClass().addClass("all choose-noright");
            $(".all-change").addClass("all-change-hide");
            $(".choose1").children().removeClass().addClass("choose-noright");
            $(".choose2").children().removeClass().addClass("choose-noright");
            $(".choose3").children().removeClass().addClass("choose-noright");
        }else if($(this).html()=="审核未通过的产品"){
            $(".all").removeClass().addClass("all choose-noright");
            $(".all-change").addClass("all-change-hide");
            $(".choose1").children().removeClass().addClass("choose-noright");
            $(".choose2").children().removeClass().addClass("choose-noright");
            $(".choose3").children().removeClass().addClass("choose-noright");
        }
    })
    //全选
        $(".all").click(function(){
            if($(".audit-switch-span").parent().children().eq(0).hasClass("color-red")){
                if($(this).hasClass("choose-noright")){
                    $(this).removeClass().addClass("all choose-right");
                    $(".choose1").children().removeClass().addClass("choose-right");
                }else{
                    $(this).removeClass().addClass("all choose-noright"); 
                    $(".choose1").children().removeClass().addClass("choose-noright") ;
                }
            }else 
                if($(".audit-switch-span").parent().children().eq(1).hasClass("color-red")){
                    if($(this).hasClass("choose-noright")){
                        $(this).removeClass().addClass("all choose-right");
                        $(".choose2").children().removeClass().addClass("choose-right");
                    }else{
                        $(this).removeClass().addClass("all choose-noright"); 
                        $(".choose2").children().removeClass().addClass("choose-noright") ;
                    }
                }else 
                    if($(".audit-switch-span").parent().children().eq(2).hasClass("color-red")){
                        if($(this).hasClass("choose-noright")){
                            $(this).removeClass().addClass("all choose-right");
                            $(".choose3").children().removeClass().addClass("choose-right");
                        }else{
                            $(this).removeClass().addClass("all choose-noright"); 
                            $(".choose3").children().removeClass().addClass("choose-noright") ;
                        }
                    }
        })  




        //选中 非选中
            //审核通过页面
            $("body").on("click",".choose1",function(){
                //console.log(1);
                if($(this).children().hasClass("choose-noright")){
                    $(this).children().removeClass().addClass("choose-right");
                }else{
                    $(this).children().removeClass().addClass("choose-noright") ;
                };
                //console.log($("li[class='choose1']").length)
                //查找当前子元素的个数
                var l=$("li[class='choose1']").length;
                for(var i=0;i<l;i++){
                    var ul=$(this).parents().parents().children("ul")
                    console.log(ul.length);
                    if(ul.eq(i+1).children().eq(0).children().eq(0).hasClass("choose-right")){
                            // console.log(li.eq(i).children().eq(0).children().eq(0).hasClass("choose-right"));
                            $(".all").removeClass().addClass("all choose-right");
                            continue;
                        }else{
                            $(".all").removeClass().addClass("all choose-noright");
                            break;
                            //console.log(li.eq(i).children().eq(0).children().eq(0).hasClass("choose-right"));
                        }
                }   
                
            }
        )



        //待审核 页面
        $("body").on("click",".choose2",function(){
            //console.log(1);
            if($(this).children().hasClass("choose-noright")){
                $(this).children().removeClass().addClass("choose-right");
            }else{
                $(this).children().removeClass().addClass("choose-noright") ;
            };
            //console.log($("li[class='choose1']").length)
            //查找当前子元素的个数
            var l=$("li[class='choose2']").length;
            for(var i=0;i<l;i++){
                var ul=$(this).parents().parents().children("ul")
                console.log(ul.length);
                if(ul.eq(i+1).children().eq(0).children().eq(0).hasClass("choose-right")){
                        // console.log(li.eq(i).children().eq(0).children().eq(0).hasClass("choose-right"));
                        $(".all").removeClass().addClass("all choose-right");
                        continue;
                    }else{
                        $(".all").removeClass().addClass("all choose-noright");
                        break;
                        //console.log(li.eq(i).children().eq(0).children().eq(0).hasClass("choose-right"));
                    }
            }   
            
        }
    )
    //全选
   

    
 


        //审核未通过
        $("body").on("click",".choose3",function(){
            //console.log(1);
            if($(this).children().hasClass("choose-noright")){
                $(this).children().removeClass().addClass("choose-right");
            }else{
                $(this).children().removeClass().addClass("choose-noright") ;
            };
            //console.log($("li[class='choose1']").length)
            //查找当前子元素的个数
            var l=$("li[class='choose3']").length;
            for(var i=0;i<l;i++){
                var ul=$(this).parents().parents().children("ul")
                console.log(ul.length);
                if(ul.eq(i+1).children().eq(0).children().eq(0).hasClass("choose-right")){
                        // console.log(li.eq(i).children().eq(0).children().eq(0).hasClass("choose-right"));
                        $(".all").removeClass().addClass("all choose-right");
                        continue;
                    }else{
                        $(".all").removeClass().addClass("all choose-noright");
                        break;
                        //console.log(li.eq(i).children().eq(0).children().eq(0).hasClass("choose-right"));
                    }
            }   
            
        })



        // 点击输入框，日历弹出来

// 监听整个页面，没有点到日历上，就关闭日历，点到了，就返回选中的日期
$(".calendar-line input").click(function () {
    $(this).next().next(".date-picker-container").toggleClass("none");
    $(this).next().toggleClass("b-active");
})


//更新
$(".all-change").on("click",function () {
    
        $("#alert-success").children().children("div").removeClass().addClass("right");
        $("#alert-success").children().children("p").text("更新成功")
        $("#alert-success").removeClass().addClass("show");
    
    function close() {
        
        $("#alert-success").delay(5000).removeClass().addClass("no");
        window.location.reload();
    }
    setTimeout(close, 2000);
})
$("body").on("click",".change-a",function () {
    
    $("#alert-success").children().children("div").removeClass().addClass("right");
    $("#alert-success").children().children("p").text("更新成功")
    $("#alert-success").removeClass().addClass("show");

function close() {
    
    $("#alert-success").delay(5000).removeClass().addClass("no");
    window.location.reload();
}
setTimeout(close, 2000);
})

  //删除
$("body").on("click",".delete-a",function(){
    event.preventDefault();
    $("#alert-success1").children().children("div").removeClass().addClass("right");
    $("#alert-success1").children().children("p").text("确定删除")
    $("#alert-success1").removeClass().addClass("show");
    $(this).parent().parent().parent().find(".choose-noright").trigger("click");

})
$(".all-delete").click(function(){
    event.preventDefault();
    $("#alert-success1").children().children("div").removeClass().addClass("right");
    $("#alert-success1").children().children("p").text("确定删除")
    $("#alert-success1").removeClass().addClass("show");


})
$(".confirm").click(function(){
    console.log($(this).html());
    $("#alert-success1").removeClass().addClass("no");
    //$(".delete-a").parent().parent().parent().remove();
})
$(".cancel").click(function(){
    console.log($(this).html());
    $("#alert-success1").removeClass().addClass("no");
    //$(this).parent().parent().parent().remove();
})
