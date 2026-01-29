 let dob = "2000-05-15";
//caluculating the age using dob
    let birthDate = new Date(dob);
    let currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    let monthDiff = currentDate.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }   
    console.log("Age is:", age);