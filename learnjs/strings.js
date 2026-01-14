

var studentname = "Raju"

stuname = 'Raju'

stname = `Raju`

//3 ways u can declare string 

var x = "Raju's Place Bangalore"

usernametext = "Username : Admin".split(" ")

console.log(usernametext[2])


passwordtext = "Password : admin123".split(" ")

console.log(passwordtext[2])


//string method 

//concat() - Join 2 strings 

str1 = "Raju"

str2 = "G"

str3 = str1.concat(str2)

str4 = str1 + str2 + "  Bangalore"

console.log(str4)

str = "         Javascript        "

//trim() - will remove whitespace in the beginning and end 

str5 = str.trim()

console.log(str5.length)

//str6 = str.trimEnd()

str6 = str.trimStart()

console.log(str6.length)

// length - will give Letters count 

st1 = "Javascript".toUpperCase()

console.log(st1)


st2 = "JavaScript".toLowerCase()

console.log(st2)

//includes() - true or false 

st3 = "This is Js calss - strings"

console.log(st3.includes("strings") )

//charAt()

str = "Javascript"

console.log(str.charAt(2))

console.log(str[2])

// strings are Immutable 

arr = ["Raju", "Veda", "Pavan", "Dhanusha"]

arr[0] = "Apparao"

console.log(arr)

str = "Raju"

str[1] = "K" // Strings are Immutable 

console.log(str)

//replace method to replace some chars 

st4 = "Laptop".replace("t", "p")

console.log(st4)

price = '₹14,099'.replace("₹", "").replace(",", "")  // "14099"

console.log(price)

price1 = Number("1321243")

console.log(typeof(price1))

st6 = Number("Raju")  // NaN

console.log(st6)

// Use case 

// Add brooli

// add cucumber to cart 

// verify total price of the cart is corect or not 

price1 = Number("180")

price2 = Number("60")

totalprice = Number("180")

price1+price2  //  180  === 180

//literals 


str = "Analyzing requirement \nBug reporting \nBug Tracking \nAutomation Using Playwright"

console.log(str)