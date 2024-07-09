//Ex.1




var firstName = prompt("Please enter your first name:");

var lastName = prompt("Please enter your last name:");

alert("Welcome " + firstName + " " + lastName);

var age = parseInt(prompt("Please enter your age:"), 10);

var status;
if (age >= 1 && age <= 10) {
    status = "Child";
} else if (age >= 11 && age <= 18) {
    status = "Teenager";
} else if (age >= 19 && age <= 50) {
    status = "Grown up";
} else if (age > 50) {
    status = "Old";
} else {
    status = "Invalid age";
}


alert("You are a " + status);


//Ex.2



// Ask the user to enter a number
var number = parseInt(prompt("Please enter a number:"), 10);

if (number % 2 === 0) {
    alert("The number is even");
} else {
    alert("The number is odd");
}
