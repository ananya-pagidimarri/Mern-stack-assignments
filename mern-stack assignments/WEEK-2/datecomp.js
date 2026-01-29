 let enrollmentDeadline = new Date("2026-01-20");
    console.log("Enrollment Deadline:", enrollmentDeadline.toString());
//check if the current date is before the enrollment deadline
    let currentDate = new Date();
    if (currentDate < enrollmentDeadline) {
        console.log("Enrollment is still open.");
    } else {
        console.log("Enrollment has closed.");
    }
//Validate user input date:
let inputDate=new Date('2026-02-30')
if(isNaN(inputDate)){
    console.log("Invalid Date")
} else{
    console.log("Valid Date:",inputDate.toString())
}