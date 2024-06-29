//Making variables:

let food : string = "biryani";
let dinner :string = "BIRYANI";
let ten :number =10;
let five :number =5;
let books:string[]=["English","Urdu","math","Science"];


//Test for equality ==  & unequality !=:
console.log("Conditional Test 1: food is equal to Briyani?");
console.log(food == "biryani");

console.log("Conditional Test 2: food is notequal to biryani?");
console.log(food != "biryani");

//Test for lowercase funcation isequal or notequal:

console.log("conditional Test 3: Is BIRYANI is equal to biryani after converting into lowercase?");
console.log( dinner.toLowerCase() == "biryani")

console.log("conditional Test 4 : Is BIRYANI is notequal to biryani after converting into lowercase?")
console.log( dinner.toLowerCase() != "biryani")

//Numerical Test!

//Equal to & not equal to:

console.log("ten is equal to 10?");
console.log(ten == 10);

console.log("ten is not equal to 10?");
console.log(ten != 10);

//Greater than & less than:

console.log("ten is greaterthan 5?");
console.log(ten > 5);

console.log("ten is lessthan five?");
console.log(ten < 5);

//Greater than or equal to / less than or equal to:

console.log("five is greaterthan or equal to 5?");
console.log(five >= 5);

console.log("ten is  lessthan or equal to 10?");
console.log (ten <= 5 );

//Test for and(&&) operator:

console.log("Is ten is greater than 5 & five is lessthan 10? ");
console.log(ten > 5 && five < 10);

console.log("Is ten is not equal to 5 & five is equal to 10? ");
console.log( ten  != 5 && five == 10);

//Test for or(||) operator:

console.log("Is five is equal to 5 or ten is smaller than 5? ");
console.log(five == 5 || ten < 5);

console.log("Is ten is  lessthan 5 or five is  equal  10?");
console.log( ten < 5 || five == 10 );

//Test item  is an array:

console.log("The English book is in my list ?");
console.log(books.includes("English"));

console.log("Is Physics book is in my list ?");
console.log(books.includes("Physics"));
