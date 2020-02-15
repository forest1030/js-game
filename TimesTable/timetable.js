const timeTableContainer = document.querySelector(".timeTableContainer"), 
    quest = timeTableContainer.querySelector('.js-quest');
const input = document.querySelector('input');
const randomNum = Math.floor(Math.random() * 10)+1;


function question(){
    const randomA = Math.floor(Math.random() * 10)+1;
    const randomB = Math.floor(Math.random() * 10)+1;

    // const comAnswer = randomA * randomB;

    quest.innerText = `${randomA} x ${randomB} = ?`;

}

function init(){
    question();
}

init();