// console.log("apna college");

/*  📌For Loop */

// for(let i=1;i<=5;i++){
//     console.log("apna college"); 
// }

/* sum of 1 to 5 
let sum=0;
for(let i=0;i<=5;i++){
    sum+=i;
}

console.log("sum = ", sum);

*/


/* 📌 While Loops

let i=1;
while(i<=5){
    console.log(i);
    console.log("apna college");
    i++;
}


*/

/* 📌Do-while Loops

let i=1;
do{
    console.log("apna colleegge");
    i++;
}while(i<=10);

*/


/* 📌 For of Loops 

let str="apnacollege";
let size=0;
for(let i of str){ 
    console.log(i);
    size++;
}

console.log("size = ", size);

*/


/* 📌For in Loop 

let student={
    name:"rahul kumar",
    age:20,
    cgpa:7.5,
    isPass:true
};

for(let i in student){
    console.log(i," ",student[i]);
}


*/



/* 📍Pracices questions : print all even numbers from 0 to 100

let i=0;
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}

*/

/* 📍Pracices questions : create a game where you start with any random game
number. Ask the user to keep guessing the game number untill the user enters the 
correct value.

*/
let gameNum=25;
let  userNum = prompt("guess the number : ");
while(userNum!=gameNum){
    userNum=prompt("You guessed the wrong number reTry");
}

console.log("congratulation🥳");