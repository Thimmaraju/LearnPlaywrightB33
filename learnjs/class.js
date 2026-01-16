


// function add(num1, num2){



//     console.log(num1)
//       console.log(num2)

//       console.log(num1 +num2)
// }


// add(3,8)

// calculator {

//     add
//     substract
//     devide
//     multiplication

// }

// class  clasname {

//     var1 
//     var2 
//     var3 
//     m1
//     m2
//     m3
//     m4
//     m5
// }


// class calculator {

//     x = 10 

//     stuname = "Raju"

//     add(num1, num2) {

//         console.log(num1)
//         console.log(num2)

//         console.log(num1 + num2)
//     }

//      substract(num1, num2) {

//         console.log(num1)
//         console.log(num2)

//         console.log(num1 - num2)
//     }


//      multiplication(num1, num2) {

//         console.log(num1)
//         console.log(num2)

//         console.log(num1 * num2)
//     }


//      devision(num1, num2) {

//         console.log(num1)
//         console.log(num2)

//         console.log(num1 / num2)
//     }


// }


// //we need create object/Instance of the class in order call methods / Variables / How to do ?


// const cal1 = new calculator()  // different memory  100KB 

// cal1.add(5,9)

// cal1.multiplication(4,6)

// console.log("====================================")

// console.log(cal1.x ) // 10 

// console.log("====================================")

// // Reusability 




// const cal2 = new calculator()  // different memory  100 KB 

// cal2.add(8,9)

// cal2.multiplication(6,6)

// console.log("====================================")

// console.log(cal2.stuname ) // 10 

// console.log("====================================")


// console.log(cal1.stuname)

//=============================================================================

// class student{

//     x = 20 
//     y= 30


//     constructor(name , place){

//         console.log("Student name :" + name)
//           console.log("Student PLace :" + place)
//     }

//     displayMessage(){

//         console.log("Hey Hi")
//     }


// }

// const stu1 = new student("Dhanusha", "E godavari")

// //================================================

// class employee {

//     x = 20

//     y = 30

//     m1(){

//         console.log("this is M1 Method")

//         this.m3()
//     }

//     m2(){

//         console.log("this is M2 Method")
//     }

//     m3(){


//         console.log("this is M3 Method")

//     }
// }

// const emp1 = new employee()

// emp1.m1()

// Hoisting in JS 

// call the method before declartion
// After u declare it still it works for you


// add(4, 9)


// function add(num1, num2) {

//     console.log(num1)
//     console.log(num2)

//     console.log(num1 + num2)
// }

// Hoisting 



class employee {

    static x = 20   // static variable 

    y = 30    // Non Static variabnle 

    static m1(){

        console.log("this is M1 Method")

        // Static method 
    }

    m2(){

        console.log("this is M2 Method")

         // this is non static 

         this.m4()
    }

    static m3(){


        console.log("this is M3 Method")

        // this is also static 

        this.m1()

    }

     m4(){


        console.log("this is M4 Method")

        // this is non static 

    }
}


// without object creation, with the help of class we can access static variable and Static methods 


employee.m3()


// const emp = new employee()

// emp.m2()

