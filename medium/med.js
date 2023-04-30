// Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding 
// month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if 
// they enter an invalid number (e.g. less than 1 or greater than 12).

let userInput = prompt("Enter a number from 1 to 12:");

function getMonth(userInput) {
    switch (parseInt(userInput)) {
        case 1:
            return "January";
        case 2:
            return "February";
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "December";
        default:
            return "ERROR: THIS IS NOT A NUMBER BETWEEN 1 AND 12";
    }
}

console.log(getMonth(userInput));

// console.log(getMonth(1));
// console.log(getMonth(2));
// console.log(getMonth(3));
// console.log(getMonth(4));
// console.log(getMonth(5));
// console.log(getMonth(6));
// console.log(getMonth(7));
// console.log(getMonth(8));
// console.log(getMonth(9));
// console.log(getMonth(10));
// console.log(getMonth(11));
// console.log(getMonth(12));
// console.log(getMonth(13));
// console.log(getMonth("im tired"));