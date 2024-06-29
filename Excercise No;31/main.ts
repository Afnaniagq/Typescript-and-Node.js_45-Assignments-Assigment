let userName=["Imran","Nouman","Admin","Mohsin","Hamza"];

//Making an empty array !

userName =[]
if ( userName.length === 0){
    console.log("we need to find some users!");
 }

 //Using for loop with else method!

else{userName.forEach(list =>{
    if(list === "Admin"){
        console.log(`\nHello "${list}" would you like to see a status Report?`)
    }
    else{console.log(`\nHello "${list}" Thank you for loginig in again`)}
})}
 
 // else{userName.splice(0,5)}
  //console.log(`${userName}"Array is Empty"`)

  


    
