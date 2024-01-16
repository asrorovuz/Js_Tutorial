// for, while, do while

// for(let i=1;i<=10;i++){
//     console.log("Hello")
// }

// let i = 10

// while(i < 10){
//     console.log(i)
//     i++;
// }

// let i = 0

// do{
//     console.log(i)
//     i++
// }while(i<10)


// for(let i=1; i<=1000000; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }

let oy = prompt("Oyni kiriting") 

switch(oy){
    case "Yanvar": 
    case "Fevral": console.log("Qish");break;
    case "Mart": 
    case "Aprel": 
    case "May": console.log("Bahor");break;
    case "Iyun": 
    case "Iyul": 
    case "Avgust": console.log("Yoz");break;
    case "Sentyabr": 
    case "Oktyabr": 
    case "Noyabr": 
    case "Dekabr": console.log("Qish");break;
    default: console.log("Bunday fasl yo'q")
}