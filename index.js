function saturdayFun(activity = 'roller-skate') {
  return (`This Saturday, I want to ${activity}!`);
}

const mondayWork = function (activity = 'go to the office') {
  return (`This Monday, I will ${activity}.`);
};

function wrapAdjective(style = '*') {
  return function (param = 'special') {
    return (`You are ${style}${param}${style}!`);
  };
}

const Calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
};

const actionApplyer = function (int, ary) {
  let butt = int;

  for (let i = 0; i < ary.length; i++) {
    butt = ary[i](butt);
  }
  return butt;
};
