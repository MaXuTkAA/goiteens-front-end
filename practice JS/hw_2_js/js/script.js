"use strict"
// console.log("test")

//         1 завдання       //
const value = prompt('What is your name?');
console.log(value);


//         3 завдання       //
const a = 6;
const b = 2;
console.log(a * b); // 12


//         4 завдання       //
let a1 = 4 + 2;
let a2 = 4 - 2;
let a3 = 4 * 2;
let a4 = 4 / 2;

alert(a1);
alert(a2);
alert(a3);
alert(a4);


//         5 завдання       //
let height = 23;
let width = 10; 
let s = 23 * 10;
console.log(s);

//         6 завдання       //
let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг';

alert(a6);
alert(a7);
alert(a8);
alert(a9);
alert(a10);

//         8 завдання       //
const n = 3;
const m = 4;
let k = 0;

k = (n ** 2) + Math.pow(m , 2);
k = Math.sqrt(k);
console.log('k = ', k)


//         7 завдання       //
let v = 0;
const dc = prompt('Введіть діаметр', 10);
console.log(dc);

const h = 35;
const r = dc/2;

v = Math.PI * (r ** 2) * h;

console.log('v = ', v);


//         2 завдання       //
let MyAge = Number(prompt("Введіть ваш вік"));
let FriendAge = Number(prompt("Введіть вік вашого друга"));
alert(("Ваш спільний вік:") + (MyAge + FriendAge));