function newFunction(personName,hourNow,greeting) {

var personName = prompt("Enter in your name");    
var hourNow = prompt("What time is it?", "Entry in miltary time 0 to 23");
var greeting;

if (hourNow) > 18) {
    greeting = 'Good evening!';
} else if (hourNow) > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow) > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}
return greeting;
}