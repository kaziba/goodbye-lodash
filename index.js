'use strict';

const everyArray = [1, 2, 3];
const everyResult = everyArray.every((element) => element >= 1);
console.log(everyResult);

const someArray = [10, 9, 8];
const someResult = someArray.some((element) => element >= 10);
console.log(someResult);

const reduceArray = [0, 1, 2, 3, 4];
const reduceResult = reduceArray.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log(reduceResult);

const users = [
  {name: 'cocoa', age: 15},
  {name: 'rize', age: 16},
  {name: 'syaro', age: 15},
];
const findResult = users.find((o) => o.age < 16);
console.log(findResult);

const findIndexResult = users.findIndex((o) => o.age < 16);
console.log(findIndexResult);

const indexOfArray = [2, 8, 8];
const indexOfResult = indexOfArray.indexOf(2);
console.log(indexOfResult);

const lastIndexOfResult = indexOfArray.lastIndexOf(8);
console.log(lastIndexOfResult);

// x_x Unsupported
// const includeArray = [1, 2, 3];
// const includeResult = includeArray.includes(1);
// console.log(includeResult);

const n = {one: 1, two: 2, three: 3};
const keysResult = Object.keys(n);
console.log(keysResult);

const sizeResult = Object.keys(n).length;
console.log(sizeResult);

console.log(Number.isNaN(NaN));

const reverseAray = [1, 2, 3];
console.log(reverseAray.reverse());

const joinArray = ['syaro', 'rize', 'cocoa'];
const joinResult = joinArray.join('--');
console.log(joinResult);

const trimString = '  syaro  ';
console.log(trimString.trim());
