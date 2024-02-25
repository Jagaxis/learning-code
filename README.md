# learning-code

## Quick guide

My quick guide for references.

### Variable 

```javascript
// mean a global variable scope.
var something = 'global'; 

let age = 23 // this mean a variable with local scope
let myName = "Diego";
let favoriteFood = 'ramen';
let email = "jagasw@gmail.com"

console.log(`You are ${myName} years old`);

let online = true;
console.log(typeof online);


let fullName = "Diego Angel";
let age = 22;
let student = false;

document.getElementById("man").textContent = student;
document.getElementById("nema").textContent = `Your full name is ${fullName}`;

let student = 25;
student = student - 1
student = student ** 2
student = student %2

student -= 1
student++;
student--;

```

### Arithmetic operators

```javascript
/*
operator precedence
1. parenthesis ()
2. exponents
3. * and / and modulo
4. addition and substraction
*/

let result = 1 + 2 * 3 + 4 ** 2
console.log(result);

let result = 12 % 5 + 8 / 2

let result = 6 / 2 ** (2 + 5);

// HOW TO ACCEPT USER INPUT-----------------------------
// 1. easy way = window prompt
// 2. professional way = html textbox

let username;
username = window.prompt("What is your username?");
console.log(username);

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("title").textContent = `Hello ${username}`
}
```

