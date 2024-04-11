// let taskList = [];

// function renderTasks() {
//     const list = document.getElementById('taskList');
//     list.innerHTML = '';
//     taskList.forEach((task, index) => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             <span>${task}</span>
//             <button onclick="editTask(${index})">Edit</button>
//             <button onclick="deleteTask(${index})">Delete</button>
//         `;
//         list.appendChild(li);
//     });
// }

// function addTask() {
//     const input = document.getElementById('taskInput');
//     const task = input.value.trim();
//     if (task !== '') {
//         taskList.push(task);
//         input.value = '';
//         renderTasks();
//     }
// }

// function editTask(index) {
//     const newTask = prompt('Enter new task:');
//     if (newTask !== null && newTask.trim() !== '') {
//         taskList[index] = newTask;
//         renderTasks();
//     }
// }

// function deleteTask(index) {
//     if (confirm('Are you sure you want to delete this task?')) {
//         taskList.splice(index, 1);
//         renderTasks();
//     }
// }

// renderTasks();
let taskList = [];

function renderTasks() {
    const list = document.getElementById('taskList');
    list.innerHTML = '';
    taskList.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" id="task${index}" onchange="toggleTask(${index})" ${task.completed ? 'checked' : ''}>
            <label for="task${index}">${task.name}</label>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        list.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById('taskInput');
    const taskName = input.value.trim();
    if (taskName !== '') {
        const task = { name: taskName, completed: false };
        taskList.push(task);
        input.value = '';
        renderTasks();
    }
}

function toggleTask(index) {
    taskList[index].completed = !taskList[index].completed;
    renderTasks();
}

function editTask(index) {
    const newTaskName = prompt('Enter new task:');
    if (newTaskName !== null && newTaskName.trim() !== '') {
        taskList[index].name = newTaskName;
        renderTasks();
    }
}

function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        taskList.splice(index, 1);
        renderTasks();
    }
}

renderTasks();
