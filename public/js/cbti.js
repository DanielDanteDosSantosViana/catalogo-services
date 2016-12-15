$(document).ready(function(){

  $("#gdRadio").click(function() {
    $("#dateInputRow").hide();
    $("#numerogdRow").show();
  });

  $("#dataRadio").click(function() {
    $("#numerogdRow").hide();
    $("#dateInputRow").show();
  });
}); 