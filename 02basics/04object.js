const gameuser = {}
gameuser.id = "aarush004"
gameuser.name = "Aarush"
gameuser.email = "aarush@example.com"

//EK OBJECT KE ANDAR KAI NESTED OBEJECTS BHI HOSAKTEY HAI 


console.log(gameuser)
//NESTED OBJECTS

const gameuser2 = {
    id: "aarush005",
    fullname: {
        username: {
            firstname: "Aarush",
            lastname: "Sarkari",
        }
    }
}
console.log(gameuser2)

const user = [
    {
        id: "1",
        name: "Aarush",
        email: "aarush@example.com"
    } , 
    {
        id: "2",
        name: "Hitesh",
        email: "aarush@gmail.com"
    }
]
console.log(user)
console.log(gameuser)
console.log(gameuser.key)

console.log(Object.keys(gameuser))

console.log(Object.values(gameuser))

console.log(Object.entries(gameuser))







//************trying it again for my own practice **********

const gameuser3 = {
    name: "akshita",
    email: "akshita@09.com",
    adress:{
        city: "delhi",
        phonenumber:{
            mobile: "1234567890",
            whatsapp: "0987654321"
        }
    }
}
console.log(gameuser3)
console.log(`${gameuser3.name} lives in ${gameuser3.adress.city}`)

const object1 = { a: 1, b: 2, c: 3 }
const object2 = { b: 2, c: 3, d: 4 }

const object3= { ...object1, ...object2 } 
console.log(object3) // { a: 1, b: 2, c: 3, d: 4 }


// other lecture


const course = {
    coursename : "js-hindi",
    price : "999",
    courseinstructor : "hitesh-sir"
}
console.log(course)
const {courseinstructor} = course
console.log(courseinstructor)


