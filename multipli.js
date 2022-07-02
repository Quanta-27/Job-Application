const num1=Math.floor((Math.random()*10));
const num2=Math.ceil((Math.random()*10));
let qElem=document.getElementById("query");
const formEle=document.getElementById("form");
const inputElem=document.getElementById("input");
const scoreElem=document.getElementById("finalscore");
const verdict=document.getElementById("verDict");
qElem.innerText=`what is ${num1} multiplied by ${num2}? `;
let corrAns=num1*num2; 
let currscore=JSON.parse(localStorage.getItem("currscore"));
if(!currscore){ currscore=0; } 



scoreElem.innerText=`Final Score : ${currscore}`;

formEle.addEventListener("submit",()=>{
    let userAns=+inputElem.value ;
     if(userAns==corrAns){
        currscore++; 
        verdict.style.color="yellow";
       update();
  
     }
     else{
        currscore--;
        update();

         }
    
});

function update(){
    localStorage.setItem("currscore", JSON.stringify(currscore));
};





