$(function() {

    $("#tab").rTabs({
        bind : 'click',
        animation : 'left'
    });

    $("#next").on('click',function(){
        $("#next").addClass("disp")
    })

})