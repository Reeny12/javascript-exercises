const convertToCelsius = function(temp) {
  let convertToCel = (temp - 32) * (5 / 9);
  let roundedNum = Math.round(convertToCel * 10) / 10;

  return roundedNum;
};
//convertToCelsius(-100);

const convertToFahrenheit = function(temp) {
  let convertToFah = temp * (9 / 5) + 32;
  let roundedNum = Math.round(convertToFah * 10) / 10;
  console.log(roundedNum);

  return roundedNum;
};

convertToFahrenheit(1226);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
