"use strict";
let age = 20;
if (age < 2) {
    console.log("The person  is a Baby");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a Toddler");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a Kid");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a Teenager");
}
else if (age >= 20 && age < 65) {
    console.log("The person is  Adult");
}
else if (age >= 65) {
    console.log("The person is Elder");
}
