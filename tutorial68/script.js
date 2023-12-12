console.log("hello Anshuman");

// let boxes=document.getElementsByClassName("box")
// // console.log("boxes")

// boxes[2].style.backgroundColor="red";

// document.getElementById("red").style.backgroundColor="red";

/* Query selector : inline css using js */
// document.querySelector(".box").style.backgroundColor="green";


// console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="green";
})