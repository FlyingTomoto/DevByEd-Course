// Important when working with numbers and strings

const bank1 = 100;
const bank2 = 50;

const allBanks = bank1 + bank2;

console.log(allBanks); // will output a result of 150

const greeting = "Welcome to our website";
const user = "Ed";

console.log(greeting + user); // will output an result of "Welcome to our websiteEd"...we dont want this, to have a space between we need to add a space after "website" or before "ed" in the const

//another cool way to add a variable at the end of the greeting for example without worrying about spaces, also need to have the user info first as it reads from top down

const user = "Ed";
const greeting = `Welcome to our website ${user}`;

// to add quotes within the variable, you need to add a \, see below

const greeting1 = 'Bob once said "I am Bob" ';

console.log(greeting1); // Output would be "Bob once said "I am Bob"

// or you can have single quotes around the main and double within, see below

const greeting2 = 'Bob once said "I am Bob" ';

console.log(greeting1); // Output would be "Bob once said "I am Bob"

// When you have a single ' in a string you need to have the \ before

const greeting2 = 'Bob\'s brother once said "I am Bob" ';

console.log(greeting1); // Output would be "Bob once said "I am Bob"

// The best solution of them all to this kind of nonsence, use this thing `

const greeting2 = `Bob once said "I am Bob" `;

console.log(greeting1); // Output would be "Bob once said "I am Bob"
