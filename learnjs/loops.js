




//Loops 

const { timeStamp } = require("console")
const { versions } = require("process")

// for 
// while 
// do while 

//syntax 


// for(Initialization ; condition ; increment/decrement){


// }


// for (let i=11 ; i<=10; i++)
// {

//  console.log(i)
//  console.log("Raju")
//  console.log("Pavan")
//  console.log("Praveen")
// }

//String literals 

x = "Pavan"

y = "Praveen"

z = `${x} and ${y} are best friends`

console.log(z)


//=========================================

//while 

// syntax 

// initialize

// while(condition){


//     //block of code 

//     increment /decrement 
// }


let i =11

while(i>=10){

 console.log(i)
 console.log("Raju")
 console.log("Pavan")
 console.log("Praveen")

 i--
}

//=========================================================

//do while 

// initilixation ;

// do{

//    // block of code 

//    incremnet /decrement 
// }while(condition)

x = 11

do{

 console.log(x)
 console.log("Raju")
 console.log("Pavan")
 console.log("Praveen")

x++
}while(x<=10)

// for will be used - when u know exact count 
//while and do while - count can be vary 
//Basic loops - available from 1st version of JS 

// from Es6 versions

// for in  - Objects 

// for of  - Arrays 

//Arrays
// array.forEach(element => {
    
// });