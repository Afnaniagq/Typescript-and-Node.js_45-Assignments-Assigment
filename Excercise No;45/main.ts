function create_car(manufacturer_name:string,model_name :string,...options:string[]){
     let car = { 
           manufacturer_name:manufacturer_name,
           model_name:model_name,
           };

  //Add option with .forEach method
           options.forEach(option => {
            let [key,value] = option.split(":");
          car[key.trim()] = value.trim();

           });
         

        return car;
  }
     let my_car = create_car("Toyota","corolla","color:white","sunroof:true");

     console.log(my_car);
     
     