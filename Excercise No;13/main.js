"use strict";
let transport = ["car", "bike", "bus", "cycle"];
let message = "i would like to ";
//step no:1
transport.forEach(choice => console.log(`"I would like to ride a ${choice}"`));
//step n0:2
for (let i = 0; i < transport.length; i++) {
    console.log(message, transport[i]);
}
;
//step no:3
transport.map((goals) => console.log(` I would like to ride a  "${goals}"`));
