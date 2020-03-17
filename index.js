function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(outerParam="*") {
    return function(innerParam="special") {
        return `You are ${outerParam}${innerParam}${outerParam}!`
    }  
}

const Calculator = {
    add: function(num1, num2) {
        return num1 + num2
    },

    subtract: function(num1, num2) {
        return num1 - num2
    },

    multiply: function(num1, num2) {
        return num1 * num2
    },

    divide: function(num1, num2) {
        return num1 / num2
    }
}

let actionApplyer = function(int, functions) {
    let a = start 

    for (let i =0; i < functions.length; i++ ) {
        a = functions[i](a)
    }
    return a 
}