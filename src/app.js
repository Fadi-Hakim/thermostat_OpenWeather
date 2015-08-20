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

  $('#apiweather').show(function() {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric",function(result) {
      apiweather.innerHTML = result.weather[0].description+": "+result.wind.speed+": "+result.main.temp;
    });
  });

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
