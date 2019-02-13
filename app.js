const calculator = require('./calculator');

const functionName = process.argv[2];
const param1 = parseInt(process.argv[3]);
const param2 = parseInt(process.argv[4]);

switch(functionName) {
  case "add":
    var result = calculator.add(param1, param2);
    break;
  case "sub":
    var result = calculator.sub(param1, param2);
    break;
   case "mul":
    var result = calculator.mul(param1, param2);
    break;
  case "cub":
    var result = calculator.cub(param1);
    break;
  default:
    var result = "Not valid expression";
}

console.log(result);