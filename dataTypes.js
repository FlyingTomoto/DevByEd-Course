//Primitive Data Types

//Numbers
const day = 5;
console.log(typeof day); // should put out that is it a number, basically asking what sort of a value is "day"

//Strings - simple text
const name = "Dev Ed"
console.log(typeof name)

//Booleans - is more or less a true or false value
const isLogged = true; // are they logged in? if true than display something
const isLogged = false; // if they are not logged in then dont display said information

//Undefined - more or less a variable with no value
let day;
console.log(day); // will come back with undefined as day is not defined 

//Null - assigning a value of nothing
let minute = null;

//Symbol - used as a unique identifer inside objects to not conflict with other properties, rarely used
const name = Symbol();
