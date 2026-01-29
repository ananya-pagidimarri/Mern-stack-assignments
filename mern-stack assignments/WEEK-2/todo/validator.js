/*
Assignment 1: 
-------------
Task Management System (ToDo App Modules):
     Building a task manager like Todoist
Requirements:
     Create a modular todo app with 3 separate files:
        i. validator.js - Input validation
 // TODO: Export these validation functions
                      
// 1. Validate task title (not empty, min 3 chars)
// 2. Validate priority (must be: low, medium, high)
// 3. Validate due date (must be future date)
                      
*/
function validateTitle(title) {
    return typeof title === 'string' && title.trim().length >= 3;
}

function validatePriority(priority) {
    return ['low', 'medium', 'high'].includes(priority.toLowerCase());
}

function validateDueDate(date) {
    const dueDate = new Date(date);
    const today = new Date();
    today.setHours(0,0,0,0);
    return dueDate > today;
}

export { validateTitle, validatePriority, validateDueDate };