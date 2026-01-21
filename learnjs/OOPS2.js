

// class A {

//     x = 10
//     y = 20
//     m1() {

//         console.log("this is M1 Method")


//     }

//     m2() {

//         console.log("this is M2 Method")

//     }

//     m3() {


//         console.log("this is M3 Method")



//     }

//     m4() {


//         console.log("this is M4 Method")


//     }
// }





// class B extends A {

//     p = 10
//     q = 20
//     m5() {

//         console.log("this is M5 Method")


//     }

//     m6() {

//         console.log("this is M6 Method")

//     }

//     m7() {


//         console.log("this is M7 Method")



//     }

//     m8() {


//         console.log("this is M8 Method")


//     }
// }


// class C extends A {

//     a = 10
//     b = 20
//     m9() {

//         console.log("this is M9 Method")


//     }

//     m10() {

//         console.log("this is M10 Method")

//     }


// }



// const objc  = new C()

// console.log(objc.x)

// //console.log(objc.p)

// console.log(objc.a)

// objc.m1()

// objc.m5()

// objc.m10()

// PolyMorphism 

// Extended concept of Inheritance 

// Method Overriding 
// Method Overloading 


// class A {

//     printMessage() {

//         console.log("Hey Hi")
//     }

//     add(num1, num2) {
//         console.log(num1)
//         console.log(num2)
//         console.log(num1 + num2)
//     }
// }


// class B extends A {

//     printMessage() {

//         console.log("Hey Namaste")
//     }

//     add(num1, num2, num3) {
//         console.log(num1)
//         console.log(num2)
//         console.log(num3)
//         console.log(num1 + num2 + num3)
//     }
// }

// const raju = new A()

// raju.printMessage()  // Method Overrding 

// raju.add(4, 8, 6, 7)   // Method Overloading 


//POM 


//Prototyping 



class A {

    x = 10 
    y = 20 
    printMessage() {

        console.log("Hey Hi")
    }

    add(num1, num2) {
        console.log(num1)
        console.log(num2)
        console.log(num1 + num2)
    }
}

A.prototype.z =  30  // Prototyped varibale 


A.prototype.m1 = function() {

    console.log("This method is defined Out side the class ")
} // Prototyped Method

const abc = new A()

abc.printMessage()

const pqr = new A()

pqr.printMessage()

console.log(abc.z)

console.log(pqr.z)

abc.m1()

pqr.m1()