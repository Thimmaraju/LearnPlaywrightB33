
// 1  to 100  - loop

// 3 - fizz 
// 5 - Buzz 
// 3 and 5 both - fizzuzz 
// other print number 
// --------------------
// 1
// 2
// fizz
// 4
// buzz 
// fizz
// 7
// 8
// fizz
// buzz 
// 11
// fizz
// 13
// 14
// fizzbuzz 


for(let i= 1 ; i<=100 ; i++){

    if(i%3==0 && i%5==0){

        console.log("FizzBuzz")
    }
    else if (i%3==0 ){

          console.log("Fizz")
    }

    else if (i%5==0 ){

          console.log("Buzz")
    }
    else{

            console.log(i)
    }
}