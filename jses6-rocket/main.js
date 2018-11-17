const arr = [1,2,3,4,5,6];
const newArr = arr.map((n,i) => `${i} : ${n * 2}`);
console.log(newArr);

console.log("-------------");

const somatotal = arr.reduce((total,next) => total + next);
console.log(`Total da soma é: ${somatotal}`);

console.log("-------------");

const filter = arr.filter(item => item % 2 === 0);
console.log(filter);

console.log("-------------");

const find = arr.find(item => item === 2);
console.log(find);