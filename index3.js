let chalk = require('chalk');

let nearest0Temperature = (input) => {
    var array = input.split(" ").map(Number);

    var isPositive = (value) => value > 0 ? true : false;

    var arrOfObj = array.map((value, index) => {
      return {
        value:Math.abs(value),
        isPositive:isPositive(value)
      }
    });

    var result = arrOfObj.reduce((memory,element,index) => {
      if(element.value < memory.value ||
        (element.value == memory.value) && element.isPositive){
        return element;
      }
      else{
        return memory;
      }
    },{value:5227, isPositive:true});

    console.log("result", result);

    return result.isPositive ? ""+result.value : ""+result.value * -1;
}



module.exports = {
  nearest0Temperature: nearest0Temperature
};