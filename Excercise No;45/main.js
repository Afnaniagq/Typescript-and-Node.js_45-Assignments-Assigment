function create_car(manufacturer_name, model_name) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer_name: manufacturer_name,
        model_name: model_name,
    };
    //Add option with .forEach method
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var my_car = create_car("Toyota", "corolla", "color:white", "sunroof:true");
console.log(my_car);
