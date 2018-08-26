
$(".supply-info-manage-title-left").on("click", function () {
    $(".supply-info-manage-title-left").removeClass("supply-info-manage-title-left-active");
    $(this).addClass("supply-info-manage-title-left-active");
    // 那就取消掉所有的全选
    $(".checkBox").children().removeClass("checkBox-right-active");
    if ($(this).index() == 0) {
        // 点到供应信息上了
        // 让供应信息显示出来
        if ($(".supply").hasClass("none")) {
            $(".supply").removeClass("none");
        } else {

        }
        // 让求购信息隐藏
        if ($(".buy").hasClass("none")) {

        } else {
            $(".buy").addClass("none")
        }
    } else if ($(this).index() == 1) {
        // 点到求购信息上了
        // 让求购信息显示出来
        if ($(".buy").hasClass("none")) {
            $(".buy").removeClass("none");
        } else {

        }
        // 让供应信息隐藏
        if ($(".supply").hasClass("none")) {

        } else {
            $(".supply").addClass("none");
        }
    }


});
// 给每个复选框设置打钩效果
$(".supply-info-manage-list .checkBox").click(function () {
    $(this).children().toggleClass("checkBox-right-active");
    if ($(this).children("div").hasClass("checkBox-right-active")) {

    } else {
        $(".supply-info-manage-dateline .checkBox").children().removeClass("checkBox-right-active");
    }
    var flag = 0;
    //如果是0表示要点全选，是1表示至少有个没选中，不点全选
    $(".supply-info-manage .supply-info-manage-list:not(.none) .checkBox").each(function () {
        if ($(this).children("div").hasClass("checkBox-right-active")) {
        //    当前这个被选中了 
            console.log("这个被选中了");    
        } else {
           //没被选中
            flag = 1;
            console.log("这个没被选中");
           
       }
    });
    if (flag == 0) {
        // 说明全部被选中了
        $(".all-check").trigger("click");
        flag = 0;
        console.log("要全选");
    } else if (flag == 1) {
        console.log("至少有个没选中，不用点全选")
    }

})

// 给全选的复选框设置点击效果
$("body").on("click", ".checkBox.all-check", function () {
    $(this).children().toggleClass("checkBox-right-active");

    if ($(this).children().hasClass("checkBox-right-active")) {
        // 就把下面所有的都选中 
        $(".supply-info-manage-list .checkBox").each(function () {

            if ($(this).children("div").hasClass("checkBox-right-active")) {

            } else {
                $(this).children("div").addClass("checkBox-right-active");
            }
        });
    } else {
        // 要取消全选
        $(".supply-info-manage-list .checkBox").each(function () {
            if ($(this).children("div").hasClass("checkBox-right-active")) {
                $(this).children("div").removeClass("checkBox-right-active");
            } else {

            }
        })
    }
});



// $(".supply-info-manage").on("click", ".supply-info-manage-list .checkBox", function () {
//     $(this).children("div").toggleClass("checkBox-right-active");
//     // 当有列表中有一个被取消勾时，最上面的全选勾要被取消掉
//     if ($(this).children("div").hasClass("checkBox-right-active")) {

//     } else {
//         $(".supply-info-manage-dateline .checkBox").children(".checkBox-right").removeClass("checkBox-right-active");
//     }
//     var flag = 0;
//     $(".supply-info-manage .supply-info-manage-list .checkBox").each(function () {
//         if ($(this).children("div").hasClass("checkBox-right-active")) {

//         } else {
//             flag = 1; 
//        }
//     });
//     console.log("全部都选中拉");
//     if (flag == 1) {

//         $(".checkBox.all-check").trigger("click");
//         flag = 0;
//     }

// });

// 点击输入框，日历弹出来
$(".calendar-line input").click(function () {
    $(this).next().next(".date-picker-container").toggleClass("none");
    $(this).next().toggleClass("b-active");
});




