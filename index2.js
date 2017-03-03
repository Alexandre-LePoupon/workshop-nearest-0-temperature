let chalk = require('chalk');

let nearest0Temperature = (input) => {
  if(input == '') {
    return '0';
  } else {
    let numbers = input.split(' ').map(Number);

    let positiveNumbers = numbers.map(Math.abs);

    let min = Math.min.apply(Math, positiveNumbers);

    return numbers.indexOf(min) == -1 ? (min * -1).toString() : min.toString()
  }
}



module.exports = {
  nearest0Temperature: nearest0Temperature
};