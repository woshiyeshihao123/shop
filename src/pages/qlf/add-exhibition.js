$(".calendar-input").click(function () {
  $(this).next(".date-picker-container").toggleClass("none");
  console.log(11);
});
// 监听整个页面，没有点到日历上，就关闭日历，点到了，就返回选中的日期
$(document).click(function(e){
  $(".calendar-input").each(function(){
      if($.contains(this.parentElement,e.target)){
          // 点击到日历上了，不关闭日历
          // 调用日历中得到选中日期的函数
          
      }else{
          // 否则就关闭日历
          if($(this).next().hasClass("none")){

          }else{
              $(this).next().addClass("none");
          }
      }
  })
})

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

$(".calendar-inputtwo").click(function () {
    $(this).next(".date-picker-container").toggleClass("none");
    console.log(11);
  });
  // 监听整个页面，没有点到日历上，就关闭日历，点到了，就返回选中的日期
  $(document).click(function(e){
    $(".calendar-inputtwo").each(function(){
        if($.contains(this.parentElement,e.target)){
            // 点击到日历上了，不关闭日历
            // 调用日历中得到选中日期的函数
            
        }else{
            // 否则就关闭日历
            if($(this).next().hasClass("none")){
  
            }else{
                $(this).next().addClass("none");
            }
        }
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

    KindEditor.ready(function(K){
            
        window.editor=K.create('#editor1',{
            cssPath:'plugins/code/prettify.css',
            ////后台处理图片的PHP文件
            uploadJson:'/news/upload-imge',
            //0：不能缩放，1：可缩放
            resizeType:0,
            allowPreviewEmoticons:true,
            allowImageUpload:true,
        })
    });







