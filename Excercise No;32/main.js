"use strict";
//Array of current users:
let current_users = ["areeba", "Rimsha", "Dua", "Hira", "Rida"];
//Array of new users:
let new_users = ["Meryam", "Qurat", "dua", "Areeba", "Fiza"];
//using .FOREACH  & .SOME() method with IF/ELSE statement:
new_users.forEach(welcome => {
    let condtion = current_users.some(old => old.toLowerCase() === welcome.toLowerCase());
    if (condtion) {
        console.log(`sorry username "${welcome}" is already Taken`);
    }
    else {
        console.log(`The username "${welcome}" is available`);
    }
});
