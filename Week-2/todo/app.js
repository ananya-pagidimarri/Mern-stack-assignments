/*Assignment 1: 
-------------
Task Management System (ToDo App Modules):
     Building a task manager like Todoist
*/
import { addTask, getAllTasks, completeTask } from './task.js';

// 1. Add some tasks
addTask("Finish project", "high", "2026-12-31");
addTask("Buy groceries", "medium", "2026-11-15");
addTask("Call mom", "low", "2026-10-10");

// 2. Display all tasks
console.log("All Tasks:", getAllTasks());

// 3. Complete a task
completeTask(2); // Mark task with ID 2 as complete

// 4. Display all tasks again
console.log("All Tasks after completing one:", getAllTasks());