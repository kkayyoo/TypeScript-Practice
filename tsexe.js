//Static Typing
var myName = 'Kay';
var myAge = 25;
var isStudent = true;
var anything = 'pet'; //A variable with this type can have it’s value set to a string, number, or anything else.
anything = 0;
document.getElementById('tsItems').innerHTML = 'My name is ' + myName + '<br />';
var food = {
    name: 'Curry Chicken',
    price: '12'
};
document.write(food.name + ' is ' + '$' + food.price + '<br />');
//Array
var foodTypes = ['Sushi', 'Pasta', 'BBQ'];
document.write(foodTypes.toString() + '<br />');
var food = [];
food.push({
    name: 'Sushi',
    price: '16'
});
document.write(food[0].name + " is " + '$' + food[0].price + '<br />');
//Meth
document.write('12 + 8 = ' + (12 + 8) + '<br />');
document.write('12 - 8 = ' + (12 - 8) + '<br />');
document.write('12 * 8 = ' + (12 * 8) + '<br />');
document.write('12 / 8 = ' + (12 / 8) + '<br />');
document.write('12 % 8 = ' + (12 % 8) + '<br />');
document.write('12 + String 8 = ' + (12 + '8') + '<br />');
//Meth ++ / --
var randNum = 1;
document.write('randNum++ = ' + randNum++ + '<br />'); //1 print the num first, then ++. So it gets 1
document.write('++randNum = ' + ++randNum + '<br />'); //3
document.write('randNum-- = ' + randNum-- + '<br />'); //3
document.write('--randNum = ' + --randNum + '<br />'); //1
//Conditional Statement
//let -- doesn't change
var sampLet = 'abc';
if (true) {
    var sampLet_1 = 'efg';
}
document.write('sampLet: ' + sampLet + '<br />');
//var
var sampLet = 'abc';
if (true) {
    var sampLet = 'efg';
}
document.write('sampLet: ' + sampLet + '<br />');
// For Loop
var randArray = [5, 6, 7, 8];
// general JS for loop, get the index of array
for (var val in randArray) {
    document.write(val + '<br />');
}
// 0 1 2 3
var strArray = randArray.map(String);
// typescript for of loop, get the value of array
for (var _i = 0, strArray_1 = strArray; _i < strArray_1.length; _i++) {
    var val = strArray_1[_i];
    document.write(val + '<br />');
}
// 5 6 7 8
