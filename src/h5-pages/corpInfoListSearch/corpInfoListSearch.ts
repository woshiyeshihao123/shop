// $(".deploy-sidebar").on("click", function () {
//   console.log(111);
//   var back = $(".header-box").hasClass("none");
//   if (back) {
//     $(".header-box").removeClass("none");
//     $(".modal-full-screen").toggleClass("none");
//   } else {
//     $(".header-box").addClass("none");
//     $(".modal-full-screen").toggleClass("none");
//   };
// });

function jumpUrl(url) {
  window.location.href = url;
}

// 头部的选择
$("#select").on("click", "li", function () {
  $("#select li").removeClass("active");
  $(this).addClass("active");
});

// 地区选择
var arr = [];
arr.push(iosProvinces);
arr.push(iosCitys);
arr.push(iosCountys);

var showDom = document.querySelector('#choose');// 绑定一个触发元素
var valDom = document.querySelector('#choose');  // 绑定一个存储结果的元素
showDom.addEventListener('click', function () {  // 添加监听事件
  var val = showDom.dataset['id'];             // 获取元素的data-id属性值
  var title = showDom.dataset['value'];        // 获取元素的data-value属性值
  // 实例化组件
  var example = new IosSelect(3,               // 第一个参数为级联层级，演示为1
    arr,                             // 演示数据
    {
      container: '.container',             // 容器class
      title: '地区选择',                    // 标题
      itemHeight: 150,                      // 每个元素的高度
      headerHeight:90,
      itemShowCount: 3,                    // 每一列显示元素个数，超出将隐藏
      oneLevelId: val,                     // 第一级默认值
      relation: [1, 1, 0, 0], //[第一二级是否关联，第二三级是否关联，第三四级是否关联，第四五级是否关联] ，默认不关联，即默认是[0, 0, 0, 0]
      callback: function (selectOneObj,selectTwoObj,selectThreeObj) {  // 用户确认选择后的回调函数
        valDom.value = selectOneObj.id;
        showDom.innerHTML = selectOneObj.value+"-"+selectTwoObj.value+"-"+selectThreeObj.value;
        showDom.dataset['id'] = selectOneObj.id;
        showDom.dataset['value'] = selectOneObj.value;
      }
    });
});
