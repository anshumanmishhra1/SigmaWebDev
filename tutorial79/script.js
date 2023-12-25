let a = prompt("Enter a number")
let b= prompt("Enter second number")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}
let sum= parseInt(a) + parseInt(b);


try {
    console.log("the sum is : ", sum*x)
    
} catch (error) {
    console.log("error aa rha hai bro")
}

finally{
    console.log("Files are being and db connection is being closed")
}


