let marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

// Add new subject
marks.computer = 90;

// Calculate total marks
const total = Object.values(marks).reduce((sum, mark) => sum + mark, 0);
console.log("Total marks:", total);

// Calculate average marks
const average = total / Object.keys(marks).length;
console.log("Average marks:", average);

// Find highest scoring subject
const highestSubject = Object.keys(marks).reduce((highest, subject) => 
  marks[subject] > marks[highest] ? subject : highest
);
console.log("Highest scoring subject:", highestSubject, "with", marks[highestSubject], "marks");

// Display all subjects and marks
console.log("All subjects:", marks);
