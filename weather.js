$(document).ready(function(){

  var city = $("#city").val();
  if(city != ''){

    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather' + city + "&units=metric" +
      "&APPID=c10bb3bd22f90d636baa00b1529ee5",
      type: "GET",
      dataType: "JSON",
      success: function(data){
        var widget = show(data);

      $("#show").html(widget);
       $("#city").val();
    }
    });
  }
  else{
    $("#error").html('Field cannot be empty');
  }
});

function show(data){
   return "<h2>Current Weather for " + data.name + ", " + data.sys.country + "</h2>"

}