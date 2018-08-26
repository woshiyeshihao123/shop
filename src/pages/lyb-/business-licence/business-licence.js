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










var webload=(function(pickId){
    var $ = jQuery,
    $list,
    // 优化retina, 在retina下这个值是2
    ratio = window.devicePixelRatio || 1,
    action={type:'add',fileId:''},
    // 缩略图大小
    thumbnailWidth = 420 * ratio,
    thumbnailHeight =240 * ratio,

    // Web Uploader实例
    uploader;

// 初始化Web Uploader
uploader = WebUploader.create({

    // 自动上传。
    auto: false,

    // swf文件路径
    swf : '/view/common/assets/pc/js/Uploader.swf',

    // 文件接收服务端。
    server : '/picDemo',

    // 选择文件的按钮。可选。
    // 内部根据当前运行是创建，可能是input元素，也可能是flash.
    pick: {id:pickId,multiple:false},
    fileNumLimit:4,
    // 只允许选择文件，可选。
    accept: {
        title: 'Images',
        extensions: 'gif,jpg,jpeg,bmp,png',
        mimeTypes: 'image/*'
    },
    threads:5,
});

 //当有文件添加进来的时候
var all=0;
uploader.on( 'fileQueued', function( file ) {
	
    $list=$("#"+action.list);
    // console.log(action)
    var $img;
    if(action.type=="add"){
    all++;
    var $li = $(
            '<div id="' + file.id + '" class="file-item thumbnail">' +
                '<img>' 
            +
        '<div class="webupload-update" onclick="modify(this)" style="width:100px" value="' + file.id + '" pickId="' + action.pick + '">更换图片</div>' +
        '<div class="webupload-delete" onclick="removefile(this)" value="'+file.id+'" pickId="'+action.pick+'">删除</div>'+
            '</div>'
            );
    
    $img = $li.find('img');
    $list.append( $li );
    uploader.addButton({
           id: '#'+file.id+' .webupload-update',
           innerHTML: '更换图片'
        });
        uploader.upload(); 
    }else if(action.type=='modify'){
        // console.log('更换执行')
        $("#"+action.fileId).html( 
                '<img>' 
            +
            '<div class="webupload-update" onclick="modify(this)" style="width:100px"  value="' + file.id + '" pickId="' + action.pick + '">更换图片</div>' +
            '<div class="webupload-delete" onclick="removefile(this)" value="'+file.id+'" pickId="'+action.pick+'">删除</div>'+
            '</div>');
        
        $img = $("#"+action.fileId).find('img');
        uploader.removeFile(action.fileId);
        $("#"+action.fileId).attr("id",file.id);	
        uploader.addButton({
               id: '#'+file.id+' .webupload-update',
               innerHTML: '更换图片'
           });
        action.type='add';
        action.fileId='';
        uploader.upload();
    }
   $("#"+action.pick).hide();
    // 创建缩略图
    uploader.makeThumb( file, function( error, src ) {
        if ( error ) {
            $img.replaceWith('<span>不能预览</span>');
            return;
        }

        $img.attr( 'src', src );
    }, 420, 240 );
});

// 文件上传过程中创建进度条实时显示。
uploader.on( 'uploadProgress', function( file, percentage ) {
    var $li = $( '#'+file.id ),
        $percent = $li.find('.progress span');

    // 避免重复创建
    if ( !$percent.length ) {
        $percent = $('<p class="progress"><span></span></p>')
                .appendTo( $li )
                .find('span');
    }

    $percent.css( 'width', percentage * 100 + '%' );
});

// 文件上传成功，给item添加成功class, 用样式标记上传成功。
    i = 0;    
uploader.on( 'uploadSuccess', function( file ) {

});
    uploader.on('beforeFileQueued', function (file) {
     if(uploader.getStats().queueNum<=3 && action.type=='modify'){
         return true;
     }else if(uploader.getStats().queueNum<=3){
         return true;
     }else{
         return false;
     }
    })

    

// 文件上传失败，现实上传出错。
    t = 0;    
uploader.on( 'uploadError', function( file ) {
    var $li = $( '#'+file.id ),
        $error = $li.find('div.error');
    if(file.id!=null){  t++;}
    // 避免重复创建
    if ( !$error.length ) {
        $error = $('<div class="error"></div>').appendTo( $li );
    }
});
  //开始上传事件
   $("#ctlBtn").on('click', function () { 
       var w = Math.floor(Math.random() * 2);
       console.log(w);
       if (w == 0) {
           $("#success").removeClass("over");
           $("#success").addClass("show");
           $("#bg").removeClass("over");
           $("#bg").addClass("show");
           setTimeout(() => {
                       window.location.reload();
                    }, 3000);
       } else {
           $("#failed").removeClass("over");
           $("#failed").addClass("show");
           $("#bg").removeClass("over");
           $("#bg").addClass("show");
           setTimeout(() => {
                       window.location.reload();
                    }, 3000);
       }
   });
   removefile=function(btn){
	   all--;
       var id=$(btn).attr("value");	
       var pick=$(btn).attr("pickId");
       $("#"+pick).show();
       $("#"+id).remove();
       uploader.removeFile(id,true);
   }
   modify=function (btn){
       var id=$(btn).attr("value");
       action.type='modify';
       action.fileId=id;
       action.pick = $(btn).attr("pickId");

   }	
   $(pickId).on('click', function () {
       action.type='add';
       action.fileId='';
       action.list=$(this).attr("listId");	
       action.pick=$(this).attr("id");
   });

// 完成上传完了，成功或者失败，先删除进度条。
uploader.on( 'uploadComplete', function( file ) {
    $('#' + file.id).find('.progress').remove();
    console.log("上传成功次数" + i);
    console.log("上传失败次数" + t); 
//       if (i >=1&&i<=3) {
//       $("#success").removeClass("over");
//       $("#success").addClass("show");
//       $("#bg").removeClass("over");
//       $("#bg").addClass("show");
//       setTimeout(() => {
//                   window.location.reload();
//                }, 3000);
//   } else {
//       $("#failed").removeClass("over");
//       $("#failed").addClass("show");
//       $("#bg").removeClass("over");
//       $("#bg").addClass("show");
//       setTimeout(() => {
//                   window.location.reload();
//                }, 3000);
//   }
     });
    return webload;

})
$(function(){
   var web=new webload('.filePicker');
})