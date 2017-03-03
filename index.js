let chalk = require('chalk');

let nearest0Temperature = (input) => {
  var array = input.split(" ").map(Number);
  var arrayPositif = array.map(Math.abs);

  if(array.indexOf(smallTemp(arrayPositif))===-1) {
    return ''+(smallTemp(arrayPositif) * -1);
  } else {
    return ''+(smallTemp(arrayPositif));
  }
}

function smallTemp(values, acc = 5527) {
  var result = acc;
  if(result > values[0]) {
    return smallTemp(values.slice(1), values[0]);
  } else if(values.length > 0) {
    return smallTemp(values.slice(1), result);
  } else {
    return result;
  }
}



module.exports = {
  nearest0Temperature: nearest0Temperature
};