// let a=6;
// function factorial(number){
//    let arr= Array.from(Array(number+1).keys())
//    console.log(arr.slice(1,))
//    let c = arr.slice(1,).reduce((a,b)=>{
//     return a*b;
//    })

//    console.log(c);
// }

// factorial(a);


/*📌Another mehtod to solve this problem */

// let a=5;
// let fact=1;
// function factorial(number){
//     for(let index=1;index<=number;index++){
//         fact=fact*index;
//     }
//     return fact;
// }

// factorial(a);


let a = 5;
let fact = 1;

function factorial(number) {
    for (let index = 1; index <= number; index++) {
        fact = fact * index;
    }
    return fact;
}

factorial(a);


