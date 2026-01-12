// let objectname = {

//     key1 : Value1,
//      key2 : Value2,

// }

// objectname.key1


let abc = {} // Object without Properties  empty objects 

let student = {

    firstname : "Raju",
    lastname : "G",
    course: "Playwright",
    place : "Bangalore"
}

console.log(student.firstname  )

console.log(student.place)

console.log(student['firstname'] ) // "Raju" student.firstname 

console.log(student['place'] ) //student.place

console.log(student.age)   // Undefined 

student['age'] = 32  // Add the properties 

delete student.firstname  // delete 


console.log(student.firstname) 


student['lastname'] = "Govindappa" // Update the Values 



console.log(student.lastname) 

console.log(student)





// let credentials = {

//     username: "Admin",
//     password : "admin123",
//     invalidusername: "kjehrhbfhbr",
//     invalidpassword : "erfhy"
// }

// console.log(credentials['Username'])  

// JS is case sensitive language 



let jobtitles = {
 
    title1 : "QA Analyst I",
    title2 : "SDET I",
    title3 : "Software test Engineer I",
    title4 : "QA Engineer I"


}

// for in 


for(let title in jobtitles){

    console.log("loop starts here ")

   console.log(jobtitles[title])
    console.log("loop Ends  here ")
}


let employess = {

    emp1 : { firstname : "Raju", lastname : "G"},

    emp2 : { firstname : "Lakshmi", lastname : "J"},


    emp3 : { firstname : "Praveen", lastname : "Y"}
}


for(let Raju in employess){

    console.log(employess[Raju].firstname)
}