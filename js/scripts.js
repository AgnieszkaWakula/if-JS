// scripts.js

var a = 3;
var b = 3;
var exValue = (a * a) + (2 * a * b) - (b * b);

console.log('ex field with base a: ' + a + ' and b: ' + b + ' is equal to: ' + exValue);

alert('Wynik to: ' + exValue);


if (exValue > 0) {
    console.log('Wynik dodatni');
} else if (exValue < 0) {
    console.log('Wynik ujemny');
} else {
    console.log('Wynik to 0');
}