"use strict";
let guestList = ["Areeba", "faiza", "hafsa", "sehar"];
// removing guest who can,t make it and adding new guest!
//option :1
console.log(guestList[1], "can,t makeit for dinner");
guestList.splice(1, 1, "anoshia");
//option :2
// let remove:string=guestList[1];
// let addition:string="anoshia";
// guestList[guestList.indexOf(remove)] =addition;
// console.log(guestList)
//console new mesage
console.log(" \n Good news! we found a bigger  table for dinner\n");
console.log(" \tUpdated list of new guest\t");
// Adding guest name in starting of Array;
guestList.unshift("Rumisa");
//Adding guest name in end of Array;
guestList.push("tehreem");
//finding the middle index of Array;
let middleIndex = Math.floor(guestList.length / 2);
//Adding guest name in the middle of Array;
guestList.splice(middleIndex, 0, "Bisma");
//console the list and message in new lines;
guestList.forEach(listed => console.log(`\nDear "${listed}"\n \tyou are invited to dinner Tonight\t`));
//number of guest invited for dinner!
console.log("Number of guest invited for dinner Tonight is", guestList.length);
