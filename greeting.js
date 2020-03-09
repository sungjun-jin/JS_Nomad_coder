const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

//User Local Storage
const USER_LS = "currentUser"; 
const SHOWING_CN = "showing" //보이게 하는 함수 

function init() {

    loadName();

}

function paintGreeting(text) {

    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello,  ${text}!`;
}

function handleSubmit(event) {

    event.preventDefault(); // form event가 처리되는 default 방식을 제거 
    const currentValue = input.value; // input에 담긴 value를 가져온다.     
    console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);
}

function saveName(name) {

    localStorage.setItem(USER_LS,name)
}

function askForName() {

    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function loadName() {

    const currentUser = localStorage.getItem(USER_LS);
    console.log(currentUser);

    if(currentUser === null) {

        // 유저 존재 X 
        askForName();

    } else {

        //존재
        paintGreeting(currentUser); 

    }
}

init();