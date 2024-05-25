var input=document.querySelector("#txt");
var btn=document.querySelector("#btn");
var result=document.querySelector("#result");

btn.addEventListener("click",()=>{
    var inputlength = input.value.length;
    var ran = input.value.charAt(Math.floor(Math.random()*inputlength+1));
    result.innerText=ran.toUpperCase();
});