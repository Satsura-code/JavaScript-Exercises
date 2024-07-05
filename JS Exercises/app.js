//JS Variables

//EXercise 1
let fruitName = "Orange";
//Exercise 2
let y = 50;
//Exercise 3
let x = 3;
let y = 10;
alert(x + y);
//Exercise 4
let x = 7;
let y = 3;
let z = x + y;
alert(z);
//Exercise 5
let firstName = "David",
  lastName = "Johnson",
  age = 41;

//JS Operators

//Exercise 1
alert(5 * 7);
//Exercise 2
alert(13 % 7);
//Exercise 3
x = 15;
y = 5;
x += y;
//Exercise 4
x = 10;
y = 3;
x *= y;
//JS Data Types

let length = 16; //Number
let lastName = "Brown"; //String
let x = {
  firstName: "Nick",
  lastName: "Doe",
}; //Symbol
//JS Functions

//Exercise 1
function myFunction() {
  alert("Hello World");
}
myFunction();
//Exercise 2
function myFunction() {
  alert("Hello World");
}
//Exercise 3
function myFunction() {
  return "Hi";
}
document.geElementById("demo").innerHTML = myFunction();
//Exercise 4
function myFunction(){
    document.getElementById('demo').innerHTML = "Hi"
}
//JS Object

//Exercise 1
let person = {
    firstName: "David",
    lastName: "Doe"
},
alert(person.firstName)
//Exercise 2
let person = {
    firstName: "Jack",
    lastName: "Doe",
    country: "Sweden"
};
//Exercise 3
let person = {
    name: "Jack", age: 60
}
alert(person.name + "is" + person.age)
//JS Events

//Exercise 1
<button onclick="alert('Hello')">Click me.</button>
//Exercise 2
<button onclick="myFunction()">Click me.</button>
//Exercise 3
<div onmouseover="this.style.backgroundColor='red'">myDIV.</div>
//JS Strings

//Exercise 1
let txt = "Hello World!";
let x = txt.length;
alert(x);
//Exercise 2
let txt ="We are \"Students\"";
alert(txt);
//Exercise 3
let str1 = "Hello";
let str2 = "World!";
alert(str1 + str2);
//JS String Methods

//Exercise 1
let txt = "dsakdhdas";
let pos = txt.indexOf("h");
//Exercise 2
let txt = "I eat apples the whole day";
let x = txt.slice(6,12);
//Exercise 3
let txt = "Hello World";
txt = txt.replace("Hello", "Hi");
//Exercise 4
let txt = "Hello World";
txt = txt.toUpperCase();
//Exercise 5
let txt = "Hello World";
txt = txt.toLowerCase();
//JS Arrays

//Exercise 1
let fruits = ["Orange", "Apple", "Banana"];
let x = fruits[1];
//Exercise 2
let fruits = ["Banana", "Apple", "Mango"];
fruits[0] = "Orange";
//Exercise 3
let fruits= ["Orange", "Apple", "Mango"];
alert(fruits.length);
//JS Array Methods

//Exercise 1
let vegetables = ["Tomato", "Carrot", "Broccoli"];
vegetables.pop();
//EXercise 2
let vegetables = ["Tomato", "Carrot", "Garlic"];
vegetables.push("Broccoli");
//Exercise 3
let vegetables = ["Garlic", "Carrot", "Tomato", "Broccoli"];
vegetables.splice(1, 2);
//JS Array Sort

//Exercise 1
let vegetables = ["Garlic", "Carrot", "Broccoli", "Pumpkin"];
vegetables.sort();
//JS Dates

//Exercise 1
let date = new Date();
alert(date);
//Exercise 2
let date = new Date();
let year = date.getFullYear();
//Exercise 3
let date = new Date();
let month = date.getMonth();
//Exercise 4
let date = new Date();
date.setFullYear(2020);
//JS Math

//Exercise 1
let random = Math.random();
//Exercise 2
let x = Math.max(20, 30);
//Exercise 3
let x = Math.round(3.2);
//Exercise 4
let x = Math.sqrt(9);
//JS Companrisons

//Exercise 1
x = 10;
y = 5;
alert(x > y);
//Exercise 2
x = 24;
y = 24;
alert(x == y);
//Exercise 3
x = 7;
y = 3;
alert(x != y);
//Exercise 4
let age = n;
let voteable = (age < 18) ? "Too young" : "Old enough";
alert(voteable);
//JS Conditions

//Exercise 1
if (x > y) {
    alert("Hello World");
  }
//Exercise 2
if (x > y) {
    alert("Hello World");
  } else {
    alert("Bye");
  }
//JS Switch

//Exercise 1
switch(vegetables) {
    case "Carrot":
      alert("Hello")
      break;
    case "Broccoli":
      alert("Welcome")
      break;    
  }
//Exercise 2
switch(vegetables) {
    case "Broccoli":
      alert("Hello")
      break;
    case "Carrot":
      alert("Welcome")
      break;
    default:
      alert("Neither");
}