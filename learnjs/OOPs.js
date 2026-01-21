

// class classname{

//  // varibale 
//  //methods 

// }


// cosnt obj = new classname()

// //OOPS  - Object oriented Programming 

//1. Encapsulation 

//Binding the Data between the menthods is called as encapsulation


// class classname {


//     m1()  // creates some data   // Setter 

//     m2() // this method will access the data from m1 always //Getter 
// }


class student {


    getStudentdetails(stuname , stuplace){

        this.studentname = stuname

        this.studentpalce = stuplace

    }



    studentdetails(){

        console.log(this.studentname, this.studentpalce)
    }
}


const stu1 = new student()


stu1.getStudentdetails("Rejnesh", "chennai") // setter  
stu1.studentdetails() // getter 

// Encapsulation 


// Inheritance

//2 classes 

//  single 
//  Multi level 
//  Hirarchical 
//  Multiple  -- Not supported 