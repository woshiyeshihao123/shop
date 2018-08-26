var i = 0;
$(".deploy-sidebar").click(function () {
    if (i % 2 == 0) {
        $(".popup").animate({
            left: '0px',
        });
    }
    else {
        $(".popup").animate({
            left: '750px',
        });
    }
    i++;
});
function jump1() {
    window.location.replace("../h5-index/index.html");
}
function jump2() {
    window.location.replace("../supply-info/supply-info.html");
}
function jump3() {
    window.location.replace("../infoBuyList/infoBuyList.html");
}
function jump4() {
    window.location.replace("../productList/productList.html");
}
function jump5() {
    window.location.replace("../corpInfoListSearch/corpInfoListSearch.html");
}
function jump6() {
    window.location.replace("../newsSearchList/newsSearchList.html");
}
function jump7() {
    window.location.replace("../exproinfo/exproinfo.html");
}
function jump8() {
    window.location.replace("../corpInfo/corpInfo.html");
}
function jump9() {
    window.location.replace("../areaSupplyType/areaSupplyType.html");
}
