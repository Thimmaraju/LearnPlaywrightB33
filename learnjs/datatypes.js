

// Javascript is dynamically typed language 

// If in JAVA 

//  Int x = 5

// 1. String 

// x = 'Raju'   // string 

// x = "raju"  // string 

// x = `Raju`  // string 

// x = '54'   // string 

//typeof()

str1 = 34.8

// console.log(typeof(str1))

str2 = "raju's place"


//tagname[@attr='attrvalue']

str3 = "//input[@name='username']"


// true or false  - Boolean values


// x= false

// console.log(typeof(x))

// 4. undefined

var x ;

console.log(typeof(x))

// value is undefined and datatype also undefined

var y = undefined   // var y

var k = null;   // empty 

console.log(typeof(k))  // Object 

// C - pointers 

// null - object 

//2^53 

// console.log(2**53)

// >9007199254740992

// x = 89756905885460985409685961n

// y = 5n

//89756905885460985409685966
console.log(x+y )

//8.975690588546098e+25

//var x = await page.locator(xpath).textContext()

//Non Primitive 

var username = "Admin"
var password = "admin123"

console.log(username)

arr = ["Admin", "admin123"]


arr[0]  // Admin

arr[1]  // "admin123"


arr2 = ["Raju", 24, true, undefined, null]


// index always strats from 0

console.log(typeof(arr2))

car = {

    model : "V4",
    make : "KIA",
    year : 2026,
    automatic : true
}

car.make   // KIA

console.log(typeof(car)) //2026

//extracting specific types of data 



var x = "4t76347ytg54bfh5y7f347yr7834tr7634hr8734t6r6734hrnf34utr";

var numbers = x.match(/\d/g).join('');
var characters = x.match(/[a-zA-Z]/g).join('');

console.log("Numbers:", numbers);
console.log("Characters:", characters);

