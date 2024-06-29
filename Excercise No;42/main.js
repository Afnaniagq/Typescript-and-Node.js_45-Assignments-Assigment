"use strict";
//making array:
let magician_names = ["fahad", "talha", "asif", "arbaz"];
//Making function with forEach Method: 
function show_magicians(magician_names) {
    magician_names.forEach(member => console.log(member));
}
//modifie array with "Great Magician" text:
function make_great(magician_names) {
    magician_names.forEach(current => console.log(`Great Magician "${current}"`));
}
//calling function:
make_great(magician_names);
//we can also use .map function for printing text: 
