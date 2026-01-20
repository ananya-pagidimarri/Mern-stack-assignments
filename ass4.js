let courses = ["javascript", "react", "node", "mongodb", "express"];
//filter() courses with name length > 5
let longCourses = courses.filter(course => course.length > 5);
console.log("Courses with name length > 5:", longCourses);
//map() to convert course names to uppercase
let upperCaseCourses = courses.map(course => course.toUpperCase());
console.log("Courses in uppercase:", upperCaseCourses);
//reduce() to generate a single string:"JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let courseString = courses.reduce((acc, course, index) => {
  if (index === 0) {
    return course.toUpperCase();
  } else {
    return acc + " | " + course.toUpperCase();
  }
}, "");
console.log("Course string:", courseString);
//find() the course "react"
let reactCourse = courses.find(course => course === "react");
console.log("Found course 'react':", reactCourse);
//findIndex() of "node"
let nodeIndex = courses.findIndex(course => course === "node");
console.log("Index of 'node':", nodeIndex);
