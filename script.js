var startingPage = document.getElementById('startingPage');
var startingButton = document.getElementById('startingButton');

var theQuiz = document.getElementById('theQuiz');
var remainingTIme = document.getElementById('remainingTime');
var theQuestion = document.getElementById('theQuestion');
var buttonA = document.getElementById('choiceA');
var buttonB = document.getElementById('choiceB');
var buttonC = document.getElementById('choiceC');
var buttonD = document.getElementById('choiceD');
var userResult = document.getElementById('userResult');

var quizEnd = document.getElementById('quizEnd');
var userScore = document.getElementById('userScore');
var userInitials = document.getElementById('userInitials');
var submitUserScoreButton = document.getElementById('submitUserScoreButton');

var userScorePageComponents = document.getElementById('userScorePageComponents');
var userScorePage = document.getElementById('userScorePage');
var userScorePageInitials = document.getElementById('userScorePageInitials');
var userScorePageScore = document.getElementById('userScorePageScore');
var playAgain = document.getElementById('playAgain');

var theQuestions = [{
    question:'01: Which is NOT a frequently used data-type?',
    choiceA:'strings',
    choiceB:'booleans',
    choiceC:'alerts',
    choiceD:'numbers',
    correctAnswer:'B'
},
{
    question:'02: What are the conditions of if-else statements enclosed in?',
    choiceA:'quotation marks',
    choiceB:'curly brackets',
    choiceC:'parentheses',
    choiceD:'square brackets',
    correctAnswer:'C'
},
{
    question:'03: What can arrays store in JavaScript?',
    choiceA:'numbers and strings',
    choiceB:'other arrays',
    choiceC:'booleans',
    choiceD:'all of the above',
    correctAnswer:'D'
},
{
    question:'04: When being assigned to variables, what MUST string values be enclosed in?',
    choiceA:'commas',
    choiceB:'curly brackets',
    choiceC:'quotation marks',
    choiceD:'parentheses',
    correctAnswer:'C'
},
{
    question:'05: Which is an useful tool used during development and debugging for printing content to the debugger?',
    choiceA:'JavaScript',
    choiceB:'terminal/bash',
    choiceC:'for loops',
    choiceD:'console.log',
    correctAnswer:'A'
}];

var presentQuestion = 0;
var lastQuestion = theQuestions.length;
var rightAnswer;

var theUserScore = 0;

var theCountdown = 100;
var timeInterval;

function displayQuestion(){
    quizEnd.style.display = 'none';
    if(presentQuestion === lastQuestion){
        return revealScore();
    };
    var thePresentQuestion = theQuestions[presentQuestion];
    theQuestion.innerHTML = '<p>' + thePresentQuestion.question + '</p>';
    buttonA.innerHTML = thePresentQuestion.choiceA;
    buttonB.innerHTML = thePresentQuestion.choiceB;
    buttonC.innerHTML = thePresentQuestion.choiceC;
    buttonD.innerHTML = thePresentQuestion.choiceD;
};

function beginQuiz(){
    quizEnd.style.display = 'none';
    startingPage.style.display = 'none';
    displayQuestion();
    timeInterval = setInterval(function(){
        theCountdown--;
        remainingTIme.textContent = 'REMAINING TIME: ' + theCountdown;
        if(theCountdown === 0){
            clearInterval(timeInterval);
            displayScore();
        };
    },1000);
    theQuiz.style.display = 'block';
}
