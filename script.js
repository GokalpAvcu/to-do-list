let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputText = document.getElementById("inputText");
let clearToDo = document.getElementById("clearToDo");

addToDoButton.addEventListener("click", function(){
    let paragraph = document.createElement("p"); // paragrafı oluştur
    paragraph.classList.add(".paragraph-styling");
    toDoContainer.appendChild(paragraph); // paragrafı div'in içerisine at
    paragraph.innerHTML = inputText.value; 
    inputText.value = ""; // yukarıdaki input text'in içeriğini sıfırla

    paragraph.addEventListener("click", function(){
      paragraph.style.textDecoration = "line-through";
    });

    paragraph.addEventListener("dblclick", function(){
           toDoContainer.removeChild(paragraph);
   });

   clearToDo.addEventListener("click",function(){
        paragraph.style.display = "none";
   })

})