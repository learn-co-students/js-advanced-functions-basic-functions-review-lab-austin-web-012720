// Your code here
function saturdayFun(activty='roller-skate'){
  return `This Saturday, I want to ${activty}!`
}
function mondayWork(thing='go to the office'){
  return `This Monday, I will ${thing}.`
}
function wrapAdjective(str='*'){
  return function(string = 'special'){
    return `You are ${str}${string}${str}!`

  }

}
const Calculator = {
   add: function(a,b){
    return a + b
  },
   subtract: function(a,b){
    return a - b
  },
   multiply: function(a,b){
    return a*b
  },
   divide: function(a,b){
    return a/b
  }


}
// Array.isArray(array) &&
function actionApplyer(int,array){
  if (!array.length){
    return int
  }
  else {
    let a = int
    for (const i in array){

      a = array[i](a)



  }
  return a
}

}
