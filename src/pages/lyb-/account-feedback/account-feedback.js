// function Contact(){
//     this.init();
// }
// // your code here
// Contact.prototype.init = function () {
//     var oDiv = document.getElementsByClassName("delete");
//     var oUl = document.querySelector("#J_List");
//     var oList = oUl.querySelectorAll("li"); 

//     for (var i = 0; i < oDiv.length; i++) {
//         (function (i) {
//             oDiv[i].onclick = function () {
//                 oList[i+1].remove();
//                 console.log(i);
//             }
//         })(i);
//     }
// }
// new Contact();


$("body").on("click",".delete",function(){
    event.preventDefault();
    $("#alert-success1").children().children("div").removeClass().addClass("right");
    $("#alert-success1").children().children("p").text("确定删除")
    $("#alert-success1").removeClass().addClass("show");


})
$(".confirm").click(function(){
    console.log($(this).html());
    $("#alert-success1").removeClass().addClass("no");
    //$(".delete-a").parent().parent().parent().remove();
})
$(".cancel").click(function(){
    console.log($(this).html());
    $("#alert-success1").removeClass().addClass("no");
    //$(this).parent().parent().parent().remove();
})
