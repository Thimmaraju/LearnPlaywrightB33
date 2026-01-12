

arr = [] // Empty 

arr1 = [1,3,4,5,6,7,8,9] // Array with Elements 

arr2 = [1, "Raju", true, undefined, null, {firstname : "praveen", lastname: "Y"},6,9,3]  

//index always starts from 0 

console.log(arr2[5])

// arrname.length  - count of how many elements present 


console.log(arr2.length)

arr = ["raju", "praveen", "pavan", "Mounika", "Apparao", "rejneesh"] 

console.log(arr[arr.length-1])

//built in methods available 

// concat is the method to join 2 arrays 

arr3 = arr2.concat(arr)

console.log(arr3)

// sort()

arr4 = [3,9,5,1,5,2,8].sort()

console.log(arr4)


arr5 = ["raju", "Praveen", "pavan", "mounika", "Apparao", "rejneesh", 3,9,1,4,7].sort()

console.log(arr5)

//sort() - acending order 

//reverse()  // 

arr6 =["raju", "Praveen", "pavan", "mounika", "Apparao", "rejneesh"].reverse()

console.log(arr6)

//split("") - converts the string to array 


str = "Javascript"

arr7 = str.split("")

console.log(arr7)


str2 = "this is a js class"

arr8 = str2.split("")

console.log(arr8)


//join("") // converts array to string 

str3 = arr8.join("")

console.log(str3)


arr = [1,3,4,5,6,7,8,3,4,5,6,9]


//Math