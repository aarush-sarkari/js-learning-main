 // array 
 const myarray = [0,7,6,5,3,4,5]
 console.log(myarray[4])

 const myarr2 = new Array(2,4,5,6,7,8,)
 console.log(myarr2[3])
 


 //ARRAY METHODS 
 // 1 :  PUSH ( ye bas array me values ko add kar deta hai )
 myarr2.push(87)
  myarr2.pop()
 console.log(myarr2)
 myarr2.unshift(0)
//  myarr2.shift() // shift se value hat. jaati hai starting me se 
 console.log(myarr2)

 console.log(myarr2.includes(7))
 console.log(myarr2.indexOf(7))


 const newArr = myarr2.join()
 console.log("a", newArr)
 console.log(typeof newArr)

 

  console.log("b", newArr)
 const mny2 = myarr2.splice(1,3)
  console.log("c",myarr2)
  console.log(mny2) 

  const newarr3 = new Array(4,2,3,1,0)
  console.log(newarr3)
  const newarr4 = console.log(newarr3.splice(1,3))
  console.log(newarr3)

  const array = new Array ('aarush')
    console.log(array)


