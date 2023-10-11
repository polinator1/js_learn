// print all of the even numbers in range of 2 to 10 using for-loop
for (let i = 2; i <= 10; i += 2) {
    console.log(i)
}

//change the code given into while-loop
/* 
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
*/

let i = 0
while (i < 3) {
    console.log(`number ${i}!`)
    i++
}

//make a loop that asks the user to enter a number greater than 100, if he enters another number, he is asked to type in the number again

let answer

do {
    answer = prompt("Enter a number greater than 100", "")
} while (answer <= 100 && answer)


//print all of the plain numbers in range from 2 to n
let n = prompt("Enter a number:", "")
for (let i = 2; i < n; i++) {
    if (i % 2 == 0) continue
    console.log(i)
}