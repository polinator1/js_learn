//change the code given into if else
/* switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
*/

let browser = prompt("What is your browser?", "")

if (browser === "Edge") {
    console.log("You've got the Edge!")
} else if (browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera") {
    console.log("Okay we support these browsers too")
} else {
    console.log("We hope that this page looks ok!")
}

//change the code given into switch case
/* const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}
*/

const number = +prompt("Enter a number in range of 0 to 3", "")

switch(number) {
    case 0:
        console.log("You have entered 0")
        break;
    case 1:
        console.log("You have entered 1")
        break;
    case 2:
    case 3:
        console.log("You have entered 2 or 3")
        break;
}
