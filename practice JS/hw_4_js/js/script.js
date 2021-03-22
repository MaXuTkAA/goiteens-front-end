"use strict"
// console.log("test")
//            1 завдання            //
const num = prompt ('Введіть, будь ласка, число!');
const result = num >= 55 && num <= 99;
const result2 = num < 55;
if (result) {
    alert ("Число потрапляє в діапазон")
} else {
    alert ("Число не потрапляє в діапазон")
  }


  //            2 завдання            //
  const age = prompt ('Скільки Вам років?');
  const children = num > 0 && num < 16;
  const adults  = num > 17 && num < 60;
  const pensioners  = num > 61 && num < 100;
  const Name = 55 + 'Максим';
  if (children){
    alert ("Ви дитина")
  } else if (adults){
    alert ("Ви дорослий")
  } else if (pensioners) {
    alert ("Ви пенсіонер")
}
console.log (Name);


//            3 завдання            //
const name = 'Максим';
const surname = 'Ревізор';
  if (name.length > 4 && surname.length > 5) {
  console.log (name.length + surname.length);
  } else {
    console.log ("УПС");
  }


  //            4 завдання            //
const ramdom = Math.random() * (5 - 1) + 1;
if (ramdom >= 1 && ramdom <= 5 ){
  console.log ("Число є дійсним")
} else {
  console.log ("Число не є дійсним")
}
console.log (ramdom);


  //            5 завдання            //
  let month;
  const lang = ("ua", "en", "ru", "fr");
  switch (lang) {
  
    case 'ua':
      month = "February";
      break;

      case 'en':
        month = "July";
        break;

        case 'ru':
          month = "December";
          break;

          case 'fr':
            month = "August";
            break;

              default:
    console.log('SORRY...');
            
  }
  console.log(month);