document.querySelector("#input").addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
    const input = document.querySelector("#input");
    addItem(input.value);}
    });
    
    document.querySelector("#add_item").addEventListener("click", () => {
    const input = document.querySelector("#input");
    addItem(input.value);
    });
    
    addItem = (input) => {
        if(input==""){
            const error = document.getElementById('error');
            error.textContent="please enter your task";
            return;
        }
        else{
            error.textContent='';
        
    const item = document.createElement("div");
    const div = document.createElement("div");
    const checkbox = document.createElement("input");
    const deleteIcon = document.createElement("span");
    const text = document.createElement("p");
    
    item.className = "item";
    text.textContent = input;
    text.style.color= "black";
    checkbox.type="checkbox";
    //checkbox.className = "fas fa-check-square";
    //checkbox.style.color = "lightgray";
    //checkbox.style.border="1px solid red";
    // checkbox.addEventListener("click", () => {
    // checkbox.style.color = "limegreen";
    // })
    div.appendChild(checkbox);
    
    deleteIcon.className = "glyphicon glyphicon-trash";
    deleteIcon.style = "darkgray";
    deleteIcon.addEventListener("click", () => {
    item.remove();
    })
    div.appendChild(deleteIcon);
    
    item.appendChild(text);
    item.appendChild(div);
    
    document.querySelector("#to_do_list").appendChild(item);
    document.querySelector("#input").value = "";
    }}