const timeTableContainer = document.querySelector(".timeTableContainer"), 
    quest = timeTableContainer.querySelector('.js-quest');
const input = document.querySelector('input');


function result(){
    while(true){
        const randomA = Math.floor(Math.random() * 10)+1;   // 1 ~ 10 random num
        const randomB = Math.floor(Math.random() * 10)+1;   // 1 ~ 10 random num
        const comResult = randomA * randomB;   // computer answer
        const userResult = input.value;
        quest.innerText = `${randomA} x ${randomB} = ?`;
        while(true){
            // quest.innerText = `${randomA} x ${randomB} = ?`;
            if (userResult === comResult){
                alert('Next question');
            }
            else if(userResult !== comResult){
                alert('Do it again');
            }
        }

    }
    // quest.innerText = `${randomA} x ${randomB} = ?`;

}


function init(){
    result();
}

init();