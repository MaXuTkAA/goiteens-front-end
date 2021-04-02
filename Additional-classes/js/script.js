let a = 3;
let b = 22,
c = 10,
d = 53;

if (! a > b || c < d && ! (d > b)) {
    console.log (true)
} else {
 console.log (false)
}


let age = -1;
if (age > 0 && age < 18){
console.log ("Ви дитина")
}
else if (age >= 18 && age <= 60){
    console.log ("Ви повнолітній")
}
else if (age > 60 && age < 120){
    console.log ("Ви пенсіонер")
}
 else {
     alert ("Помилка... ")
 }