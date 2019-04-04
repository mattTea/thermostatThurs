describe("Thermostat", function(){
  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it("starts at default temperature", function(){
    expect(thermostat.currentTemperature()).toEqual(thermostat.DEFAULT_TEMP);
  });

  describe("user wants to increase temperature", function() {

    it("increases the temperature by 1 degree", function() {
      thermostat.up();
      expect(thermostat.currentTemperature()).toEqual(thermostat.DEFAULT_TEMP + 1);
    });
  });

  it("decreases the temperature by 2 degrees", function() {
    thermostat.down();
    thermostat.down();
    expect(thermostat.currentTemperature()).toEqual(thermostat.DEFAULT_TEMP - 2);
  });

  it("limits the minimum temperature to 10 degrees", function() {
    for (var i = 1; i <= 15; i++) {
      thermostat.down();
    }
    expect(thermostat.currentTemperature()).toEqual(thermostat.DEFAULT_MINIMUM);
  });

  it("limits temperature to 25 degrees when power saving is on", function() {
    thermostat.powerSavingOn();
    for (var i = 1; i <= 10; i++) {
      thermostat.up();
    }
    expect(thermostat.currentTemperature()).toEqual(25);
  });

  it("reduces temperature back to 25 degress when power saving is switched on", function() {
    thermostat.powerSavingOff();
    for (var i = 1; i <= 10; i++) {
      thermostat.up();
    }
    thermostat.powerSavingOn();
    expect(thermostat.currentTemperature()).toEqual(thermostat.POWER_SAVING_MAX);
  });

  it("increases temperature beyond power saving max when power saving is off", function() {
    thermostat.powerSavingOff();
    for (var i = 1; i <= 10; i++) {
      thermostat.up();
    }
    expect(thermostat.currentTemperature()).toEqual(thermostat.DEFAULT_TEMP + 10);
  });

  it("limits temperature to 32 when power saving is off", function(){
    thermostat.powerSavingOff();
    for (var i = 1; i <= 20; i++) {
      thermostat.up();
    }
    expect(thermostat.currentTemperature()).toEqual(32);
  });

  it("resets temp to default", function() {
    thermostat.down();
    thermostat.reset();
    expect(thermostat.currentTemperature()).toEqual(thermostat.DEFAULT_TEMP);
  });

  it("returns low-usage for temperature under 18", function(){
    for (var i = 1; i <= 5; i++) {
      thermostat.down();
    }
    expect(thermostat.currentTemperature()).toEqual(thermostat.DEFAULT_TEMP - 5);
    expect(thermostat.energyUsage()).toEqual("low-usage");
  });

  it("returns medium-usage for temperatures of 18", function() {
    thermostat.down();
    thermostat.down();
    expect(thermostat.energyUsage()).toEqual("medium-usage");
  });

  it("returns medium-usage for temperatures between 18 and 24", function(){
    thermostat.down();
    expect(thermostat.energyUsage()).toEqual("medium-usage");
    thermostat.up();
    thermostat.up();
    expect(thermostat.energyUsage()).toEqual("medium-usage");
    for (var i = 1; i <= 4; i++) {
      thermostat.down();
    }
    expect(thermostat.energyUsage()).not.toEqual("medium-usage");
  });

  it("returns high-usage for 25", function() {
    for (var i = 1; i <= 5; i++) {
      thermostat.up();
    }
    expect(thermostat.energyUsage()).toEqual("high-usage");
  });
});
