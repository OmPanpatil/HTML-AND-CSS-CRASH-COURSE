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

var name = prompt("Tell us your best time");

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

// But there is a compiler called JIT (Just In Time) COmpiler which introduced the both as first it runs with the power of interpreter solving and then it run as a compiler fast.
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
// Falsy : Null, document.all ,0, blank string --> (" " , ' '), undefined, NaN, false ==> can be identifying using boolean as it helps to give the value in True or False, document.all are false.
// Truthy : 12,45, false, document.all, null, true, "hekllo" 

// If-else :
var num = 12;
if(num>13){
    console.log("13 is greater than the given number.", num);
}
else{
    console.log("13 is lesser than the given number", num);
}

// Else-if condition :

var age = 18;
if(age<18){
    console.log("Under age", age);
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

// Forin loop is used to iterate over the object properties.

// Forof loop is used to iterate over the values of the object.

// functions : Functions are the block of code which can be reused and can be called anytime.
// Javascript is a functional programming language. Which has two imp parts : ES5 and ES6.
// ES5 is the older version of JS and ES6 is the newer version of JS.
// ES5 has the function keyword and ES6 has the arrow function.
// We can create a function using the function keyword and arrow function.
// Es5 has three parts and ES6 has only 1 part.
// ES5 has function keyword, function name, and function body.
// ES6 has only function body.
// Es5 : (A) function statements, (B) Function Expressions, (C) Anonymous Functions
// Es6 : Fat Arrow Functions => (A) Basic Fat Arrow, (B) Fat Arrow with one parameter, (c) Fat Arrow with implicit return.
// Function in Js is not like a normal function, it is a first class citizen.Iska matlab hai, yaha par js mein functions banane ke liye type nahi batana padta bas aapko function word likhna padega and aap usse koi naam deke bana sakhte hoo.
// Indepth -Js mein functions ko first class functions ka darja diya gaya hai, jiska matlab hai ki js mein functions ko value/Variable ki tarah treat kiya jaa sakhta hai.

// What is functions
// why we need functions
// How to use functions

// extras we should know about functions

// what is functions : koi essa block of code jo ki hum baar baar use kar sakte hai, and humeisha wahi code likhna padega toh hum usse function mein dalkar usse baar baar use kar sakte hai.

function abcd(){ 
    var abb = 12;
    console.log(abb);
    for(var bb=12; bb<=20; bb++){
        console.log(bb);
    }
}

abcd();

function naambatao(){
    console.log("Om Panpatil");
}

naambatao();

// Example:
// Facebook Happy Birthday :

var dateofbirth = 12;
var todaysdate = 12;

function happybirthday(){
    if(dateofbirth === todaysdate){
        console.log("Happy Birthday");
    }
    else{
        console.log("Happy Unbirthday");
    }
}

happybirthday();

// Why we need functions : Functions are used to reduce the code and make it reusable. Functions are used to make the code more readable and maintainable. Functions are used to make the code more modular and scalable.
// Functions in need to reuse the code and wrap the code which we want to run in future at some point of time.
// Functions are used to make the code more readable and maintainable as it is easy to understand the code and make the code more readable.
// Functions are used to make the code more modular and scalable as it is easy to scale the code and make the code more modular.

// How to use the Functions :

// syntax :
// function functionName(){
//  output: code 
// } 
// function call : functionName();

// Extras we should know about functions :
// Two things are important in functions : (a) Parameters, (b) Arguments

// Parameters : Parameters are the variables which are used in the function definition
// Arguments : Arguments are the values which are passed to the function call.

// Example :
// Parameters : function add(a,b){ console.log(a+b); }
// Arguments : add(12,13);

// prep for interview :

// What is the difference between parameters and arguments?
// Parameters are the variables which are used in the function definition and arguments are the values which are passed to the function call.

// What is the difference between function definition and function call?
// Function definition is the block of code which is used to define the function and function call is the block of code which is used to call the function.

// What is the difference between function and function expression?
// Function is the block of code which is used to define the function and function expression is the block of code which is used to define the function as a variable.

// What is the difference between function and arrow function?
// Function is the block of code which is used to define the function and arrow function is the block of code which is used to define the function as a variable using the arrow.

// What is the difference between function and anonymous function?
// Function is the block of code which is used to define the function and anonymous function is the block of code which is used to define the function without the name.

// What is the difference between function and fat arrow function?
// Function is the block of code which is used to define the function and fat arrow function is the block of code which is used to define the function as a variable using the fat arrow.

// What is the difference between function and basic fat arrow function?
// Function is the block of code which is used to define the function and basic fat arrow function is the block of code which is used to define the function as a variable using the basic fat arrow.

// What is the difference between function and fat arrow function with one parameter?
// Function is the block of code which is used to define the function and fat arrow function with one parameter is the block of code which is used to define the function as a variable using the fat arrow with one parameter.

// What is the difference between function and fat arrow function with implicit return?
// Function is the block of code which is used to define the function and fat arrow function with implicit return is the block of code which is used to define the function as a variable using the fat arrow with implicit return.

// What is the difference between function and function statements?
// Function is the block of code which is used to define the function and function statements is the block of code which is used to define the function as a statement.

// Function statement --> 
// function add(a,b){ console.log(a+b); }

function adding(){
    // function statement or simple function 
}

// Function Expressions -->
// var add = function(a,b){ console.log(a+b); } add(12,13);

var adding = function(){
    // function expression

}

// In function expression the function is assigned to a variable and the variable is used to call the function. And hence we do not have to use the function name to call the function and we can use the variable name to call the function.

// Always remember that function statement is hoisted and function expression is not hoisted.
// Hoisting is a mechanism in JS which moves the declaration of the variable to the top of the scope.

// Anonymous Functions -->

// Anonymous functions are the functions which do not have the name and are used to define the function without the name.
// function (){
    // Anonymous function
// }

// Fat Arrow Functions -->
// Fat arrow functions are the functions which are used to define the function as a variable using the fat arrow indicated by ()=>
// Fat arrow functions are the functions which are used to define the function as a variable using the fat arrow indicated by ()=>

// var exampleFunction = ()=> {
    // Fat arrow function
// }


// 1. Basic Fat Arrow Functions -->
// var add = ()=>{ console.log("Hello"); }

var add = ()=>{
    console.log("Hello");
}

add();

var m = ()=>{
    console.log("Hello");
}

m();

// 2. Fat Arrow Function with one parameter -->
// var add = (a)=>{ console.log(a); }

// Remember that in fat arrow function with one parameter we cant and we can be make use of  parenthesis and we can directly use the parameter name and it always having one parameter.

// While using the parenthesis we can use the parameter name and while not using the parenthesis we can directly use the parameter name.
// Fat arrow function with one parameter with Parenthesis :
var g = (abcd)=>{
    console.log("Namastey", abcd);
}

g(13);

// Fat arrow function with one parameter without Parenthesis :
var h = abcde =>{
    console.log("Namastey mere bhai aur unke baeheno",abcde);
}

h(55);

// 3. Fat Arrow Function with Implicit Return -->
// var add = (a,b)=> a+b;
var dcba = ()=>"Om";
var ans = dcba();
// console.log(ans);
// console.log(add(12,13));

// Scope : Scope is the area in which the variable is accessible.

// Global Scope : The variable which is declared outside the function is called as the global variable and is accessible throughout the program.

// Local Scope : The variable which is declared inside the function is called as the local variable and is accessible only inside the function.

// Block Scope : The variable which is declared inside the block is called as the block variable and is accessible only inside the block.

// Lexical Scope : The variable which is declared inside the function is called as the lexical variable and is accessible only inside the function.

// Hoisting : Hoisting is a mechanism in JS which moves the declaration of the variable to the top of the scope.

// Temporal Dead Zone : Temporal Dead Zone is the area in which the variable is not accessible.


// Return -->

// Return ka matlab hua, ki jo bhi value function mein return kiya gaya woh value function call karne wale ko mil jayega. Jessae ki jaha par bhi return lagega usske jo bhi likhoge wou jayega jaha par function call hua tha, return functions ke andar lagta hai.
// Return : Return is the keyword which is used to return the value from the function.
// And return ko hum do type sae lae sakhte hai : 1. Ans sae jabhi humeisha return karna padega, 2. Ans sae jabhi return karna padega, 3.directly console return bhi karsakhte hai means output ko console mein return karne ke liye.
// aisa function jo ki kuchh return nahi karta woh undefined return karta hai.


// Example :
function vu(){
    return "Om Panpatil";
}

var ans = vu();

// console.log();

function vu(){
    return "Om Panpatil";
}

console.log(vu());

function chirst(){
    return 7;
}

console.log(chirst());

// Why functions always returns something in js?
// Functions always return something in js because js is a functional programming language and functions are the first class citizens in js and hence functions always return something in js.
// A function must always return something. It's a ground rule. Javascript follows this rule, functions always return something. If you don't return anything, it will return undefined.

// Some fat arrow examples :
var a = ()=>{
    return "how is your day";
}

a();
console.log(a());

var b = a();


// Implicit return :

var b = ()=>"I am fine, so what do you do";

b();

// undefined is a value
// yeh value tab di jaati hai jab variable ko koi value assign nahi hoti hai, iska matlab yeh hai, ki wou garbage value ki tarah treat ki jaati hai. aap isey default value bhi keh sakhte ho.
// example :
var a;
var a = undefined;


// not defined is an error
// koi particular identity/element ko use karna without it's declaration gives an error, and that error is known as not defined error.
// example :
// console.log(b);

// null is also a value
// null is a value which is used to represent the absence of the value.
// this is a value which resolve like, not found.
// null is received when something is not found.
// example :
var x = null;

// Scope : Scope is the area in which the variable is accessible.
// scope refers to the accessibility of variables, objects, and functions in different parts of the code during runtime. It determines where a variable or function can be accessed or referenced.

// Global Scope : The variable which is declared outside the function is called as the global variable and is accessible throughout the program.
// A variable declared outside any function or block belongs to the global scope and is accessible from anywhere in the code.

var globalvar = "i am a globalvar";
function globall(){
    console.log(globalvar);
    // var isavegloball = globall();
    // console.log(isavegloball);
}
globall();
console.log(globalvar);
// console.log(isavegloball);

// Local Scope : The variable which is declared inside the function is called as the local variable and is accessible only inside the function.
// Variables declared inside a function are local to that function and are not accessible from outside the function.
function localscope(){
    var localvar = "I am a local variable";
    console.log(localvar);
}

// Block Scope : The variable which is declared inside the block is called as the block variable and is accessible only inside the block.
// Variables declared with let and const are only accessible within the block where they are defined.
if (true) {
    let blockScopedVar = "I am block-scoped";
    console.log(blockScopedVar); // Accessible inside the block
}
  
// console.log(blockScopedVar); // Error: blockScopedVar is not defined
  


// Lexical Scope : The variable which is declared inside the function is called as the lexical variable and is accessible only inside the function.

// Arrays :

// Array matlab jab bhi aapko aek yeh ek se jyada value ek saath rakhni ho.
var users = ["om", "omisha", "omie"];
console.log(users[1]);

// what is an array?
// array is a collection of elements which are stored in a single variable. And are stored in the form of the index.
// array matlab jab bhi aapko ek yah ek sae jyada vaslues ko ek saath rakhna ho.

// why we need an array?
// we need an array to store the collection of elements in a single variable. And to access the elements using the index.
// a  lot of times the data is in the shape of more tha one value/members to contain all data together, we can save it.

// how to use an array?
// to use an array we need to create an array using the square brackets and store the elements inside the square brackets.
var arr = [12,13,14,15,16,17,18,19,20];
arr[7];

// Loop with array :

// 1. How to loop an array ?
// --> arrayname.foreach(function(value){})
// arrayname.foreach(function(value){})
// arrayname.foreach(function(value){})
// arrayname.foreach(function(value){})
// arrayname.forEach(function(value){})
// arrayname.forEach(function(value){})
// arrayname.foreach(function(value){})

numberscounting = [1,2,3,4,5,6]
numberscounting.forEach(function(value){
    console.log(numberscounting);
    console.log(value);
})


// How to loop an array and do something with each element means kuch task :

numberssue = [2,4,6,8,10]
numberssue.forEach(function(value){
    console.log(value+value);
})

numberssums = [1, 3, 5, 7, 9]
numberssums.forEach(function(value){
    var nu1 = 1;
    var nu2 = 3;
    var nu3 = 5;
    var nu4 = 7;
    var nu5 = 9;
    var nus = nu1 + nu2 + nu3 + nu4 + nu5;
    console.log(nus);
    console.log(value);
    console.log(numberssums);
})


// Objects : Objects are the collection of key-value pairs which are stored in a single variable.  

// what is object?
// object ek tareeka hai jesse ki hum ek identity ki details ko ek saath rakh sakhte hai.
// example : Arrays store the collections of elements but the object stores the individual identity of every user/element.
// bohot saare logo ka data ==> Array
// Aek individual ka data ==> Object
// Indication of array = [], indication of object = {}

// variable objectname = {}

var obj = {
    name: "Om",
    age:2,
    email : "kuchkuch@kuchkuch.com",
};
console.log(obj);
var obj2 = new Object(); 

var battery = {
    companyname: "Nikon",
    price : 13000,
    use : "Camera",
    isWorking : true
};

console.log(battery);
console.log(obj);

// how to use it ?
// when and why ?


// Synchronous and Asynchronous Js :
// Synchronous code mein code humesha line by line chalta hai
// Asynchronous code line by line nahi chalta hai, sara asynch code ek saath start kar diya jaata hai and jou pehle complete hojaye uska answer dae diya jaata hai.

// Indepth of Asynchronous and Synchronous :

// This call apply bind :
// this is a keyword. this keyword js mein one of the most suspenseful keyword hai
// Keyword ka matlab hota hai essa word jiska koi matlab ho programming language mein.
// this ki value baar baar badal sakti hai alag alag conditions mein, toh saari condition ko seekh jao toh "this" keyword ko samajh jaoge.

// global, function, method, fnc inside method (es5), fnc inside method(es6), constructor fnc mein this ki value, event listener mein this ki value 

// global --> window value
console.log(this);
console.log("this");

// function --> window value
function fnc(){
    console.log(this);
}
fnc();

// method --> object value
// object ke andar function method hota hai.
var obj ={
    name:function(){
        console.log(this);
        console.log("this is method");
    },
    age : 22,
    Mail: "kuchkuch@kuchkuch.com",
}
obj.name(); //toh yaha hume name kae andar jaana hai toh isliye pehle obj aur dot matlab uske andar jaha hai wou name hai. for example : console.log();
// console.log(obj);

// function inside method(es5) --> window value
var obj3 = {
    saymyname:function(){
        function letmehearyou(){
            console.log(this);
            console.log("this is function inside method es5");
        }

        letmehearyou();
    }
}

obj3.saymyname();

// function inside method(es6) --> object value
// object mein function hota hai method aur obj mein function ke andar arrow function use karre toh wou function inside method es6 hojata hai.


var obj4 ={
    saymyname : function(){
        const letmehearyoutudutudu = ()=>{
            console.log(this);
            console.log("This is function inside method es6");
        }
        letmehearyoutudutudu();
    }
}
obj4.saymyname();

// constructor function mein "this" ki value --> new blank object value

// function add(){
    // console.log(this);
// }
// add();
// const answer = new add(); //always remember to write new ahead of the function name while declaring the variable 
// console.log(answer);

function adding(){
    console.log(this);
}
const answer = new adding();
console.log(answer);

// event listener mein "this" ki value --> that element jispar event listening laga ho

document.querySelector("button")
.addEventListener("click",function(){
    console.log(this);
    console.log("This is event listener");
})

// document.querySelector("button")
// .addEventListener("click",function(){
//     console.log(this);
//     console.log("This is event listener");
// })


// Javascript: Call, apply, bind
// Ye teen tarekae hai function ko call karne ke kisi object ko this maan kar

function callkar(){
    console.log(this);
}

// value window hi hogi right kyuki wou kisi scope mae nahi hai yani ki kisi braces ke andar.
// Toh hum aek object call kesse karta hai ki hum aek object banaeyege aur jabh hum function ko call karenge jaha hume function ko call karwana hai object ko tabh hum .call karenge aur () ke andar hum wou function ko add karenge i.e. object waale ko

var obj5 = {
    name: "Nissan GTR Skyline 36",
    model : "sports"
};

function callkarekya(){
    console.log(this);
}

callkarekya.call(obj5);


// Apply :

// Isme hume parameters ki value array format mae denni hai aur this ke saath wou param hume likhna hai show karne ke liye aur yaha call kae badlae apply aajata hai.

function aabayegamajja(a,b,C){
    console.log(this,a,b,C);
}

aabayegamajja(1,2,3);

// Example now by using apply :

const obj6 ={
    name: "Baburao",
    work: "Fisheries",
};

function aabayeganamajjabhidu(m,n,o){
    console.log(this,m,n,o);
}
aabayeganamajjabhidu.apply(obj6,[10,5,7]);











