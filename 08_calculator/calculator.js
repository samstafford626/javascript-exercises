const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
	for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  if (!array[0]) return 'Empty array'
  let product = array[0];
  for (let i = 1; i < array.length; i++) {
    product *= array[i];
  }
  return product;
};

const power = function(base, exp) {
	return base**exp;
};

const factorial = function(num) {
	if (num === 0 || num === 1) return 1
  let result = 1;
  for (let i =2; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
