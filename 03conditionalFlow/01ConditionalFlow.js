const userloggedin = true

const loggedinfromemail = true 

const debitCard = true 


if(userloggedin&&debitCard&2==3){
    console.log("allow to buy course")
}

if(userloggedin||loggedinfromemail){
    console.log("User Logged In")
}