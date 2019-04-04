var thermostat = new Thermostat


$(document).ready(function() {

  var apiLink = "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=ad83bbf27660822a5ded0d83f34dc0b9"

  function refreshValues() {
    $("#current-temperature").text(thermostat.currentTemperature());
    $("#energy-usage").text(thermostat.energyUsage());
    $("body").attr('class', thermostat.energyUsage());
  }

  refreshValues();


  $.get(`http://api.openweathermap.org/data/2.5/weather?q=${$("#choose-location").val()}&units=metric&APPID=ad83bbf27660822a5ded0d83f34dc0b9`, function(weatherResponse) {
    $("#temperature-outside").text(weatherResponse.main.temp);
  });
  // param from select list to interpolate into query string above (instead of q=London) 
  // var selectedLocation = $("#choose-location").val()

  $("#choose-location").change(function() {
    $.get(`http://api.openweathermap.org/data/2.5/weather?q=${$("#choose-location").val()}&units=metric&APPID=ad83bbf27660822a5ded0d83f34dc0b9`, function(weatherResponse) {
      $("#temperature-outside").text(weatherResponse.main.temp);
    });
  });

  $("#up-button").click(function() {
    thermostat.up();
    refreshValues();
  });

  $("#down-button").click(function() {
    thermostat.down();
    refreshValues();
  });

  $("#power-saving-on").click(function() {
    thermostat.powerSavingOn();
    refreshValues();
  });

  $("#power-saving-off").click(function() {
    thermostat.powerSavingOff();
  });

  $("#reset").click(function() {
    thermostat.reset();
    refreshValues();
  })

});
