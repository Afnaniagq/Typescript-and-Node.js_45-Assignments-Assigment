"use strict";
//making funcation with default size & message: 
function make_shirt(size = "Large", message = "I Love Typescript") {
    console.log(`\nYou selected "${size}"size shirt with message "${message}" print on shirt`);
}
//Default   
make_shirt();
//Medium size Default message
make_shirt("Medium");
//size & message
make_shirt("small", "Be positive");
