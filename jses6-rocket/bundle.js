"use strict";

var arr = [1, 2, 3, 4, 5, 6];
var newArr = arr.map(function (n, i) {
  return "".concat(i, " : ").concat(n * 2);
});
console.log(newArr);
console.log("-------------");
var somatotal = arr.reduce(function (total, next) {
  return total + next;
});
console.log("Total da soma \xE9: ".concat(somatotal));
console.log("-------------");
var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);
console.log("-------------");
var find = arr.find(function (item) {
  return item === 2;
});
console.log(find);
