// 添加文件夹时可以命名文件夹的名字，点击文件夹名字可以重命名
// 点击打开时文件夹中的图片在下方 展示出
window.onload = function () {
}

function dianji() {
}
// 点击打开弹层
$("#outborder").on("click", "button", function () {
  if ($(this).hasClass("on")) {

  } else if ($(this).hasClass("off")) {
    // console.log(2222);
    //弹层

    $(this).next().removeClass("over");
    $(this).addClass("re");
    $(this).parent().addClass("re");
    $(this).next().next().removeClass("over");
  } else {
    $(".off").removeClass("re");
  }
})
//点击弹层外关闭弹层
$(document).click(function (e) {
  $(".in-bg").each(function () {
    if ($(e.target).parent(".in-bg").length==1) {
    }
    else if ($(e.target).parent().parent(".in-bg").length==1) {
    }
    else if ($(e.target).hasClass("off")) {
    } 
    else {
      $(".in-bg").removeClass("show");
      $(".in-bg").addClass("over");
      $(".three-titles").removeClass("high");
    }

     })
})
//获取当前按钮是整个按钮的第几个
$("body").on('click','button',function(){  
  // console.log("按钮是" + ($(this).index("button") + 1));
  obj = $(this);//获取当前元素
  h = obj.height();//元素高度
  obj.offset().top;//元素距离顶部高度
  wh = $(window).height();//浏览器窗口高度
  $(document).scrollTop();//滚动条高度
  xh = wh - (h + obj.offset().top - $(document).scrollTop());//元素到浏览器底部的高度
  // console.log("按钮到页面底部距离" + xh);
  if (xh < 600) {
    $(".three-titles").addClass("high");
  }
}) 



  //获取上传图片点击了几次
$(document).ready(function(){
  ag=0;
  $("#btn-button").click(function(){
    ag++;
  });
});
//上传文件夹
var i = Math.floor(Math.random() * 2);
console.log(i);
$("#btn-button").click(function () {
  //假设i=0是普通会员
  if (i == 0) {
    //小于20个文件夹,就是小于40个上传照片按钮加一个上传图片按钮
    if ($("button").length <= 41) {
      //第一列
      if (ag % 3 == 0) {
        var html = 
        " <div class='re'>"
        +" <img class='pic-box' src='' alt='' />"
        +" <img src='../../../assets/img/photos/8-6/delete-dir.png'  style='margin:0px;' onclick='                         this.parentElement.remove();                       '>"
        +" <button class='on'>上传照片</button>"
          + "<button class='off'>打开</button>"
          + "<input type='file' onchange='previewImage(this)' onclick='previewflag = $(this);console.log(previewflag);' />   "  
            +" <div class='in-bg over first ab'>"
               +"  <div> "
                   +" <img src='' alt='' />"
                   +"<img  id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                    +" <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                   +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                   +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                  +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                  +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
               +" </div>"
               +" <div>"
                  +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
               +" </div>"
               +" <div>"
                  + "  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                 +"</div>"
             +"</div>"
          +"</div>"
   $("#folder").before(html);
      }
      else if (ag%3==1) {
        var html =
        " <div class='re'>"
        +" <img class='pic-box'  src='' alt='' />"
        +" <img src='../../../assets/img/photos/8-6/delete-dir.png'  style='margin:0px;' onclick='                         this.parentElement.remove();                       '>"
        +" <button class='on'>上传照片</button>"
          + "<button class='off'>打开</button>"
          + "<input type='file' onchange='previewImage(this)' onclick='previewflag = $(this);console.log(previewflag);' />   "    
            +" <div class='in-bg over second ab'>"
               +"  <div> "
                   +" <img src='' alt='' />"
                   +"<img  id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                    +" <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                   +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                   +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                  +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                  +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
               +" </div>"
               +" <div>"
                  +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
               +" </div>"
               +" <div>"
                  + "  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                 +"</div>"
             +"</div>"
          +"</div>"
   $("#folder").before(html);
      }
      else if (ag % 3 == 2) {
        var html =
        " <div class='re'>"
        +" <img class='pic-box'  src='' alt='' />"
        +" <img src='../../../assets/img/photos/8-6/delete-dir.png'  style='margin:0px;' onclick='                         this.parentElement.remove();                       '>"
        +" <button class='on'>上传照片</button>"
          + "<button class='off re'>打开</button>"
          + "<input type='file' onchange='previewImage(this)' onclick='previewflag = $(this);console.log(previewflag);' />   "      
            +" <div class='in-bg over ab third'>"
               +"  <div> "
                   +" <img src='' alt='' />"
                   +"<img  id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                    +" <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                   +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                   +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                  +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                  +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
               +" </div>"
               +" <div>"
                  +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
               +" </div>"
               +" <div>"
                  + "  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                 +"</div>"
             +"</div>"
          +"</div>"
   $("#folder").before(html);
      }
    }
    else {
      console.log("普通会员添加20个文件夹");
    }
  }
  //假设i=1是vip会员
  else if(i == 1) {
    //小于200个文件夹,就是小于400个上传照片按钮加1个上传图片按钮
    if ($("button").length <= 401) {
      if (ag % 3 == 0) {
        var html =
        " <div class='re'>"
        +" <img class='pic-box' src='' alt='' />"
        +" <img src='../../../assets/img/photos/8-6/delete-dir.png'  style='margin:0px;' onclick='                         this.parentElement.remove();                       '>"
        +" <button class='on'>上传照片</button>"
          + "<button class='off'>打开</button>"
          + "<input type='file' onchange='previewImage(this)' onclick='previewflag = $(this);console.log(previewflag);' />   "      
            +" <div class='in-bg over first ab'>"
               +"  <div> "
                   +" <img src='' alt='' />"
                   +"<img  id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                    +" <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                   +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                   +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                  +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                  +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
               +" </div>"
               +" <div>"
                  +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
               +" </div>"
               +" <div>"
                  + "  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                 +"</div>"
             +"</div>"
          +"</div>"
   $("#folder").before(html);
      }
      else if (ag%3==1) {
        var html = 
        " <div class='re'>"
        +" <img class='pic-box' src='' alt='' />"
        +" <img src='../../../assets/img/photos/8-6/delete-dir.png'  style='margin:0px;' onclick='                         this.parentElement.remove();                       '>"
        +" <button class='on'>上传照片</button>"
          + "<button class='off'>打开</button>"
          + "<input type='file' onchange='previewImage(this)' onclick='previewflag = $(this);console.log(previewflag);' />   "      
            +" <div class='in-bg over second ab'>"
               +"  <div> "
                   +" <img src='' alt='' />"
                   +"<img  id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                    +" <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                   +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                   +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                  +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                  +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
               +" </div>"
               +" <div>"
                  +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
               +" </div>"
               +" <div>"
                  + "  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                 +"</div>"
             +"</div>"
          +"</div>"
   $("#folder").before(html);
      }
      else if (ag % 3 == 2) {
        var html = 
        " <div class='re'>"
        +" <img class='pic-box' src='' alt='' />"
        +" <img src='../../../assets/img/photos/8-6/delete-dir.png'  style='margin:0px;' onclick='                         this.parentElement.remove();                       '>"
        +" <button class='on'>上传照片</button>"
          + "<button class='off re'>打开</button>"
          + "<input type='file' onchange='previewImage(this)' onclick='previewflag = $(this);console.log(previewflag);' />   "      
            +" <div class='in-bg over ab third'>"
               +"  <div> "
                   +" <img src='' alt='' />"
                   +"<img  id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                    +" <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                   +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                   +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                  +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                +" </div>"
                +" <div>"
                  +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
               +" </div>"
               +" <div>"
                  +"  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
               +" </div>"
               +" <div>"
                  + "  <img src='' alt='' />"
                    +" <img id='delete' src='../../../assets/img/photos/8-6/delete-dir.png' style='margin:0px;width:40px;height:40px;'>"
                 +"</div>"
             +"</div>"
          +"</div>"
   $("#folder").before(html);
      }
    }
    else {
      console.log("普通会员添加200个文件夹");
    }
  }
})