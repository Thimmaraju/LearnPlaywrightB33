

// //its object 

const { rejects } = require("assert")
const { readlink } = require("fs")
const { resolve } = require("path")

// const { resolve } = require("path");

// // car = {
// //     data 
// // }

// const p = new Promise((resolve, reject) => {

//     let x = 2

//     if(x==2){

//         resolve("Raju")
//     }
//     else{

//         reject("Praveen")
//     }
// })


// // p value can be Raju or Praveen 

// // p = "Raju"

// // or 
// // P = "Praveen"

// //console.log(p)

// // Promise {"Raju"}

// // Promise { <rejected> 'Praveen' }

// p.then((Message) => console.log(Message))
//  .catch((message) => console.log(message))
// p1 = Promise.resolve("Dhanusha")  // Declaring a promise 

// p1.then( text => console.log(text))

// //console.log(p1)

//  p2 = Promise.reject("Praveen")

//  p2.then( text => console.log(text))
//    .catch(text => console.log(text))

// console.log(p2)

// promise 3 states 

// 1. Pending not resolved or not rejected 

// 2. Resolved 

// 3. Rejected 

// resolve{data}
// reject{ data}


// p1 = Promise.resolve("Message1")

// p2 = new Promise((resolve , reject) => {
//     setTimeout( resolve, 500, "Message3")
// })
// p3 = Promise.resolve("Message2")

// p4 = new Promise((resolve , reject) => {
//     setTimeout( resolve, 5000, "Message4")
// })

// Promise.all([p1,p2,p3,p4]).then( messages => console.log(messages))

// Promise.race([p1,p2,p3,p4]).then( message => console.log(message))


// page.goto()

// retrun Promise.resolve(Task)

// task2 = page.locator(xpath).click() 

// retrun Promise.resolve(task2)

// function step1 (value , error) {

//     return  new Promise((resolve, reject) => {

//         if(error){

//             reject("Some thing went wrong")
//         }
//         else {

//              resolve(value+10)
//         }
//     })
// }

// step1( 34, true).then( sum => console.log(sum))
//                  .catch( message => console.log(message))

//  async function printMessage(){

//     return Promise.resolve("hey Hi")
// }


//  async function printname(){

//     return Promise.resolve("Raju")
// }


//  async function Mainfunction(){

//     let x =  await printMessage()

//     let y = await printname()

//      console.log(x)

//       console.log(y)
// }




// Mainfunction()


// // Await - waits for the funmction to resolve 

// // async makes function to return the promise 


// // function step1 (value , error) {

// //     return  new Promise((resolve, reject) => {

// //         if(error){

// //             reject("Some thing went wrong")
// //         }
// //         else {

// //              resolve(value+10)
// //         }
// //     })
// // }

// async function step1(value, error){

//     return value+10
// }



// async function run(){

//     let sum = await step1(35,false)

//     console.log(sum)
// }

// run()



async function step1 (value ) {


    return value + 20
}

async function step2 (value ) {


    return value + 35
}


async function step3 (value ) {


    return value - 30
}


// step1(56).then(value => console.log(value)) //76

// step2(30).then(value => console.log(value)) //65

// step3(45).then(value => console.log(value)) //15
   

async function run(){

    let x = await step1(56)

       let y = await step2(30)

       let z = await step3(45)

    console.log(x,y,z)
}
   

run()


async function add(num1, num2){

    return num1+num2
}

x = add(4,8)

console.log(x)

//===============================================================================

//95 %

// Set  - Unique 

// Maps - 

// Reg expression 

// add(x :number , y : number){


// }

