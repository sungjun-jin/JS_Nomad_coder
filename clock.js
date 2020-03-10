const clockContainer = document.querySelector(".js-clock"); //클래스명이 js-clock인 요소를 찾아줌, querySelector() 함수는 자식 엘리먼트의 요소들만 찾아준다.
const clockTitle = clockContainer.querySelector("h1");

function init() {

    getTime();

    // 1초마다 시간을 갱신해준다 
    // setInterval()의 첫번째 인자는 실행할 함수, 두번째 인자는 간격이다. millisec 단위로 실행 
    setInterval(getTime,1000); 
    

}

function getTime() {

    //Date 객체를 활용해 시,분,초를 가져온다 
    const date = new Date();    
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    // 시,분,초가 10 미만일 경우 맨앞에 0을 넣어준다. 
    //삼항 연산자 사용 
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`; 
}

init();


