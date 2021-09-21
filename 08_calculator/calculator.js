const add = function(a,b) {
	return a+b;
};

const subtract = function(a, b) {
	 return a-b;
};

const sum = function(array) {
  let sum = 0;
	
    array.forEach(element => {
      sum+=element;
    });
  
  return sum;
};

const multiply = function(array) {
  let product = 1;
	if(array.lenght == 0) return 0;
  
  array.forEach(element => {
    product*=element;
  });
  
  return product;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  let factorial = 1;

	if(a == 0)  return 1;
  
  for(let i=a; i>0; i--){
    factorial *= a--;
  }
  
  return factorial;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
