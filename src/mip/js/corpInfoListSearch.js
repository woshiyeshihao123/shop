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
var showDom = document.querySelector('#choose'); // 绑定一个触发元素
var valDom = document.querySelector('#choose'); // 绑定一个存储结果的元素
showDom.addEventListener('click', function () {
    var val = showDom.dataset['id']; // 获取元素的data-id属性值
    var title = showDom.dataset['value']; // 获取元素的data-value属性值
    // 实例化组件
    var example = new IosSelect(3, // 第一个参数为级联层级，演示为1
    arr, // 演示数据
    {
        container: '.container',
        title: '地区选择',
        itemHeight: 50,
        itemShowCount: 3,
        oneLevelId: val,
        relation: [1, 1, 0, 0],
        callback: function (selectOneObj, selectTwoObj, selectThreeObj) {
            // console.log(selectOneObj);
            // console.log(selectTwoObj);
            valDom.value = selectOneObj.id;
            showDom.innerHTML = selectOneObj.value + "-" + selectTwoObj.value + "-" + selectThreeObj.value;
            showDom.dataset['id'] = selectOneObj.id;
            showDom.dataset['value'] = selectOneObj.value;
        }
    });
});
