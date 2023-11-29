console.log("This is Array Lecture");

let arr=[1,2,4,5,7];
arr[0]=555;

// console.log(arr);
// console.log(arr,typeof arr);
// console.log(arr.length);

// //string is immutable but array is mutable
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[4]);

console.log(arr.toString());
console.log(arr.join(" and "));
console.log(arr.pop());

arr.push(100);
console.log(arr);

arr.shift();
console.log(arr);

/* Concatinting two arrays :  */

let a1=[1,2,3];
let a2=[4,5,6];
let a3=[7,8,9];

let b=a1.concat(a2,a3);
console.log(b);


/* Sorting the array  */

let b1=[3,2,1,4,5];
b1.sort();
console.log(b1);


/* Splice is used to move or insert an element 
    from a particular position  */

let c=[1,2,3,4,5];
c.splice(1,2);
console.log(c);