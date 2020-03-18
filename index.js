function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`
};

let mondayWork = (doSomething = 'go to the office') => {
  return `This Monday, I will ${doSomething}.`
};

let wrapAdjective = (style = '*') => {
  return function(adjective = 'special'){
    return `You are ${style}${adjective}${style}!`
  };    
};

const Calculator = {
  add: (a, b) => {
    return a + b;  
  },  
  subtract: (a,b) => {
    return a - b;
  }, 
  multiply: (a, b) => {
    return a * b;    
  },
  divide: (a, b) => {
    return a / b;    
  } 
};

let actionApplyer = (number, arrayOfTransforms) => {
  let a = number
  
  for(let i = 0; i < arrayOfTransforms.length; i ++) {
      a = arrayOfTransforms[i](a)
  };

  return a;
};


