//Making function 

function make_sandwich(...items:string[]){
    console.log("\nMaking sandwich with these following items:")
    
    //Using for Each method:        
    items.forEach(meal => console.log(meal))
     
    // console the message:
    console.log("\t\"Now enjoy your meal\"")
    }
    
    //calling function three times with different arguments: 
    
    make_sandwich("Chicken","Cheese","Tomato","Mayo",)
    
    make_sandwich("Butter","Egg","Onion")
    
    make_sandwich("Ketchup","Mayo","Cheese","Chicken","Chillies","Butter")
    
    