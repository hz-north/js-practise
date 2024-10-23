let character = "$";
let arrs = [];
let count = 8;
function pydArr( indexNumber , countNumber) {
  return " ".repeat(countNumber-indexNumber) + character.repeat(2* indexNumber-1) + " ".repeat(countNumber-indexNumber)
}
for (let i = 1; i <= count; i++){
  arrs.push(pydArr(i, count));
}
let result = "";
for (const arr of arrs) {
  result = result + "\n" + arr;
};
console.log(result);