const body = document.querySelector("body");

const IMG_NUMBER = 2;

function init() {

    const randomNumber = getRandom();
    paintImage(randomNumber);

}

function paintImage(imageNumber) {

    const image = new Image();
    image.src = `./images/${imageNumber+1}.jpg`;
    image.classList.add("bgImage");    
    body.prepend(image);
}

function handleImageLoad() {

    console.log("finished loading");
}

function getRandom() {

    const randomNumber = Math.floor(Math.random() * 2); //0과 1의 랜덤숫자 생성

    return randomNumber;
}

init();