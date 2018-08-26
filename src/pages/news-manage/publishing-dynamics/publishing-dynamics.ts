//提交按钮
$('.submit').click(function () {
    $(".box").css('display', 'none');
    $(".box1").css('display', 'block');
})

//返回按钮
$('.back').click(function () {
    $(".box1").css('display', 'none');
    $(".box").css('display', 'block');
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