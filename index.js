function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`
};

function mondayWork(activity='go to the office') {
  return `This Monday, I will ${activity}.`
};

function wrapAdjective(wrapper='*') {
  // let statement = 'You are';
  // if (wrapper === '*') {
  //   return `You are ${wrapper}a hard worker${wrapper}!`
  // } else if (wrapper === '||') {
  //   return `You are ${wrapper}a dedicated programer${wrapper}!!`
  // }
  // let adjective = 'special';
  // return `You are ${wrapper} ${adjective} ${wrapper}!`
  return function() {
    if (wrapper === '*') {
      return `You are ${wrapper}a hard worker${wrapper}!`
    } else {
      return `You are ${wrapper}a dedicated programmer${wrapper}!`
    }
  }
};

const Calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  }
};

let actionApplyer = function(start, ray) {
  let a = start

  for (let i = 0; i < ray.length; i++ ){
    a = ray[i](a)
  }

  return a
};

// function actionApplyer(start, ray) {
//   let a = start;

//   for (a of ray) {
//     a = ray 
//   }
//   return a
// };