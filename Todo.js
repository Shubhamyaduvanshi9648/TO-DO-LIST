function addTask(){
    const task=document.getElementById('inputTask').value;
    const taskList=document.getElementById('tasklist');
    const li=document.createElement('li');
    li.textContent=task;
    taskList.appendChild(li);
    document.getElementById('inputTask').value="";
    }
function  deleteTask(){
    const taskList=document.getElementById('tasklist');
    taskList.removeChild(taskList.lastChild);
    

}