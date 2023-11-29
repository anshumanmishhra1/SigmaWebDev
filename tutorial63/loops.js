let a=[1,5,6,93,88];

for(let i=0;i<a.length;i++){
    const element = a[i];
    console.log(element)
}

a.forEach((value, i, a)=>{
    console.log(value,i,a)
})