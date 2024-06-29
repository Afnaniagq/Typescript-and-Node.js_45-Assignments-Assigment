"use strict";
//making array:
let magican_names = ["fahad", "talha", "asif", "arbaz"];
//Making function with forEach Method: 
function show_magicians(magician_link) {
    magician_link.forEach(member => console.log(member));
}
//modifie array with "Great Magician" text:
function make_great(magician_link) {
    return magician_link.map(current => `Great Magician "${current}"`);
}
//making copy of original array:
let transform_array = magican_names.slice();
//copied array compare with make_great function:
let copied_array = make_great(transform_array);
//Original Array: 
console.log("\nOriginal Array");
show_magicians(magican_names);
//Copied Array:
console.log("\nCopy Array");
show_magicians(copied_array);
