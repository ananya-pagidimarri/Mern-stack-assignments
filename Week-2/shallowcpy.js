 const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
//Create a shallow copy of user
userCopy={...user}
console.log(userCopy)
//change name in the copied object
userCopy.name="Ravi Kumar"
console.log(userCopy)
//preferences.theme in the copied object
userCopy.preferences.theme="light"
console.log(userCopy)
console.log(user)