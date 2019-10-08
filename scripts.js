let masterTodoList = [
    {
        text: "git status",
        isDone: false
    },
    {
        text: "git commit",
        isDone: false
    },
    {
        text: "git push",
        isDone: false
    },
];

function addToList(){
    const item = document.getElementById("todo").value;
    masterTodoList.push({
        text: item,
        isDone: false,
    }); //add data
    document.getElementById("todo").value ='';
    renderTodos();
}
function renderTodos(status){
    let todos;
    if(status === 'done'){
        todos = masterTodoList.filter(todo => todo.isDone)
    }
    else if(status === 'undone'){
        todos = masterTodoList.filter(todo => !(todo.isDone))
    }
    else todos = masterTodoList;
    let html = todos.map((item,i) => {
        return `
            <div class="result-with-btn">
            <li style="margin: 10px" onclick='toggleDone(${i})' class='${item.isDone ? 'list-group-item active done' : 'list-group-item undone'}'>
            ${item.text}
            </li>
            <a style="margin: 10px" href="#" onclick='remove(${i})'class="btn btn-secondary btn-lg">x</a>
            </div>
        `
    });
    document.getElementById("result").innerHTML = html.join("");
}
function remove(index){
    masterTodoList.splice(index,1);
    renderTodos(masterTodoList);
}
function toggleDone(index){
    masterTodoList[index].isDone = !(masterTodoList[index].isDone);
    renderTodos();
}
renderTodos();
console.log(masterTodoList);