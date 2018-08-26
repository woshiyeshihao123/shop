$(function(){
        $("#date").selectDate()
        
        $("#days").focusout(function(){
            var year = $("#year option:selected").html()
            var month = $("#month option:selected").html()
            var day = $("#days option:selected").html()
            console.log(year+month+day)
        })
        
    }) 