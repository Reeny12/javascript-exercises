const add = function(a, b) {
	return a + b;
};

//console.log(add(15, 20));

const subtract = function(a, b) {
	return a - b;
};

//console.log(subtract(25, 10));

const sum = function(numbers) {
  return numbers.reduce(function(total, current){
    return total + current;
  }, 0)
};

//console.log(sum([7, 11]))


const multiply = function(numbers) {
  return numbers.reduce(function(product, num){
    return product * num
  }, 1)
};

console.log(multiply([2, 4]))

const power = function(a, b) {
	return a ** b;
};

//console.log(power(2, 3));

const factorial = function(number) {
  let product = 1;
  for (let i = number; i > 0; i--){
    product = product * i;
  }
  return product;
};

//console.log(factorial(6));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
