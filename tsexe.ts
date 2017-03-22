//Static Typing
var myName: string = 'Kay';
var myAge: number = 25;
var isStudent: boolean = true;
var anything: any = 'pet'; //A variable with this type can have it’s value set to a string, number, or anything else.
anything = 0;

document.getElementById('tsItems').innerHTML = 'My name is ' + myName + '<br />';

//interface
/* By defining an interface we can name a specific combination of variables,
making sure that they will always go together. */

interface foodMenu {
  name: string;
  price: number;
}

var food: foodMenu = {
  name:  'Curry Chicken',
  price:  '12'
}

document.write(food.name + ' is ' + '$'+food.price + '<br />');

//Array

var foodTypes: string[] = ['Sushi', 'Pasta', 'BBQ'];

document.write(foodTypes.toString() + '<br />');

interface foodMenu {
  name: string;
  price: number;
}

var food: foodMenu[] = [];

food.push({
  name: 'Sushi',
  price: '16'
});

document.write(food[0].name + " is " + '$' + food[0].price + '<br />');

//Meth

document.write('12 + 8 = ' + (12+8) + '<br />');
document.write('12 - 8 = ' + (12-8) + '<br />');
document.write('12 * 8 = ' + (12*8) + '<br />');
document.write('12 / 8 = ' + (12/8) + '<br />');
document.write('12 % 8 = ' + (12%8) + '<br />');

document.write('12 + String 8 = ' + (12+'8') + '<br />');

//Meth ++ / --
var randNum: number = 1;
document.write('randNum++ = ' + randNum++ + '<br />'); //1 print the num first, then ++. So it gets 1
document.write('++randNum = ' + ++randNum + '<br />'); //3
document.write('randNum-- = ' + randNum-- + '<br />'); //3
document.write('--randNum = ' + --randNum + '<br />'); //1

//Conditional Statement

//let -- doesn't change
let sampLet = 'abc';

if(true){
  let sampLet = 'efg';
}

document.write('sampLet: ' + sampLet + '<br />');

//var
var sampLet = 'abc';

if(true){
  var sampLet = 'efg';
}

document.write('sampLet: ' + sampLet + '<br />');

// For Loop

var randArray = [5,6,7,8];
// general JS for loop, get the index of array
for(var val in randArray){
  document.write(val + '<br />');
}
// 0 1 2 3

var strArray = randArray.map(String);
// typescript for of loop, get the value of array
for(var val of strArray) {
  document.write(val + '<br />');
}
// 5 6 7 8

//Function
var getSum = function(num1: number, num2: number): number{
  return num1 + num2;
}

var theSum1: number = getSum(8, 2);

document.write('8 + 2 = ' + theSum1 + "<br />");

var getDiff = function(num1: number, num2 = 2, num3?:number):number {
  //num3? ? means optional
  if(typeof num3 !== 'undefined'){
    return num1 - num2 - num3;
  }
  return num1 - num2;
}

document.write('8 - 2 = ' + getDiff(8) + "<br />");
document.write('8 - 2 - 3 = ' + getDiff(8, 2, 3) + "<br />");
document.write('8 - 2 - 3 = ' + getDiff(8, 3) + "<br />"); // num2 = 3,

//Function & Array

var sumAll = function(...nums: number[]): // ... equals to num1, num2, num3, ...
  void{ // if nothing return, use void
    var sum = nums.reduce((a,b) => a + b, 0); // reduce are cycle through the array, 0 is defined initial num
    document.write('Sum: ' + sum + '<br />');
  }
sumAll(1, 2, 3, 4, 5, 6);

// Arrow Function
//Basically arrow functions don't include functions inside of the definition

var addOne = (x) => x + 1;
document.write('1 + 1 = ' + addOne(1) + '<br />');
