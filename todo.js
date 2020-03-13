    const toDoForm = document.querySelector(".js-toDoForm");
    const toDoInput = toDoForm.querySelector("input"); //To-Do Form내의 input을 가져온다
    const toDoList = document.querySelector(".js-toDoList");

    const TODOS_LS = "toDos"

    let toDos = []; //todoObj를 모아놓는 Array

    function init() {

        loadToDos();
        toDoForm.addEventListener("submit", handleSubmit);

    }

    function loadToDos() {

        //Local Storage에서 데이터를 가져온다 
         const loadedToDos = localStorage.getItem(TODOS_LS);

         if(loadedToDos !== null) {

            const parsedToDos = JSON.parse(loadedToDos);
            parsedToDos.forEach(function(toDo) {

                paintToDo(toDo.text);

            });
         }
    }

    function handleSubmit() {

        event.preventDefault(); //input submit의 
        const currentValue = toDoInput.value;
        paintToDo(currentValue);
        toDoInput.value="";

    }

    function paintToDo(text) {


        const newId = toDos.length + 1 //ID, ID는 배열의 크기 + 1 만큼 
        
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        const span = document.createElement("span");
        deleteButton.innerText = "❌";
        deleteButton.addEventListener("click",deleteToDo);
        deleteButton.style.backgroundColor="Transparent";
        span.innerText=text;   

        //appendChild = father element안에 삽입, 여기서 father element는 <li></li> 태그이다. 
        li.id = newId;   
        li.appendChild(deleteButton);
        li.appendChild(span);             
        
        //마지막으로 <ul>태그 안에 <li> 엘리먼트 삽입
        toDoList.appendChild(li);
        

        //to do 객체를 만들어준다
        const toDoObj = {

            text: text, //할일 본문
            id : newId           
        };

        toDos.push(toDoObj);
        saveToDos();
    }

    function saveToDos() {

        localStorage.setItem(TODOS_LS,JSON.stringify(toDos));


    }

    function deleteToDo(event) {

        //Button의 부모 엘리먼트 li
        const btn = event.target; 
        const li = btn.parentNode;

        toDoList.removeChild(li);

        const cleanToDos = toDos.filter(function(toDo) {
            

            return toDo.id !== parseInt(li.id);
        });

        toDos = cleanToDos;
        saveToDos();
        

    }

    init();

