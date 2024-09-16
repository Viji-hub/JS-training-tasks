// const numbers = [9, 19, 1, 3, 7, 4, 5, 17];
// console.log(numbers);
// console.log(Math.max(...numbers));

const tasks = [
    {
        desc : 'Requirement Analysis',
        date : new Date().toDateString(),
        done : false,
        doneDate: ''
    },
    {
        desc : 'Design',
        date : new Date().toDateString(),
        done : false,
        doneDate: ''
    },{
        desc : 'Developement',
        date : new Date().toDateString(),
        done : false,
        doneDate: ''
    },{
        desc : 'UnitTesting',
        date : new Date().toDateString(),
        done : false,
        doneDate: '' 
    }
];

const completedTasks = [];

function getTaskRow(taskRow, task, index) {
    const taskEle = document.createElement('span');
    const editBtn = document.createElement('button');
    const doneBtn = document.createElement('button');

    taskEle.innerHTML = `${index}.  ${task.desc} ➡ ${task.date} ➡ ${task.doneDate}`;
    editBtn.appendChild(document.createTextNode('Edit'));
    doneBtn.appendChild(document.createTextNode('Done'));
    editBtn.classList.add('editBtn');
    doneBtn.classList.add('doneBtn');
    editBtn.addEventListener('click', editFunction);
    doneBtn.addEventListener('click', doneFunction);

    if(task['done']) {  
        doneBtn.classList.add('hide');
    }

    taskRow.appendChild(taskEle);
    taskRow.appendChild(editBtn);
    taskRow.appendChild(doneBtn);
    taskRow.setAttribute('orderId', index);
}

function addTask() {
    const taskInput = document.querySelector('.inputContainer #task');
    const outputEle = document.querySelector('.outputContainer .result');

    console.log(taskInput);
    if(taskInput.value.length === 0) {
        alert('Enter the task desc and Add..!!');
        return;
    }

    const task = {
        desc : taskInput.value,
        date : new Date().toDateString(),
        done : false,
        doneDate: ''
    };
    
    const taskRow = document.createElement('div');
    taskRow.classList.add('task-row');
    getTaskRow(taskRow, task, tasks.length+1);
    outputEle.appendChild(taskRow);
    tasks.push(task);

    taskInput.value = '';
}

function editFunction(e) {
    let task = prompt("Please enter your task desc");
    if (task === null || task == '') {
        console.log(task, e);
        return;
    }
    const taskNode = e.target.parentNode.querySelector('span');
    const existTask = tasks[e.target.parentNode.getAttribute('orderId') - 1];
    taskNode.innerHTML = `${e.target.parentNode.getAttribute('orderId')}.  ${task} ➡ ${existTask.date} ➡ ${existTask.doneDate}`;
}

function doneFunction(e) {
    e.target.classList.add('hide');

    const targetRow = e.target.parentNode;
    targetRow.parentNode.removeChild(targetRow);
    
    const doneTime = new Date().toLocaleTimeString();
    const taskIndex = targetRow.getAttribute('orderId') - 1;

    const taskNode = targetRow.querySelector('span');
    taskNode.innerHTML += `CompletedOn : ${doneTime}`;

    tasks[taskIndex]['doneDate'] = `CompletedOn : ${doneTime}`;
    tasks[taskIndex]['done'] = true;
    completedTasks.push(tasks[taskIndex]);
    delete tasks[taskIndex];    
    const editBtn = targetRow.querySelector('.editBtn');
    targetRow.removeChild(editBtn);

    const completedTaskEle = document.querySelector('.completedTask .result');
    completedTaskEle.appendChild(targetRow);

}

const outputEle = document.querySelector('.outputContainer .result');

tasks.forEach((task, index) => {
    const taskRow = document.createElement('div');
    taskRow.classList.add('task-row');
    getTaskRow(taskRow, task, index+1);
    outputEle.appendChild(taskRow);
});

