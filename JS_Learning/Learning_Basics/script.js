var a = 12;
var b = 14;

console.log("Hey");

// Inbuilt Feature : Console, alert, prompt
// Console.log => message, Console.warn => warn, console.error => error

console.log("Om Panpatil");

console.warn("Om");

console.error("O");

// Alert

alert("Hey, How are you! We will catch you in a short time")

// Prompt alert ka bhai hai jou ki aek kadam aage hai

prompt("Tell us your best time")

// Variables and Constants

// Variables and constants are both container. But, in variables the value changes and in constants the values remain the same always as it is always setup and can't be changed.

// Har programming language mein data hotta hai aur data sae deal karna hotta hai. 
// Aur wou alag alag prakaar ka data ho sakhta hai aur abb aisa data jissie humein deal karna hai, wou save toh karna padega na, toh wou data save karne ke liye hume koi saving space chahiye jaha data save hojaye and yeh save karne ke liye unhe kuvh naam bhi denna padega.
// And yeh save karne ke liye unhe kuch naam bhi dena padega and isliye humein variables and constants banane padte hai taaki data save hojaye and unka koi naam bhi ho taaki hum unhe baadmae save kar paaye.
// Example: ATM Software.

// Variables and constants hote hai data save karne ke liye and variables mein data store or change bhi hojata hai. But, in constants data store and change nahi hotta agar aek baar data save kar lennae ke baad.
// Dono hi browser par memory lete and browser RAM par chalta hai to technically dono RAM par chalte hai 
// COde runs on the local system laptop or desktop and every programms run on Ram in devices so when we go live it will run in chrome and data must be save so it will take the help of chrome storage and save it but they all run from RAm and then they all run from RAM.

var a = 23;
var b = 35;
const c = 32;

// Compilers and Interpreters 
// Compiler : Task get solves slowly but it runs fastly.
// Interpreters : Task get solves fastly but it runs slowly.
// Js english language use karti hai and computers english nahi samjhte, wou samajhte hai ( 0 and 1 / current flow or current bypass ) bhi keh sakhte ho, And hum chahte hai hum english mae likh ke computer sae baat karre.
// Toh hum aek translator lagaye jou ki humara code english mae lega and usse 0 and 1 mae convert kar degga.
// compiler and interpreters translator hai jou ki english code ko convert kar rahe hai machine code mein.
// Compiler converts the code first into machine code mein yeh hottae faster but slower conversion rate hotta hai
// Java, C => Compiler type of language.
// JS is a interpreters type of language.

// But there is a compiler called JIT (Just In Time) COmpiler which introduced the both as first it runs with the power of interpreter and then it run as a compiler.
// OR Interpreter ki shuruati taakat use karte hai and compiler ki running taakat use karta hai.
// Compiler --> Machine code --> output
// Interpreters --> byte code --> machine code --> output


// WINDOWS -->

// Windows is a collection of tools that browsers offered.
// like chrome in built features as conole, prompt, alert, etc.
// There are many features which are frequently used in js and they are not the part of js, they are not the part of js the language but they are available in browser.
// And when you use them in Js they are called from the browser and not the Js.
// Window aek bucket smajh lo jismein saari wou cheejein available hai jou browser data hai js mein use karne ke liye kyuki wou saari cheejein js ka part nahi balki browser ka part hai which is available to use in js, all these features which are made available via browser are put inside window.

// TYPES :
// types matlab data ka roop 
// Om --> String
// 12 --> Integer
// 12.3 --> float
// 12.0 --> float
// True/False --> Boolean
// a --> Character

// Data Types is of Two types : (a) Primitive DT , (b) Reference DT
// (), [], {} --> These brackets are called as the reference DT
// 12, 12.0, 12.44, Om, True/False, a, null, undefined --> Primitive DT

var d = 24;
var e = d; 

// 12.4 ==> 16:5

// variablename.pop(); --> to remove last unit

// To copy a variable or primitive data types we can use the Spread Operator :
var ar = [12,13,14,15];
var gh = [1,2,3];
var ba = [...gh];

// Conditionals :
// True or false statements,
// if-else, else-if, ternary operator, Switch Case
// Jab bhi aapko program mein decision lenna ho, ki aage ka execution kaisa ho toh waha par if else else-if use hota hai.
// In If condition mein humeisha true ya false aata hai
// Har value ko true ya false banaya jaa sakhta hai, yeh depend karta hai, ki wou value ka type kya hai, agar wou value, truthy hai toh true banegi and falsy toh false.
// Falsy : Null, document.all ,0, blank string --> (" " , ' '), undefined, NaN, false ==> can be identifying using boolean as it helps to give the value in True or False.
// Truthy : 12,45, false, document.all, null, true, "hekllo" 

if(num>13){
    console.log("13 is greater than the given number.");
}
else{
    console.log("13 is lesser than the given number");
}

// Else-if condition :

if(age<18){
    console.log("Under age");
}
else if(age == 18){
    console.log("You are eligible but still have some restriction");
}
else{
    console.log("You are eligible");
}

// Loops :
// Loops = Repeat
// For, while, do-while loop, foreach, forin, forof

// for(initialization; condition; updation){}
// for(start;end;change){}
// for(initialization;condition;updation){}
// for(start;end;change){}
// for(initialization;condition;updation){}
// for(start;end;change){}
// for(start;end;change){}
// for(start;end;change){}
// for(start;end;change){}
// for(start;end;change){}
// for(start;end;change){}
// for(start;end;change){}
// for(initialization;condition;updation){}

// 1-10; 25-50, 35-40, 20-5, 5-1

// for(start;end;change){}

for(var i=1; i<=10; i++){
    console.log(i);
}

//25-50 

for(var j=25; j<=50; j++){
    console.log(j);
}

// 35-40

for(var k=35; k<=40; k++){
    console.log(k);
}

// 20-5

for(var l=20; l>=5; l--){
    console.log(l);
}

// 5-1

for(var m=5; m>=1; m--){
    console.log(m);
}

// While Loop :
// while(condition / end){ change } --> Syntax

// Syntax Below -->

// initialization;
// while(condition){
//     updation;
// }

// start;
// while(end){
//     Change;
// }

// Glory with loops
// try to create basic loop structure.

// Foreach aek normal loop nahi hai for and while loop ki tarah jou numbers pe ya start end par chalta hai, 
// foreach loop sirf array pe chalta hai

