var isNumber = require("isnumber")
 
console.log(isNumber(13)); // true
console.log(isNumber("1241.12")); // true
console.log(isNumber(0xff)); // true
console.log(isNumber(Infinity)); // false
console.log(isNumber("cat")); // false
console.log(isNumber({foo: "bar"})); // false
