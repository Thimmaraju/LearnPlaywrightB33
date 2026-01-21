

// call back extended concept of functions 


// function Trainer(callback){

//     console.log("This is Main Function")

//     callback()
// }

// function student1(callback){

//        console.log("This is Student1 Function")

//        callback()
// }

// function student2(){

//        console.log("This is Student2 Function")
// }


// function student3(){

//        console.log("This is Student3 Function")
// }




// Trainer(student3)


// callback function - we are giving function as params to another function. this function is called callback function 
//  main - callback  - calback - callback - callback



//closure function 

// High order function 


function calculator( x, y, callback1, callback2){


    callback1(x, y)
    callback2(x, y)
}
function add(value1, value2){

    console.log(value1+value2)
}

function substract(value1, value2){

    console.log(value1-value2)
}

function multiply(value1, value2){

    console.log(value1*value2)
}


calculator(3,7, add, multiply)




// callback function is also called as closure function when it is accessing the data from main function 

// Main function is called as Higher order function 
// Why : it is passing the data to callback 


//To Make Js as Asynchronuous Mode 

//synchronuous

//exution follow line by line 

console.log("Raju")


setTimeout(() => {
    console.log("Praveen")
}, 4000);

console.log("Dhanusha")


//setTimeout( function , 4000)


// to make Asynchronous why callback 

// Promises 
// Async and wait 

