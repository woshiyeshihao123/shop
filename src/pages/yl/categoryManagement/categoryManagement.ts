

//类别弹窗

$("#one-cate").click(function () {
    var i=$(this).attr("placeholder")
    console.log(i);
    if ($(this).attr("placeholder") == "请选择一级类别名称") {
        $(".one-cate").removeClass().addClass("one-cate-index");
    }
})
$("#two-cate").click(function () {
    var i=$(this).attr("placeholder")
    console.log(i);
    if ($(this).attr("placeholder") == "请选择二级类别名称") {
        $(".two-cate").removeClass().addClass("two-cate-index");
    }
})
$(document).click(function (e) {
    //console.log(1);
    $("#one-cate").each(function () { 
        //console.log(2);
        if ($.contains(this.parentElement, e.target)) { 
            //console.log(3);
            if ($("#one-cate").attr("placeholder") == "请选择一级类别名称") {
               // console.log(4);
                $(".one-cate").addClass("one-cate-index");
            }
        } else {
            $(".one-cate-index").removeClass().addClass("one-cate");
            //console.log(5);
        }
    })
    $("#two-cate").each(function () { 
        //console.log(2);
        if ($.contains(this.parentElement, e.target)) { 
           // console.log(3);
            if ($("#two-cate").attr("placeholder") == "请选择一级类别名称") {
               // console.log(4);
                $(".two-cate").addClass("two-cate-index");
            }
        } else {
            $(".two-cate-index").removeClass().addClass("two-cate");
            //console.log(5);
        }
    })

    //编辑的弹窗
    $("#two-categoryManagement").each(function(){
        if ($.contains(this.parentElement, e.target)) { 

         } else{
             $(".two-categoryManagement-ul").addClass("none");
         }   
    })


//文字
    $(".one-cate").children().children("li").each(function () {
        if ($.contains(this.parentElement, e.target)) {

            $(".one-cate-index").removeClass().addClass("one-cate");
        }
    
    })
    $(".two-cate").children().children("li").each(function () {
        if ($.contains(this.parentElement, e.target)) {
            $(".two-cate-index").removeClass().addClass("two-cate");
        }
    })
})
//填入类别的值
$(".one-cate").children().children("li").click(function () {
 
    //console.log(1);
    var text = $(this).children("a").html();
    $("#one-cate").attr("value", text);
    $(".one-cate-index").removeClass().addClass("one-cate");
 
})
$(".two-cate").children().children("li").click(function () {

    //console.log(text);
    var text = $(this).children("a").html();
    $("#two-cate").attr("value", text);
    $(".two-cate-index").removeClass().addClass("two-cate");
 
})

  //删除 
  $("body").on("click",".delete",function(){
    event.preventDefault();
    $("#alert-success1").children().children("div").removeClass().addClass("right");
    $("#alert-success1").children().children("p").text("确定删除")
    $("#alert-success1").removeClass().addClass("show");


})

$(".confirm").click(function(){
    console.log($(this).html());
    $("#alert-success1").removeClass().addClass("none");
    $(".one").addClass("none");
    $(".two-three").addClass("none");
    //$(".delete-a").parent().parent().parent().remove();
})

$(".cancel").click(function(){
    console.log($(this).html());
    $("#alert-success1").removeClass().addClass("none");
    //$(this).parent().parent().parent().remove();
})

    //编辑 
    $("body").on("click",".change-a",function(){
        //获取一级类别的值
        var onecate=$(this).parent().parent().children().eq(0).children().html();
        //获取二级类别的值
        var twocate=$(this).parent().parent().children().eq(1).children().html();
        //获取三级类别的值
        var threecate=$(this).parent().parent().children().eq(1).children().html();
        //console.log($(this).parent().parent().children().eq(1).children().html());
        if(twocate == ""){
            $(".one").removeClass("none");
            $("#one-categoryManagement").attr("value",onecate);
        }else{
            $(".two-three").removeClass("none");
            $("#two-categoryManagement").attr("value",twocate);
            $("#three-categoryManagement").attr("value",threecate);
        }
    })
    //关闭
        $(".close").on("click",function(){
            console.log(123);
            if(!$(".one").hasClass("none")){
                $(".one").addClass("none");
            }else if(!$(".two-three").hasClass("none")){
                $(".two-three").addClass("none");
            }else{

            }
        })

        //弹出二级类别选项
        $("#two-categoryManagement").click(function(){
            $(".two-categoryManagement-ul").removeClass("none");

        })
        //弹出二级类别选项的值添入input
        $(".two-categoryManagement-ul").children("li").click(function () {
 
            //console.log(1);
            var text = $(this).children("a").html();
            $("#two-categoryManagement").attr("value", text);
            $(".two-categoryManagement-ul").addClass("one-cate");
         
        })
