$("#uname").blur(function () {
    console.log("clicked");
    if ($("#uname").val() == "") {
        $("#uname").next().text("公司名称不能为空");
        return false;
    } else {
        $("#uname").next().text("");
        return true;
    }
})

$("#submit").click(function () {
    if (true) {
        $("#submit-success").toggleClass("none");
        var timer = setTimeout(function () {
            $("#submit-success").toggleClass("none");
            clearTimeout(timer);
            timer = null;
        }, 1000);
    } else {
        $("#submit-failed").toggleClass("none");
        var timer = setTimeout(function () {
            $("#submit-failed").toggleClass("none");
            clearTimeout(timer);
            timer = null;
        }, 1000);
    }    
});


var webload=(function(pickId){
    var $ = jQuery,
    $list,
    // 优化retina, 在retina下这个值是2
    ratio = window.devicePixelRatio || 1,
    action={type:'add',fileId:''},
    // 缩略图大小
    thumbnailWidth = 300 * ratio,
    thumbnailHeight =250 * ratio,

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
    }, 300, 250 );
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