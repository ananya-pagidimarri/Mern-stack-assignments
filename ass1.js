let user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive:true,

  
};

// Read and print name and email
console.log("Name:", user.name);
console.log("Email:", user.email);
//Add a new property lastLogin: "2026-01-01"
user.lastLogin = "2026-01-01";

// List all remaining fields
console.log("Remaining fields:", Object.keys(user)); 
//delete
delete user.isActive;
console.log("After deletion:", user);
//delete isActive field
delete user.isActive;
//update role 
user.role = "admin";
console.log("After role update:", user);


