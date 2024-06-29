"use strict";
let userName = ["Imran", "Nouman", "Admin", "Mohsin", "Hamza"];
userName = [];
if (userName.length === 0) {
    console.log("we need to find some users!");
}
else {
    userName.forEach(list => {
        if (list === "Admin") {
            console.log(`\nHello "${list}" would you like to see a status Report?`);
        }
        else {
            console.log(`\nHello "${list}" Thank you for loginig in again`);
        }
    });
}
//else{
//userName =[];
//console.log(`${userName}"list is empty"`)
//}
// else{userName.splice(0,5)}
//console.log(`${userName}"Array is Empty"`)
