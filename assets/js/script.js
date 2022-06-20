// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

// 1. What is JavaScript?
// 2. What are JavaScript Data Types?
// 3. Which symbol is used for comments in JavaScript?
// 4. What are all of the types of pop up boxes available in JavaScript?
// 5. What are the main for loops in JavaScript?

//creating variables for different html elements
var body = document.body;
var h1El = document.createElement('h1');
var h3El = document.createElement('h3');
var infoEl = document.createElement('div')
var buttonEl = document.createElement('button');
var paragraphEl = document.createElement('p');

var listEl = document.createElement('ol');
var li1 = document.createElement('li');

//Using variables to display text and append elements to the body
h1El.textContent = 'Welcome to the JavaScript Quiz!';
h1El.setAttribute('style', 'margin:auto; width:100%; padding:50px 0px 0px 0px; text-align:center;');
body.appendChild(h1El);

h3El.textContent = 'This quiz is timed! Incorrect answers will impact your final score!';
h3El.setAttribute('style', 'margin:auto; width:50%; padding:0px 0px 20px 0px; text-align:center;');
body.appendChild(h3El);

buttonEl.textContent = "Start Quiz";
buttonEl.setAttribute('style', 'width: 50%; margin-left:25%; margin-right:25%; text-align:center;');
body.appendChild(buttonEl);


//Start of quiz questions
const questions = [
    {
        question: "What is JavaScript?",
        answer: {
            a: "Coffee Maker", isCorrect: false,
            b: "Text Editor", isCorrect: false,
            c: "Programming Language", isCorrect: true,
        }
    },
    {
        question: "What are JavaScript Data Types?",
        answer: {
            a: "String", isCorrect: true,
            b: "Variable", isCorrect: false,
            c: "Content", isCorrect: false,
        }
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        answer: {
            a: "//", isCorrect: false,
            b: "/*", isCorrect: false,
            c: "*/", isCorrect: true,
        }
    },
]


//Creating a function that will iterate through questions array
var createQuizAction = function () {
    console.log ("inside function")
questions.forEach((question,questionNum) => {
const answers = []

})


}
buttonEl.addEventListener("click", createQuizAction);
