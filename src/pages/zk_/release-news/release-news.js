// window.onload = function () {
//     // 正则判断,先测试电话号码,后期跟后端改为非法关键字
//     var regTianxie = (/1[34578]\d{9}/);
//     //失去焦点
//     function check(tips, reg) {
//         // tips = document.getElementById(""+tips);
//         // console.log(tips.value);
//         // console.log(document.getElementById("tianxie"));
//         // tips = document.getElementById(tips);
//         tips = $("#" + tips);
//         if (!reg.test(tips.val())) {
//             // 找到（含有非法的关键字需要显示红色)的标签.style.display="block";
//             // tips.nextElementSibling.nextElementSibling.style.display = "block";
//             tips.next().next().css("display", "block");
//             return false;
//         } else {
//             return true;
//         }
//     }
//     //获取焦点
//     function Fs(odder) {
//         // odder = document.getElementById(odder);
//         // odder.nextElementSibling.nextElementSibling.style.display = "none"; 
//         console.log($("#" + odder));
//         $("#" + odder).next().next().css("display", "none");
//         return false;
//     }
//     // 验证手机
//     //onblur 事件会在对象失去焦点时发生
//     tianxie.onblur = function () {
//         check("tianxie", regTianxie)
//     };
//     //onfocus是得到焦点
//     tianxie.onfocus = function () {
//         Fs("tianxie")
//     };
//     //表单提交
//     // var z = document.getElementById("success");
//     // var d = document.getElementById("failed");
//     // var x = document.getElementById("takeOn");
//     // x = $("#"+takeOn);
//     $("#"+takeOn).onclick = function () {
//         if (check(tianxie, regTianxie)) {
//             $("#"+takeOn).onclick = function () {
//                 $("#" + success).css("display", "block");
//                 // z.style.display = "block";
//                 setTimeout(() => {
//                     $("#" + success).css("display", "none");
//                     // z.style.display = "none";
//                     window.location.reload();
//                 }, 2000);
//             }
//         } else {
//             $("#"+takeOn).onclick = function () {
//                 $("#" + failed).css("display", "block");
//                 // d.style.display = "block";
//                 setTimeout(() => {
//                     $("#" + failed).css("display", "none");
//                     // d.style.display = "none";
//                     window.location.reload();
//                 }, 2000);
//         }
//     }
// }
// }
$("#takeOn").click(function () {
    var i = Math.floor(Math.random() * 2);
    console.log(i);
    if (i == 1) {
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

