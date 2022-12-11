const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, curr) => acc * curr, 1);
};

const power = function(b, e) {
	return b ** e;
};

const factorial = function(n) {
  function auxFactorial(n, acc) {
    if(n == 0) 
      return acc;
    else 
      return auxFactorial(n-1, acc * n);
  }

  return auxFactorial(n, 1);
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
