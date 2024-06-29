let guestList :string[]=["Areeba" ,"faiza", "hafsa" ,"sehar"];

let rejected:string=guestList[2];


guestList.splice(2,1,"zainab")


let i=0
for (i=0 ;i<guestList.length ; i++){
    console.log( "Dear" ,guestList[i] , "you are invited for dinner Tonight")
}

console.log(`miss ${rejected} can,t make it for dinner`);

//option 2
// let guestList :string[]=["Areeba" ,"faiza", "hafsa" ,"sehar"];

// guestList[2]="umaima"
// console.log(guestList)