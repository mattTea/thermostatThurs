function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.DEFAULT_MINIMUM = 10;
  this.DEFAULT_MAXIMUM = 32;
  this.POWER_SAVING_MAX = 25;
  this._temperature = this.DEFAULT_TEMP;
  this.powerSavingMode = true;
}

Thermostat.prototype = {
  constructor: Thermostat,

  up: function() {
    if(this.powerSavingMode){
      this._temperature + 1 > this.POWER_SAVING_MAX
        ? this._temperature = this.POWER_SAVING_MAX
        : this._temperature += 1;
    } else {
      this._temperature + 1 > this.DEFAULT_MAXIMUM
        ? this._temperature = this.DEFAULT_MAXIMUM
        : this._temperature += 1;
    }
  },

  down: function() {
    this._temperature -= 1;
    if (this._temperature < this.DEFAULT_MINIMUM) return this._temperature = this.DEFAULT_MINIMUM;
    return this._temperature;
  },

  currentTemperature: function() {
    return this._temperature;
  },

  powerSavingOn: function () {
    this.powerSavingMode = true;
    if (this._temperature > this.POWER_SAVING_MAX) {
      this._temperature = this.POWER_SAVING_MAX
    }
  },

  powerSavingOff: function() {
    this.powerSavingMode = false;
  },

  reset: function() {
    this._temperature = this.DEFAULT_TEMP;
  },

  energyUsage: function() {
    if (this._temperature < 18) {
      return "low-usage";
    } else if (this._temperature >= 18 && this._temperature < 25) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }

}
