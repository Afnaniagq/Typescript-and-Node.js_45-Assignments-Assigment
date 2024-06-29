let invite :string[]=["Areeba" ,"faiza", "hafsa" ,"sehar"]
let message:string="\"I would like to invite you for dinner\"";

//option 1

invite.forEach(person =>  console.log( (person) ,message));

//option 2

let i =0
for(let i =0 ;i< invite.length ; i++){
    console.log(`${invite[i] } ${message}`)
}

//option 3

invite.map((foodie) => console.log(`${foodie} ${message}`));