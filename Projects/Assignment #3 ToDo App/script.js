const taskDIV = document.getElementById("taskDiv");
let addTaskCard = document.getElementById("addTaskCard");

function displayAddTaskCard() {
    addTaskCard.classList.add("display");
}

function deleteTask(element) {
    element.parentElement.parentElement.remove();
}

function checkTask(element) {
    let taskContainer = element.parentElement.parentElement;
    taskContainer.style.backgroundColor = "gray"; 
    taskContainer.style.textDecoration = "line-through";
}

function submitTask() {
    let taskTitle = document.getElementById("taskTitle").value;
    if (taskTitle.trim() === "") {
        alert("Please enter a task.");
        
    } else {

        taskDIV.innerHTML += `
            <div class="todo-task">
                <div>
                    <button onClick="deleteTask(this)">
                        <img src="delete.png" alt="Delete Task">
                    </button>
                </div>    
                <h3> ${taskTitle} </h3>
                <div>
                    <button onClick="checkTask(this)">
                        <img src="check.png" alt="Complete Task">
                    </button>
                </div>      
            </div>
        `;
    
        addTaskCard.classList.remove("display");
        document.getElementById("taskTitle").value = ""; 
        
    }

}
