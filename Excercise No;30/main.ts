let userName=["Imran","Nouman","Admin","Mohsin","Hamza"];

userName.forEach( special => {
    if ( special === "Admin"){
        console.log(`\nHello! ${special}  would you like to see a status report?`)
    }
    else{

        console.log(`\nHello ${special} thank you for logging Again`)

    }
})
