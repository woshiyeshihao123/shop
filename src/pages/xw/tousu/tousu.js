

   var $txt=$("#textName");
   console.log($txt);
   $txt.blur(e=>{
       vali($(e.target),5,
       "咨询内容不得少于5个字")
   });
   function vali($txt,minlen,msg){
       if($txt.val().length<minlen){
          $txt.next().html(msg).css("color","red");
          return false;
       }
   }
   $("#btns").click(function(){
       vali($txt,5, "咨询内容不得少于5个字");
   })
 
