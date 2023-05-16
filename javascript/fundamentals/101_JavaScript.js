// JS RENDING JAVASCRIPT
// document.getElementById('xyz HTML id').innerHTML =


// JS Titles & Text Content | getElementById() sets the <div id='xyz'> in the html, which is associated with the code.
document.getElementById('root_title01').innerHTML = "JavaScript Fundamentals 101";
// document.getElementById('root_title02').innerHTML = "document.write()";
document.getElementById('root_content01').innerHTML = "This project is to learn the fundamental concepts of JS, It covers the basics of the programming language and touches the basics of interacting with a html file.";
document.getElementById('root_button01').innerHTML = "Reset FlashCard";
document.getElementById('root_button02').innerHTML = "Press Any Key";


// // console.log() | Writes things to the console.
// // console_statement = 'This text will be written to the BROWSERs console';
// console_statement = {
//     value_01: 8**8,
//     value_02: 22**22,
//     value_03: 33**33,
// };
// console.log(console_statement);


// // JS doesn't care about whitespace, each "Statement" is indicated by a ; semi-colon


// // JS Variable | Best practices use camelCase in Variables
// var fullName = 'Jamal Noah Chester-Morris';
// var name = 'Noah Morris'; // JS doesn't seem to like this var name... - Slash through???
// var age = 25
// document.getElementById('root').innerHTML = fullName;


// // JS Math in JavaScript
// // + - * ** / // %
// // BODMAS is applied however it's overridden with () | https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/order-of-operations-01-1629384364.png
// document.getElementById('root').innerHTML =   2 + 3   * 4;
// document.getElementById('root').innerHTML = ( 2 + 3 ) * 4;


// // JS Number Object Variables & Incrementing
// number_01 = 10;
// // number_01--; // Decrease number by 1 = 9
// // document.getElementById('root').innerHTML = --number_01; // Decrease number by 1 Again = 8
// // document.getElementById('root').innerHTML = number_01--; // This line of code would decrease the number after it had rendered, so wouldn't show on page


// // JS Assignment Operators
// number_01 += 5; // Makes number_01 = 15
// // number_01 = number_01 + 5; // Makes number_01 = 20
// document.getElementById('root').innerHTML = number_01;


// // JS Comparison Operators
// document.getElementById('root').innerHTML = 2 == 2; // Boolean Equal too Comparison
// document.getElementById('root').innerHTML = 2 === 2; // Boolean Equal too & SAME Data Type Comparison 
// document.getElementById('root').innerHTML = 2 != 2; // Boolean NOT Equal too Comparison
// document.getElementById('root').innerHTML = 2 >= 2; // Boolean Equal too Comparison
// // JS supports many of the expected mathematics operators such as  <  <=  >  >=  


// // JS Conditional Statement
// loginName='Noah';
// if (loginName == 'Freya'){
//     document.getElementById('root').innerHTML = 'Banned';
// } 
// else if (loginName == 'Noah'){
//     document.getElementById('root').innerHTML = 'Gather Round SPARTANs!';
// }
// else {
//     document.getElementById('root').innerHTML = 'Banned';
// };


// // JS Logical Operators
//     //  && and
//     //  || or
//     //  !  not
// loginName='Noah';
// uuId = 17;
// if (loginName == 'Noah' && uuId >= 17){
//     document.getElementById('root').innerHTML = 'Press: Any Key';
// }
// else {
//     document.getElementById('root').innerHTML = 'Don\'t ramp wid di shift';
// };


// // JS loops
// // for loop | for (object_variable; condition; increment) {};
// for (i=0; i<10; i++){
//     document.getElementById('root').innerHTML = '<b>Spanish Town VS Flanker?</b>';
// };
// // while loop
// var i = 0;
// while (i < 10){
//     document.getElementById('root').innerHTML = '<b>St Mary Spinners... DON\'T RAMP</b>';
//     i++;
// }


// // JS FIZZ BUZZ JS | https://en.wikipedia.org/wiki/Fizz_buzz
// counter = 1;
// while (counter <= 100){
//     if ((counter % 3) == 0 && (counter % 5) == 0){
//         document.write(`<b>FIZZBUZZ: ${counter}</b></br>`)
//     }
//     else if ((counter % 3) == 0){
//         document.write(`<b>FIZZ: ${counter}</b></br>`)
//     }
//     else if ((counter % 5) == 0){
//         document.write(`<b>BUZZ: ${counter}</b></br>`)
//     }
//     else {
//         document.write(`<small>number: ${counter}</small></br>`)
//     }
//     counter++;
// };


// // JS Arrays
// var pizzaToppings = [
//     'pepperoni', // 0th Item
//     'mushroom',
//     'beef',
//     'chicken',
//     'pork',
//     'cheese',
//     'veg',
// ];
// for (i=0; i<pizzaToppings.length; i++){
//     document.write(`<div class='p-1'>Topping: ${pizzaToppings[i]}</div></br>`);
// };


// // JS Multidimensional Arrays
// var numsArray = [1,2,3,4,5,6,7,8,9,10,11]
// var multiPizza = [
//     'pepperoni', // 0th Item
//     'mushroom',
//     'beef',
//     'chicken',
//     'pork',
//     'cheese',
//     'veg',
//     numsArray,
// ];
// document.getElementById('root').innerHTML = `<div class='p-1'>${multiPizza[((multiPizza.length / 2) - 1)]}</div></br>`; // Get the middle ite
// document.getElementById('root').innerHTML = `<div class='p-1'>${multiPizza[(multiPizza.length - 1)][3]}</div></br>`; // Get Array in an Array


// JS Objects | Objects are the same as Python Dictionaries
var person = {
    id: Math.floor(Math.random()*10000000)+1,
    firstName:'Noah',
    lastName:'Morris',
    age:25,
    email:'support@growth-delta.com',
};
document.getElementById('user-info').innerHTML = `<div id="root" class='p-1'><b>USER NAME</b></div></br>`; // Get Array in an Array

// loop through an object
for (var key in person) {
    var value = person[key];
    document.getElementById('user-info').innerHTML += `<div class='p-1'><b>${key}</b>: ${value}</div><br>`;
};


// // JS Functions
// function hello(personnel){
//     return `${personnel} -"Sparta!!! What is your Profession?"</br>SPARTA -"AAAHH! Woff! AAHHH! Woow!"`;
// };
// document.getElementById('root').innerHTML = `<div class='p-2 text-center'>${hello(person.lastName)}</div><br>`;


// JS Using JS | Prompt BOX
// var yourName = prompt('Hello, What you eman?')
// document.getElementById('root').innerHTML = `<div class='p-2 text-center'>${hello(personnel=yourName)}</div><br>`;


// JS Random Numbers
// Returns a random number between 1 & 10
// document.getElementById('root').innerHTML = `<div class='p-2 text-center'>${ Math . floor ( Math . random() * 10) + 1 }</div><br>`;


// JS Forms
function formNames() {
    var firstName = document.getElementById('name').value;
    document.getElementById('root').innerHTML = `<b>${firstName}</b>`;

};


// FlashCards App
var numOne = Math.floor(Math.random() * 10) + 1;
var numTwo = Math.floor(Math.random() * 10) + 1;
var answerCorrect = (numOne + numTwo);

document.getElementById('formula').innerHTML = `<b>${numOne + '+' + numTwo}</b>`;

function addition(){
    var answerInput = document.getElementById('answer').value;
    isNaN(answerInput);
    if (isNaN(answerInput)){
        document.getElementById('output').innerHTML = `Your Answer is NOT a number: ${answerInput}`;
    } else {
        if (answerInput == answerCorrect){
            document.getElementById('output').innerHTML = `🎉 Correct 🎉 ${numOne} + ${numTwo} = ${answerInput}`;
        } else {
            document.getElementById('output').innerHTML = `⭕ Incorrect ${answerInput} is FALSE ⭕ ${numOne} + ${numTwo} = ${answerCorrect}`;
        }
    };
};

function newCard(){
    document.getElementById('output').innerHTML = '';
    document.getElementById('answer').value = '';
    numOne = Math.floor(Math.random() * 10) + 1;
    numTwo = Math.floor(Math.random() * 10) + 1;
    document.getElementById('formula').innerHTML = `<b>${numOne + '+' + numTwo}</b>`;
    answerCorrect = (numOne + numTwo);
};
