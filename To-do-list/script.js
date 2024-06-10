function add(e){
    e.preventDefault();
    let newItem = document.querySelector(".add_item_box input").value;
    if(newItem){
        newLi = document.createElement("li");
        newLi.className = "items";
        newSpan = document.createElement("span");
        newLi.appendChild(newSpan);
        newSpan.innerText = newItem;
        newDiv = document.createElement("div");
        newDiv.className = "items_icons";
        newIconOne = document.createElement("i");
        newIconOne.className = "fa-solid fa-pen-to-square";
        newIconOne.addEventListener("click", editItem);
        newIconTwo = document.createElement("i");
        newIconTwo.className = "fa-solid fa-trash-can";
        newIconTwo.addEventListener("click", deleteItem);
        newDiv.appendChild(newIconOne);
        newDiv.appendChild(newIconTwo);
        newLi.appendChild(newDiv);
        document.querySelector(".list_items").appendChild(newLi);
        document.querySelector(".add_item_box input").value = "";

    }
}


function editItem(e){
    let selectedItemLi = e.target.parentElement.parentElement;
    let selectedItemActionDiv = e.target.parentElement;
    let newIcon = document.createElement("i");
    newIcon.className = "fa-solid fa-check";
    newIcon.addEventListener("click" , submitEditedText)
    let newInput = document.createElement("input");
    newInput.type = "text";
    newInput.value = selectedItemLi.querySelector("span").innerText;
    selectedItemActionDiv.appendChild(newIcon);
    selectedItemLi.prepend(newInput)
    selectedItemLi.querySelector("span").style.display = "none";
    selectedItemActionDiv.querySelector(".fa-pen-to-square").style.display = "none";
    selectedItemActionDiv.querySelector(".fa-trash-can").style.display = "none";

}
function submitEditedText(e){
    let selectedItemLi = e.target.parentElement.parentElement;
    let selectedItemActionDiv = e.target.parentElement;
    let editedText = selectedItemLi.querySelector("input").value;
    if(editedText){
        selectedItemActionDiv.querySelector(
          ".fa-pen-to-square"
        ).style.display = "inline-block";
        selectedItemActionDiv.querySelector(".fa-trash-can").style.display = "inline-block";
        selectedItemActionDiv.querySelector(".fa-check").remove();
        selectedItemLi.querySelector("input").remove();
        selectedItemLi.querySelector("span").innerText = editedText;
        selectedItemLi.querySelector("span").style.display = "inline-block"

    }
}     
function deleteItem(e){
    let res = confirm(`are you sure you want to delete "${e.target.parentElement.parentElement.querySelector("span").innerText}"`);
    if(res){
        e.target.parentElement.parentElement.remove();
    }
}           
function search(e){
    e.preventDefault();
    let searchQuery = document.querySelector(".search_box input").value;
    let items = document.querySelectorAll(".list_items li");
    if(items.length){
        items.forEach(item =>{
            if(item.innerText.includes(searchQuery)){
                item.style.display = "flex"
            }else{
                item.style.display = "none"
            }
        })
    }
}