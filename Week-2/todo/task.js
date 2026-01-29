/*Assignment 1: 
-------------
Task Management System (ToDo App Modules):
     Building a task manager like Todoist

Requirements:
     Create a modular todo app with 3 separate files:

       ii. task.js - Task operations
                    // TODO: Import validator functions
                    // import { ... } from './validator.js';
                    
                    const tasks = [];
                    
                    // 1. Add new task
                    
                    
                    // 2. Get all tasks
                    
                    
                    // 3. Mark task as complete
                   
                  // Export functions*/
import { validateTitle, validatePriority, validateDueDate } from './validator.js';

const tasks = [];
function addTask(title, priority, dueDate) {
    if (!validateTitle(title)) {
        console.log("Invalid title. It must be at least 3 characters long.");
        return;
    }
    if (!validatePriority(priority)) {
        console.log("Invalid priority. It must be one of: low, medium, high.");
        return;
    }
    if (!validateDueDate(dueDate)) {
        console.log("Invalid due date. It must be a future date.");
        return;
    }
    const newTask = {
        id: tasks.length + 1,
        title,
        priority,
        dueDate,
        completed: false
    };
    tasks.push(newTask);
    console.log("Task added successfully:", newTask);
}

function getAllTasks() {
    return tasks;
}

function completeTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = true;
        console.log(`Task ${taskId} marked as complete.`);
    } else {
        console.log(`Task with id ${taskId} not found.`);
    }
}

export { addTask, getAllTasks, completeTask }