// falsy values 

// 0 , false , -0 , BigInt 0n , "", null , undefined , NaN
// truthy values 

// "0" , 'false', " " , [] , {} , function (){} , 

// Nullish Coalescing operator (??)
let val1 
// val1 = 5??10
 val1 = null??98
console.log(val1)

// ternarary operator 

// condition ? true : false 

const coffeePrice = 90 
coffeePrice >=80 ? console.log(true) : console.log(false)
