$(document).ready(function () {
  var thermostat = new Thermostat();

  function DisplayTemp() {
    $('#temperature').html(thermostat.temperature());
    TemperatureColour();
  }

  TemperatureColour = function() {
    temperature.style.color = thermostat.colorChange();
  };

  DisplayTemp();


  $('#upButton').click(function() {
    thermostat.increaseTemperature();
    DisplayTemp();
  });

  $('#downButton').click(function() {
    thermostat.decreaseTemperature();
    DisplayTemp();
  });

  $('#resetButton').click(function(){
    thermostat.resetTemperature();
    DisplayTemp();
  });

  $('#saveButton').click(function() {
    thermostat.switchMode();
    DisplayTemp();
  });


});

// TemperatureColour = function() {
//   temperature.style.color = thermostat.colorChange();
// };
//
// DisplayTemp = function() {
//   temperature.innerHTML = thermostat.temperature();
// };
//
// var temperature = document.getElementById('temperature'); {
//   temperature.innerHTML = thermostat.temperature();
//   TemperatureColour();
// };
//
// var upButton = document.getElementById('upButton');
// upButton.onclick = function() {
//                                 thermostat.increaseTemperature();
//                                 DisplayTemp();
//                                 TemperatureColour();
//                               };
//
// var downButton = document.getElementById('downButton');
// downButton.onclick = function() {
//                                   thermostat.decreaseTemperature();
//                                   DisplayTemp();
//                                   TemperatureColour();
//                                 };
//
// var resetButton = document.getElementById('resetButton');
// resetButton.onclick = function() {
//                                     thermostat.resetTemperature();
//                                     DisplayTemp();
//                                     TemperatureColour();
//                                   };
//
// var saveButton = document.getElementById('saveButton');
// saveButton.onclick = function() {
//                                   thermostat.switchMode();
//                                   DisplayTemp();
//                                   TemperatureColour();
//                                  };
