//rewrite the function using "?" or "||"
/* 
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
*/

function checkAge(age) {
    return (age > 17) ? true : "Did parents approve?"
}

function checkAge(age) {
    return (age > 17) || (confirm("Did parents approve?"))
}

//write a function that returns the smallest number 
/* 
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/

function min(a, b) {
    return (a < b) ? a : b
}

//write a functions that pows x into n
/*
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
*/


function pow(x, n) {
    let result = x
    for (let i = 1; i < n; i++) {
        result *= x
    }
    return result
}

let x = prompt("Enter x:", "")
let n = prompt("Enter n:", "")

if (n >= 1 && n % 1 == 0) {
    console.log( pow(x, n) );
} else {
    console.log("Use simple numbers");
}