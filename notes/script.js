const notesContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");

let notes=document.querySelectorAll(".input-box");

createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="./notes-app-img/images/delete.png"; 
    notesContainer.appendChild(inputBox).appendChild(img);
})
 
function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage()
    } else if(e.target.tagName==="p"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyUp=function(){
                updateStorage();
            }
        })
    }

})