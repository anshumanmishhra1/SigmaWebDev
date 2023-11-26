console.log("Hey this is String tutorial");

let a="harry";
console.log(a);

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]); 

console.log(a.length); //it will tell the length

let real_name="harry";
let friend="rohan";
console.log("His name is "+ real_name + " and his friend name is "+ friend);

console.log(`his name is $(real_name) and his friend name is $(friend)`);


let b="shivam";
console.log(b.toUpperCase());
console.log(b.slice(2,4));
console.log(b.slice(1));
console.log(b.replace("sh","&&"));
console.log(b.concat(a,"Ash"));


//strings are immutable
console.log(b);