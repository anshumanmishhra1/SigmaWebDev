console.log("create a calculator");

let random=Math.random()
let a=prompt("Enter first Number : ");
let b=prompt("Enter second Number : ");
let c=prompt("Enter Operation : ");

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

if(random>0.1){
    // perform corrrect calculation
    console.log(`The result is ${a} ${c} ${b}`);
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else{
    // performing wrong calculation

    c=obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}