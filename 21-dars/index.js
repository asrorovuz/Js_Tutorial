// let num = +prompt("Oy nomiga mos raqam kiriting: ");

// switch (num) {
//   case 1: console.log("Yanvar");break;
//   case 2: console.log("Fevral");break;
//   case 3: console.log("Mart");break;
//   case 4: console.log("Aprel");break;
//   case 5: console.log("May");break;
//   case 6: console.log("Iyun");break;
//   case 7: console.log("Iyul");break;
//   case 8: console.log("Avgust");break;
//   case 9: console.log("Sentyabr");break;
//   case 10: console.log("Oktyabr");break;
//   case 11: console.log("Noyabr");break;
//   case 12: console.log("Dekabr");break;

//   default: console.log("Bunday oy yo'q");
//     break;
// }

// if(num === 1){
//     console.log("Yanvar")
// }else if(num === 2){
//     console.log("Fevral")
// }else if(num === 3){
//     console.log("Fevral")
// }else if(num === 4){
//     console.log("Fevral")
// }else if(num === 5){
//     console.log("Fevral")
// }else if(num === 6){
//     console.log("Fevral")
// }else if(num === 7){
//     console.log("Fevral")
// }else if(num === 8){
//     console.log("Fevral")
// }else if(num === 9){
//     console.log("Fevral")
// }else if(num === 10){
//     console.log("Fevral")
// }else if(num === 11){
//     console.log("Fevral")
// }else if(num === 12){
//     console.log("Fevral")
// }else{
//     console.log("Bunday oy yo'q")
// }





// console.log(4 + 6)

// console.log(5 * 10 + 1520 / 42 -64 + (5 ** 5 + 45))
// console.log(7 * 10 + 1520 / 42 -64 + (7 ** 5 + 45))


// Function Declaration 

// function sum(x){
//     console.log(x * 10 + 1520 / 42 -64 + (x ** 5 + 45))
// }

// sum(5)
// sum(7)


// Function expressions

// let sum = function(){
//     alert("Hello")
// }


// Arrow function

// let sum = () => {

// }

// let son = 5

// function showMessage(){
//     son = 12
//     console.log(son)
// }

// showMessage()

// console.log(son)




// function sum(a, b){
//     console.log(a + b)
// }

// sum(5, 9)

let yosh = prompt("Yoshingizni kiriting: ")

function checkAge(age){

    if(age >= 18){
        alert("True")
    }else{
        age = prompt("Qaytadan kiriting: ")
        checkAge(age)
    }
}

checkAge(yosh)