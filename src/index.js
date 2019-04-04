var thermostat = new Thermostat

$(document).ready(function() {
  function refreshValues() {
    $("#current-temperature").text(thermostat.currentTemperature());
    $("#energy-usage").text(thermostat.energyUsage());
    $("body").attr('class', thermostat.energyUsage());
  }

  refreshValues();

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
