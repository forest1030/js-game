const timeTableContainer = document.querySelector(".timeTableContainer"), 
    quest = timeTableContainer.querySelector('.js-quest'),
    btn = document.getElementById("btn");
const input = document.querySelector('input');
const result = document.querySelector(".js-result");


function exe(e){
    e.preventDefault();
    const userInput = parseInt(input.value);
    
    for(let a = 1; a < 10; ++a){
        let multi = userInput * a;
        result.innerText=`${userInput} x ${a} = ${multi}`;
    }
    
}
function init(){
    quest.innerText = "You want to select number (2 ~ 9)";
    btn.addEventListener("click", exe);
}

init();

for(let a = 1; a < 10; ++a){

    console.log(a);
}