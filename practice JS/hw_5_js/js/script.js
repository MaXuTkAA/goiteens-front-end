"use strict"
 //console.log("test")
 
 //            1,2 завдання            //
 for (let i= 0; i <= 10; i += 1) {
    if ((i % 2) > 0) {
 console.log("Число непарне - " , i)
      }
 else{
     console.log("Число парне - " , i)
 }
 }

 
//            3 завдання            //
let num  = 20;

while (num  < 28) {
  console.log('num : ', num );
  num  += 1;
} 


//            4 завдання            //


let name = '';

do {
    name = prompt("Введіь Вашого улюбленого персонажа!");
    if (name) {
        console.log(`Ім'я улюбленого персонажа користувача: ${name}`);
    } else {
        console.log('Не Коректні Данні! Cпробуйте ще раз!');
    }
} while (name.length < 6);