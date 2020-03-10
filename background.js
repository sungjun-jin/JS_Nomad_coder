const body = document.querySelector("body");

const IMG_NUMBER = 2; //이미지의 갯수 

function init() {

    const randomNumber = getRandom();
    paintImage(randomNumber);

}

function paintImage(imageNumber) {

    const image = new Image();
    image.src = `./images/${imageNumber+1}.jpg`; //랜덤 숫자로 이미지 src를 가져온다

    image.classList.add("bgImage"); //이미지 출력   
    body.prepend(image); 
}

function getRandom() {

    //랜덤 숫자 생성

    const randomNumber = Math.floor(Math.random() * 2); //0과 1의 랜덤숫자 생성

    return randomNumber;
}

init();