// Your code here
function saturdayFun(string="roller-skate") {
    return `This Saturday, I want to ${string}!`;
}

let mondayWork = function(string = "go to the office") {
    return `This Monday, I will ${string}.`;
}

let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }

const Calculator = {
    add: function(a,b) {
        return a + b;
    },
    subtract: function(a,b) {
        return a - b;
    },
    multiply: function(a,b) {
        return a * b;
    },
    divide: function(a,b) {
        return a / b;
    }
}

let actionApplyer = function(integer, array) {
    let a = integer;

    for(let i = 0; i < array.length; i++) {
        a = array[i](a);
    }

    return a;
}
