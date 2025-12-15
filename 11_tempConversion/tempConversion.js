const convertToCelsius = function(num) {

    return parseFloat(((num - 32 ) * 5 / 9).toPrecision(3)) ; 

};

const convertToFahrenheit = function(num) {

   return  parseFloat(((num * 9/5 ) + 32).toPrecision(4));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
