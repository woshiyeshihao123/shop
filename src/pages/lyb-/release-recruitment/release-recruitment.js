$(function () {

    $("#checkboxAll1,#checkboxone1,#checkboxone2,#checkboxone3,#checkboxone4,#checkboxone5,#checkboxone6").on("click", function () {
        if($(this).hasClass("changeImage")){
            $(this).removeClass("changeImage");
            $(this).addClass("otherImage");
        }else if($(this).hasClass("otherImage")){
            $(this).addClass("changeImage");
            $(this).removeClass("otherImage");
            $("#checkboxAll1").addClass("changeImage");
            $("#checkboxAll1").removeClass("otherImage");
        }else if($("button[id^='checkboxone']").hasClass("otherImage")){
            $("#checkboxAll1").removeClass("changeImage");
            $("#checkboxAll1").addClass("otherImage");
            console.log(11111)
        }
    })
    $("#checkboxAll1").on("click", function () {
        if($(this).hasClass("otherImage")){
            $("#checkboxone1,#checkboxone2,#checkboxone3").removeClass("changeImage");
            $("#checkboxone1,#checkboxone2,#checkboxone3").addClass("otherImage");
        }else if($(this).hasClass("changeImage")){
            $("#checkboxone1,#checkboxone2,#checkboxone3").addClass("changeImage");
            $("#checkboxone1,#checkboxone2,#checkboxone3").removeClass("otherImage");
        }
    })
    $("#checkboxone1").click(function () {
        $("#checkboxone1").removeClass("changeImage");
        $("#checkboxone1").addClass("otherImage");
        $("#checkboxone2").removeClass("otherImage");
        $("#checkboxone2").addClass("changeImage");
        $("#checkboxone3").removeClass("otherImage");
        $("#checkboxone3").addClass("changeImage");
    })
    $("#checkboxone2").click(function () {
        $("#checkboxone2").removeClass("changeImage");
        $("#checkboxone2").addClass("otherImage");
        $("#checkboxone1").removeClass("otherImage");
        $("#checkboxone1").addClass("changeImage");
        $("#checkboxone3").removeClass("otherImage");
        $("#checkboxone3").addClass("changeImage");
    })
    $("#checkboxone3").click(function () {
        $("#checkboxone3").removeClass("changeImage");
        $("#checkboxone3").addClass("otherImage");
        $("#checkboxone2").removeClass("otherImage");
        $("#checkboxone2").addClass("changeImage");
        $("#checkboxone1").removeClass("otherImage");
        $("#checkboxone1").addClass("changeImage");
    })
})



// 图文编辑器

KindEditor.ready(function(K){
        
    window.editor=K.create('#editor',{
        cssPath:'plugins/code/prettify.css',
        ////后台处理图片的PHP文件
        uploadJson:'/news/upload-imge',
        //0：不能缩放，1：可缩放
        resizeType:0,
        allowPreviewEmoticons:true,
        allowImageUpload:true,
    })
});
  

$("#change-message-submit").one("click",function () {
    var i = Math.floor(Math.random() * 2); 
    console.log(i);
    if (i == 1) {
        $("#alert-success").children().children("div").removeClass().addClass("right");
        $("#alert-success").children().children("p").text("提交成功")
        $("#alert-success").removeClass().addClass("show");
    } else {
        $("#alert-success").children().children("div").removeClass().addClass("erro");
        $("#alert-success").children().children("p").text("提交失败 请重新提交")
        $("#alert-success").removeClass().addClass("show");
    }
    function closeSubmit() {
        
        $("#alert-success").delay(5000).removeClass().addClass("no");
        window.location.reload();
    }
    setTimeout(closeSubmit, 1000);
})