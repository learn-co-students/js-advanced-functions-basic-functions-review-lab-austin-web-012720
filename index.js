// Your code here

const saturdayFun = (activity = 'roller-skate') => {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = (activity = 'go to the office') => {
    return `This Monday, I will ${activity}.`;
}

// const visualFlare = (flare, adjectve = "special") => {
//     console.log(`${flare}you are ${adjective}${flare}`)
//     return `${flare}you are ${adjective}${flare}`
// }
// const wrapAdjective = (flare = '*', adjective = "special") => {
    
//     visualFlare(flare, adjective)
// }


// let wrapAdjective = function(style="*") {
//     return function(adjective="special") {
//       return `You are ${style}${adjective}${style}!`
//     }
//   }

let wrapAdjective = (style="*") => {
    return (adjective="special") => {
    return `You are ${style}${adjective}${style}!`
    }
}

let Calculator = {

    add: function(a,b){
        return (a+b)
    },
    subtract: function(a,b){
        return (a-b)
    },
    multiply: function(a,b){
        return (a*b)
    },
    divide: function(a,b){
        return (a/b)
    }
}

const actionApplyer = (start, ray) => {
    let a = start;

    for(let i = 0; i<ray.length; i++){
        a = ray[i](a)
    }
    return a;
}

