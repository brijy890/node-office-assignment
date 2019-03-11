const calculator = require('./calculator');

const functionName = process.argv[2];
const param1 = parseInt(process.argv[3]);
const param2 = parseInt(process.argv[4]);

switch(functionName) {
  case "add":
    calculator.add(param1, param2)
      .then((result) => { console.log(result)})
      .catch((err) => {console.log(err)});
    break;
  case "sub":
  calculator.sub(param1, param2)
      .then((result) => { console.log(result)})
      .catch((err) => {console.log(err)});
    break;
   case "mul":
    calculator.mul(param1, param2)
      .then((result) => { console.log(result)})
      .catch((err) => {console.log(err)});
    break;
  case "cub":
    calculator.cub(param1)
      .then((result) => { console.log(result)})
      .catch((err) => {console.log(err)});
    break;
  default:
    var result = "Not valid expression";
}

console.log(result);