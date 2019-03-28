$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#pizza-responses").show();
    $("input:checkbox[name=pizza-type]:checked").each(function(){
      var pizza-typeMode = $(this).val();
      $('#pizza-responses').append(pizza-typeMode + "<br>");
    });
    $("#toppings-responses").show();
    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppingsMode = $(this).val();
      $('#toppings-responses').append(toppingsMode + "<br>");
    });
    $('#transportation_survey').hide();
  });
});
