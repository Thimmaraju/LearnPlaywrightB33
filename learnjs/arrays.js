

// arr = [] // Empty 

// arr1 = [1,3,4,5,6,7,8,9] // Array with Elements 

// arr2 = [1, "Raju", true, undefined, null, {firstname : "praveen", lastname: "Y"},6,9,3]  

// //index always starts from 0 

// console.log(arr2[5])

// // arrname.length  - count of how many elements present 


// console.log(arr2.length)

// arr = ["raju", "praveen", "pavan", "Mounika", "Apparao", "rejneesh"] 

// console.log(arr[arr.length-1])

// //built in methods available 

// // concat is the method to join 2 arrays 

// arr3 = arr2.concat(arr)

// console.log(arr3)

// // sort()

// arr4 = [3,9,5,1,5,2,8].sort()

// console.log(arr4)


// arr5 = ["raju", "Praveen", "pavan", "mounika", "Apparao", "rejneesh", 3,9,1,4,7].sort()

// console.log(arr5)

// //sort() - acending order 

// //reverse()  // 

// arr6 =["raju", "Praveen", "pavan", "mounika", "Apparao", "rejneesh"].reverse()

// console.log(arr6)

// //split("") - converts the string to array 


// str = "Javascript"

// arr7 = str.split("")

// console.log(arr7)


// str2 = "this is a js class"

// arr8 = str2.split("")

// console.log(arr8)


// //join("") // converts array to string 

// str3 = arr8.join("")

// console.log(str3)


// arr = [1,3,4,5,6,7,8,3,4,5,6,9]


//Math

arr = [2,5,8]

console.log(arr[4]) // Undefined 


arr1 =  ["eat", "sleep"]

arr1.push("work", "run")

//push - will add the Element/s at end of the array 

arr1.unshift("read", "exersize")

//unshift - will add the Element/s at beginning of the array 

console.log(arr1)

//replace the Elements Possible 

arr1[2] = "Dance"

arr1.pop()

arr1.pop()

arr1.shift()
arr1.shift()

console.log(arr1)

// pop - removes the last element 

// shift - removes 1st element \

//includes  - it will search the element if present it will give you true , not preset false 


arr2 = [ 'read', 'exersize', 'eat', 'sleep', 'work', 'run' ]

console.log(arr2.includes("eat"))  // false 

console.log(arr2[2])

// .filter()
// .map()
// .reduce()
// .slice()
// .splice()


menuitems = [
  'Admin',       'PIM',
  'Leave',       'Time',
  'Recruitment', 'My Info',
  'Performance', 'Dashboard',
  'Directory',   'Maintenance',
  'Claim',       'Buzz'
]


//menuitems.length == 12 

//menuitems.includes("Buzz")  == true 


arr4 = [2,5,6,7,8,923,45,24,36,78]

arr5 = arr4.filter( item => item%2 == 0 )

console.log(arr5)

arr6 = ["raju", "arun", "lakshmi"]

arr7 = arr6.filter(item => item.includes("r") == true)

console.log(arr7)

ar1 = [2,4,5,6,8]

ar2 = ar1.map( element => element+"raju")

console.log(ar2)

ar3 = [2,8,6,3,5,8]


ar4 = [ 'read', 'exersize', 'eat', 'sleep', 'work', 'run' ]

//ar4.splice(1, 1, "Raju", "Abc")

//console.log(ar4)

//requirement 

ar4.splice(3,1, "Apparao")  //  [ 'read', 'exersize', 'eat', 'sleep',"Apparao", 'run' ]



menuitems = [
  'Admin',       'PIM',
  'Leave',       'Time',
  'Recruitment', 'My Info',
  'Performance', 'Dashboard',
  'Directory',   'Maintenance',
  'Claim',       'Buzz'
]


//2 ways 

// for of 

// array.forEach(element => {
    
// });

// for(let element of menuitems){

//     console.log("Loop starts ")

//       console.log(element)

//           console.log("Loop Ends  ")

// }


menuitems.forEach(element => {
    

        console.log("Loop starts ")

      console.log(element)

          console.log("Loop Ends  ")
});