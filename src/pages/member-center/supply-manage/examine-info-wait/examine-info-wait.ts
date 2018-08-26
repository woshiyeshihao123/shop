$(".examine-info-wait-title>a").on("click", function () {
    $(".examine-info-wait-title>a").removeClass("a-active");
    $(this).addClass("a-active");
    // 那就取消掉所有的全选
    $(".checkBox").children().removeClass("checkBox-right-active");
    if ($(this).index() == 0) {
        // 就说明点到待审核上面了
        
        if ($(".wait-fot-pass").hasClass("none")) {
            // 把待审核的显示出来
            $(".wait-fot-pass").removeClass(("none"));
            if ($(".unpassed-type").hasClass("v-none")) {
                
            } else {
                $(".unpassed-type").addClass("v-none");
            }
        }
        // 然后把审核未通过的隐藏掉
        if ($(".unpassed").hasClass("none")) {

        } else {
            $(".unpassed").addClass("none");
        }
    } else if ($(this).index() == 1) {
        //就说明点到审核未通过上面了
        if ($(".wait-fot-pass").hasClass("none")) {

        } else {
            $(".wait-fot-pass").addClass("none");
        }
        // 然后把审核未通过的显示出
        if ($(".unpassed").hasClass("none")) {
            $(".unpassed").removeClass("none");
            $(".unpassed-type").removeClass("v-none");
        } else {
        }
    }
});

$("#examine-info-wait").on("click", ".examine-info-wait-li .checkBox", function () {
    $(this).children("div").toggleClass("checkBox-right-active");
    // 当有列表中有一个被取消勾时，最上面的全选勾要被取消掉
    if ($(this).children("div").hasClass("checkBox-right-active")) {

    } else {
        $(".supply-info-manage-dateline .checkBox").children(".checkBox-right").removeClass("checkBox-right-active");
    }
});
// 日历那一行的一个全选框
$(".supply-info-manage-dateline .checkBox").on("click", function () {
    $(this).children(".checkBox-right").toggleClass("checkBox-right-active");
    // 如果全选被选中了
    if ($(this).children(".checkBox-right").hasClass("checkBox-right-active")) {
        // 就把下面所有的都选中 
        $("#examine-info-wait .examine-info-wait-li .checkBox").each(function () {
            if ($(this).children("div").hasClass("checkBox-right-active")) {

            } else {
                $(this).children("div").addClass("checkBox-right-active");
            }
        })
    } else {
        // 要取消全选
        $("#examine-info-wait .examine-info-wait-li .checkBox").each(function () {
            if ($(this).children("div").hasClass("checkBox-right-active")) {
                $(this).children("div").removeClass("checkBox-right-active");
            } else {

            }
        })
    }
})
// 点击输入框，日历弹出来
$("#date-pick-line .calendar-input").click(function () {
    $(this).next().next(".date-picker-container").toggleClass("none");
    $(this).next().toggleClass("b-active");
    // console.log($(this));
});

$("#examine-info-wait").on("click", ".examine-info-wait-li .delete", function () {
    $("#modal-delete").toggleClass("none");
    $(".modal-full-screen").toggleClass("none");
    // console.log("succeed delete");
});
// 取消确认删除
$("#modal-delete>div>a:first-child+a").click(function () {
    $("#modal-delete").toggleClass("none");
    $(".modal-full-screen").toggleClass("none");
})




