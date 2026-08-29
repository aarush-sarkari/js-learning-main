// function in js 
function callmyname(){
    console.log("Aarush")
    console.log("Sarkari")
} 
  callmyname()
  function product(a,b){
    return a*b
  }
  console.log(product(5,6))

  // function to add two numbers 

  function add(a,b){
    return a+b
  }
  console.log(add(5,6))

  //showing error message if user does not provide any message
 
  function loginusermessage (username){
    return `Namastey🙏, ${username} aaiye swagat hai`
  }
  console.log(loginusermessage("Aarush Babu"))

  function error(message){
    if(message === undefined){
      return "Error: Please provide a message"
      return
    }
    return `Error: ${message}`
  }
  console.log(error("kuch nai mil raha hai"))
  // console.log(error())
  

  // *************   next lecture *********************


function calculateCartPrice (num1) {
  return num1
}
console.log(calculateCartPrice(200,300,40,50,60))

// function to show warning 
function warning(message){
  return `warning: ${message}`
}
console.log(warning("savdhaaaaaaaan"))