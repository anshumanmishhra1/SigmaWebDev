//Arithematic operator

// let a=5;
// let b=4;

// console.log("a + b = ",a+b);
// console.log("a - b = ",a-b);
// console.log("a * b = ",a*b);
// console.log("a / b = ",a/b);
// console.log("a % b = ",a%b);
// console.log("a ** b = ",a**b);


//Unary Operator

// let a=5;
// let b=4;
// b++;
// a--;
// console.log(a);
// console.log(b);


//comparison operator

// let a=5;
// let b="5";

// console.log("a == b", a==b);
// console.log("a === b", a===b);
// console.log("a != b", a!=b);
// console.log("a != b", a!=b);



// 📍CONDITIONAL STATEMENTS

// let age=35;
// if (age >18){
//     console.log("You can vote");
// }
// if(age<18){
//     console.log("You can't vote");
// }



// Practice 1: get user to input a number using prompt("enter a number: ").
// check if the number is multiple of 5 or not 

// let num=prompt("Enter a number : ");
// if(num % 5===0){
//     console.log(num,"is multiple of 5");
// }
// else{
//     console.log(num,"is not multiple of 5");
// }



// practice 2 : write a code which can give grades to 
// students according to their score : 
//     80-100 , A
//     70-89, B
//     60-69, C
//     50-59, D 
//     0-49 , F


let score=prompt("Enter a number : ");
let grade;
if(score>=90 && score<=100){
    grade="A";
    console.log(grade);
}

else if(score>=70 && score <=89){
    grade="B";
}
else if(score>=60 && score <=69){
    grade="C";
}
else if(score>=50 && score <=59){
    grade="D";
}
else if(score<49){
    grade="F";
}

console.log("Grade = ",grade);
