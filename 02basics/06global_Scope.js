// scopes in javascript 
let a = 45 

if(true){
    let a =34
    console.log(a) // 34 (kuki ye block scope ko access kar raha hai)
}

console.log(a) // 45   (kuki ye global scope ko access kar raha hai)





function one (){
    const user = "aarush"
    function two(){
        const user2 = "sarkari"
        console.log(user)
    }
    // console.log(user2) // ye error dega kyuki ye function ke andar hai aur function ke bahar access karne ki kosis kar raha hai
    two()
}
one()

// interesting 

addone(5) // ye kaam karega kyuki ye global scope me hai

function addone(num){
    return num + 1
}


console.log(addtwo(5)) // ye kaam nahi karega kyuki ye function expression hai aur ye global scope me nahi hai
const addtwo = function (num){
    return num + 1
}