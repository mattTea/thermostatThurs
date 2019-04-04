var thermostat = new Thermostat

$(document).ready(function() {
  var refreshValues = function() {
    $("#current-temperature").text(thermostat.currentTemperature());
    $("#energy-usage").text(thermostat.energyUsage());
  }

  refreshValues();

  $("#up-button").click(function() {
    thermostat.up();
    refreshValues();
  });

  $("#down-button").click(function(){
    thermostat.down();
    refreshValues();
  });
});

