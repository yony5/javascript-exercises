const convertToCelsius = function(fahrenhiet) {
  return Number(Number.parseFloat((fahrenhiet - 32) * 5/9).toFixed(1));
};

const convertToFahrenheit = function(celcius) {
  return Number(Number.parseFloat((celcius * 9/5) + 32).toFixed(1)) ;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
