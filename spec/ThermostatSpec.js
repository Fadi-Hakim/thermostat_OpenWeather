describe('Thermostat', function() {

  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
    powerSave = true;
  });

  it('has a default temperature of 20', function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  it('can increase temperature by 1', function() {
    thermostat.increaseTemperature();
    expect(thermostat.temperature()).toEqual(21);
  });

  it('can decrease temperature by 1', function() {
    thermostat.decreaseTemperature();
    expect(thermostat.temperature()).toEqual(19);
  });

  it('has a minimum temperature of 10', function() {
    for (var i = 0; i < 15; i++) {
      thermostat.decreaseTemperature();
    };

    expect(thermostat.temperature()).toEqual(10);
  });

  it('has a maximum temperature of 32', function() {
    thermostat.switchMode();
    for (var i = 0; i < 15; i++) {
      thermostat.increaseTemperature();
    };

    expect(thermostat.temperature()).toEqual(32);
  });

  it('has a power saving mode that is on by default', function() {
    expect(thermostat.isPowerSaveOn).toBe(true);
  });

  it('can switch power saving mode on and off', function() {
    thermostat.switchMode();
    expect(thermostat.isPowerSaveOn).toBe(false);
  });

  it('should have a maximum temp of 25 when powerSave is on', function() {
    for (var i = 0; i < 15; i++) {
      thermostat.increaseTemperature();
    };

    expect(thermostat.temperature()).toEqual(25);
  });

  it('can reset the temperature to 20', function() {
    thermostat.resetTemperature();
    expect(thermostat.temperature()).toEqual(20);
  });

  it('changes color depending on temperature', function() {
    thermostat.temp = 17;
    expect(thermostat.colorChange()).toEqual('green');
  });

  it('changes temp when temp is larger than 25 when save power mode is on', function() {
    thermostat.temp = 26;
    thermostat.switchMode();
    expect(thermostat.temp).toEqual(25);
  });

});
