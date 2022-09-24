const num1 = Math.ceil(Math.random()*10);

const num2 = Math.ceil(Math.random()*10);

const inputE1 = document.getElementById("input");

const questionE1 = document.getElementById("q");

const scoreE1 = document.getElementById("score");

const formE1 = document.getElementById("form");

questionE1.innerText = `What is ${num1} multiply by ${num2}`;

const correctAns = num1 * num2;

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreE1.innerText = `score : ${score}`;

formE1.addEventListener("submit",()=>{
    const usrAns = +input.value;
    if(usrAns === correctAns){
        score++;
        result();
    }
    else{
        score--;
        result();
    }
})

function result(){
    localStorage.setItem("score", JSON.stringify(score));
}