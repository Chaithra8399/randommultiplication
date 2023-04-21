const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);
let score=JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0; 
}

const quest=document.getElementById("question");
const input1=document.getElementById("input");
quest.innerText=`what is ${num1} multiply ${num2}?`;
const form1=document.getElementById("form");
const corans=num1*num2;
scoree=document.getElementById("score");
scoree.innerText=`score:${score}`;

form1.addEventListener("submit", ()=>{
    const userans=+input1.value;
    if(corans===userans){
        score++;
        updatelocalstorage()
    }
    else{
        score--;
        updatelocalstorage()
    }
});
function updatelocalstorage(){
    localStorage.setItem("score",JSON.stringify(score))
}
