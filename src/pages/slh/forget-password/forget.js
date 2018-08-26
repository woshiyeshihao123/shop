$(document).ready(function () {
  $(".btn2").on('click',function(){
    $(".page-one").addClass("next");
    $(".page-two").removeClass("next");
  })
});


function isPoneAvailable($poneInput) {  
  var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
  if (!myreg.test($poneInput.val())) {  
      return false;  
  } else {  
      return true;  
  }  
}  

    function isPoneAvailable(str) {  
              var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
              if (!myreg.test(str)) {  
                  return false;  
              } else {  
                  return true;  
              }  
          }  