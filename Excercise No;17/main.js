"use strict";
let guestList = ["Areeba", "faiza", "hafsa", "sehar"];
// removing guest who can,t make it and adding new guest!
//option :1
console.log(`\t ${guestList[1]},"can,t makeit for dinner\t"`);
guestList.splice(1, 1, "anoshia");
//option :2
// let oldGuest:string=guestList[1];
// let newGuest:string="anoshia";
// guestList[guestList.indexOf(oldGuest)] =newGuest;
// console.log(guestList)
//console new mesages:
console.log(" \n Good news! we found a bigger  table for dinner\n");
console.log(" \tUpdated list of new guest!\t");
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
//print new message "table not arrive in time"
console.log("\tIt is sad to annoouce that !new dinner table won’t arrive in time for the dinner\t");
//Removing guest with while loop & pop() method
while (guestList.length > 2) {
    let notInvite = guestList.pop();
    console.log(`\n sorry "${notInvite}" I cant invite you for dinner Tonight\n`);
}
//print message for remaning two person;
console.log("\t Invitation to the last to guest\t");
guestList.forEach(special => console.log(`\n Dear ${special} "you are still invited for dinner Tonight\n`));
//remove last 2 guest for empty list;
guestList.shift();
guestList.pop();
console.log(guestList, "List is empty!");
