// const colors = ["green","red","rgba(133,122,200)",
// "#f15025"];

// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click",function (){
// const randomNumber = 2;
// document.body.style.backgroundColor = colors[randomNumber];
// color.textContent = colors[randomNumber];
// });






















const getColor = () => {
    // Hex code

    const randomNumber = Math.floor(Math.random() * 16777215)
    // console.log(randomNumber) ;

// For converting  Number  in  Hex-Code 
const randomCode = "#"  +  randomNumber.toString(16) ;
console.log(randomNumber , randomCode) ;
document.body.style.backgroundColor  =  randomCode ;
document.getElementById("color-code").innerText = randomCode ;

// Automatically Stores in Clipboard , just need to paste it.

navigator.clipboard.writeText(randomCode) ;
}

// Event Call
document.getElementById("btn").addEventListener("click" , getColor) ;

// Intial Call
getColor() ;