var thermostat = new Thermostat

$(document).ready(function() {

  console.log("Loaded");
  $("#up-button").click(function() {
    thermostat.up();
    $("#current-temperature").text(thermostat.currentTemperature());
  });

  $("#down-button").click(function(){
    thermostat.down();
    $("#current-temperature").text(thermostat.currentTemperature());
  });

  $("#current-temperature").text(thermostat.currentTemperature());
});

