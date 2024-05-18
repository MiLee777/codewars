// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


function fakeBin(x){
  let result = x.split('').map(el => el >= 5 ? 1 : 0).join('');
  return result;
}

console.log(fakeBin('45385593107843568')); // '01011110001100111'
console.log(fakeBin('509321967506747')); // '101000111101101'
console.log(fakeBin('366058562030849490134388085')); // '011011110000101010000011011'