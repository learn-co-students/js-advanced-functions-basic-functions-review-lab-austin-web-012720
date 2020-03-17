// Your code here
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(string = '*') {
  return function(adjective = 'special') {
    return `You are ${string}${adjective}${string}!`;
  };
}

const Calculator = {
  add: function(num1, num2) {
    return num1 + num2;
  },
  subtract: function(num1, num2) {
    return num1 - num2;
  },
  multiply: function(num1, num2) {
    return num1 * num2;
  },
  divide: function(num1, num2) {
    return num1 / num2;
  }
};

function actionApplyer(int, functs = []) {
  if (!(functs.length === 0)) {
    for (let i = 0; i < functs.length; i += 1) {
      int = functs[i](int);
    }
  } 
  return int
}
