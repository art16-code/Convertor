
 $("#data").on("input",function(){
  $("#centi").text(`centimetri:${$(this).val()*100}`);
  $("#deci").text(`decimetri:${$(this).val()*10}`);
  $("#kilo").text(`kilometri:${$(this).val()*0.001}`);
 });
   