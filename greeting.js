const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

//User Local Storage
const USER_LS = "currentUser"; //User Local Storage Key 
const SHOWING_CN = "showing" //display : block

function init() {

    loadName();

}

function paintGreeting(text) {

    form.classList.remove(SHOWING_CN); //이름을 입력받는 form 제거
    greeting.classList.add(SHOWING_CN); // greeting 메세지 출력
    greeting.innerText = `Hello,  ${text}!`; 
}

function handleSubmit(event) {

    // form event가 처리되는 default 로직을 제거
    // default : 페이지 새로고침     
    event.preventDefault(); 

    const currentValue = input.value; // input에 담긴 value(사용자의 이름)를 가져온다.     

    paintGreeting(currentValue); // greeting 메세지 출력
    saveName(currentValue); // 사용자 이름 저장
}

function saveName(name) {

    localStorage.setItem(USER_LS,name) //사용자의 이름을 local storage에 저장 
}

function askForName() {

    form.classList.add(SHOWING_CN); //text-form을 출력
    form.addEventListener("submit",handleSubmit); //form에 대한 submit 이벤트 리스너 
}

function loadName() {

    const currentUser = localStorage.getItem(USER_LS); //local stroage에서 사용자 이름을 가져온다 

    if(currentUser === null) {

        // 유저 존재 X 
        askForName();

    } else {

        //존재
        paintGreeting(currentUser); 

    }
}

init();