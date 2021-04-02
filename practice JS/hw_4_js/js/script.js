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
  const MaxAge = 55;
  if ((!Number.isNaN(MaxAge * 1)) && (MaxAge > 0)) {
      if (MaxAge < 16) {
          alert('Максим відноситься до групи малих дітей.');
          console.log('Максим відноситься до групи малих дітей');
      } else if (MaxAge >= 17 || MaxAge < 60) {
          alert('Максим відноситься до групи дорослих людей.');
          console.log('Максим відноситься до групи дорослих людей.');
      } else if (MaxAge >= 61 || MaxAge < 100) {
          alert('Максим відноситься до групи пенсіонерів.');
          console.log('Максим відноситься до групи пенсіонерів.');
      }
  } else {
      alert('БУДЬ ЛАСКА ВВЕДІТЬ КОРЕКТНЕ ЧИСЛО!!!');
      console.log('БУДЬ ЛАСКА ВВЕДІТЬ КОРЕКТНЕ ЧИСЛО!!!');
  };

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