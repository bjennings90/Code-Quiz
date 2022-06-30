
//creating variables for different html elements
var body = document.body;
var h1El = document.createElement('h1');
var h3El = document.createElement('h3');
var infoEl = document.createElement('div')
var startButtonEl = document.createElement('start-button');
var buttonEl = document.createElement('button');
var FirstbuttonEl = document.createElement('button');
var SecbuttonEl = document.createElement('button');
var ThirdbuttonEl = document.createElement('button');
var counter = 0;

//Using variables to display text and append elements to the body
h1El.textContent = 'Welcome to the JavaScript Quiz!';
h1El.setAttribute('style', 'margin:auto; width:100%; padding:50px 0px 0px 0px; text-align:center;');
body.appendChild(h1El);

h3El.textContent = 'This quiz is timed! Incorrect answers will impact your final score!';
h3El.setAttribute('style', 'margin:auto; width:50%; padding:0px 0px 20px 0px; text-align:center;');


buttonEl.textContent = "Start Quiz";
buttonEl.setAttribute('style', 'width: 50%; margin-left:25%; margin-right:25%; text-align:center;');
body.appendChild(buttonEl);

//Starting quiz with quiz button action
var quizAction = function () {
    h3El.textContent = questions[counter].question
var orderEl = document.createElement('ol');

var buttonOneEl = document.createElement('li');
var buttonTwoEl = document.createElement('li');
var buttonThreeEl = document.createElement('li');
buttonTwoEl.appendChild(SecbuttonEl);
buttonThreeEl.appendChild(ThirdbuttonEl);

buttonEl.setAttribute('style','display: none');

//Ordered list of answer buttons
orderEl.appendChild(buttonOneEl);
orderEl.appendChild(buttonTwoEl);
orderEl.appendChild(buttonThreeEl);
FirstbuttonEl.textContent = questions[counter].choices[0]
buttonOneEl.appendChild(FirstbuttonEl);
SecbuttonEl.textContent = questions[counter].choices[1]
ThirdbuttonEl.textContent =  questions[counter].choices[2]
buttonThreeEl.appendChild(ThirdbuttonEl);
buttonOneEl.addEventListener('click', checkAnswer)
buttonTwoEl.addEventListener('click', checkAnswer)
buttonThreeEl.addEventListener('click', checkAnswer)
h3El.appendChild(orderEl);
body.appendChild(h3El);
}

//Alerts for if answer is correct or wrong
function checkAnswer(event) {
    var userChoice = event.target.textContent
    var answersEl = questions[counter].answersEl;
    if (answersEl === userChoice) {
alert("correct")
    } else {
        alert("wrong")
    }
    counter++;
    quizAction ()
}

//Start of quiz questions
var questions = [
    {
        question: "What is JavaScript?",
        choices: ["Coffee Maker", "Text Editor", "Programming Language"],
        answersEl: "Programming Language"
    },
    {
        question: "What are JavaScript Data Types?",
        choices: ["String, Variable, Content","Number, String, Boolean, Object, Undefined", "Math.floor, isCorrect, Array"],
        answersEl: "Number, String, Boolean, Object, Undefined"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        choices: ["//", "$.", "**/",],
        answersEl: "//"
    },
    {
        question: "What are all of the types of pop up boxes available in JavaScript?",
        choices: ["alert, confirm, prompt", "cardboard,foam,ice", "windows", "all of the above"],
        answersEl: "alert, confirm, prompt"
    },
    {
        question: "What are the main for loops in JavaScript?",
        choices: ["for, for/in, while", "if, for, null, string, while", "for, do...while, for/in, while"],
        answersEl: "for, do...while, for/in, while"
        
    }
]



buttonEl.addEventListener("click", quizAction);


