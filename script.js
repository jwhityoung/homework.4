var start = document.getElementById("start");
var time = document.getElementById("time");
var quizQuestions = document.getElementById("quiz-questions");
var questionEl = document.getElementById("questions");
var AnswerChoices = document.getElementById("answer-choices");
var finalScore = document.getElementById("final-score");
var initials = document.getElementById("initials");
var submit = document.getElementById("submit");
var startPage = document.querySelector(".startpage");
var endScreen = document.getElementById("end-screen");


//answer choice buttons
var answerChoice1 = document.getElementById("button1");
var answerChoice2 = document.getElementById("button2");
var answerChoice3 = document.getElementById("button3");
var answerChoice4 = document.getElementById("button4");

var answerChoice5 = document.getElementById("button5");
var answerChoice6 = document.getElementById("button6");
var answerChoice7 = document.getElementById("button7");
var answerChoice8 = document.getElementById("button8");

var answerChoice9 = document.getElementById("button9");
var answerChoice10 = document.getElementById("button10");
var answerChoice11 = document.getElementById("button11");
var answerChoice12 = document.getElementById("button12");

var answerChoice13 = document.getElementById("button13");
var answerChoice14 = document.getElementById("button14");
var answerChoice15 = document.getElementById("button15");
var answerChoice16 = document.getElementById("button16");

var answerChoice17 = document.getElementById("button17");
var answerChoice18 = document.getElementById("button18");
var answerChoice19 = document.getElementById("button19");
var answerChoice20 = document.getElementById("button20");

var rightOrWrong = document.querySelector(".rightorwrong");

var nextQuestion = document.getElementById("next-question");
var nextQuestion1 = document.getElementById("next-question1");
var nextQuestion2 = document.getElementById("next-question2");
var nextQuestion3 = document.getElementById("next-question3");
var finish = document.getElementById("finish");

var q2 = document.getElementById("q2");
var q1 = document.getElementById("q1");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var q5 = document.getElementById("q5");

var secondsLeft = 60;
var correct = 0;
var questionNumber = 0;

quizQuestions.style.display = "none";
endScreen.style.display = "none";


//Initial start of the quiz 


function startQuiz() {

    setInterval(function () {
        secondsLeft--;
        time.textContent = ("Time remaining: " + secondsLeft + " seconds");
    },
        1000);
    getQuestion();

}
//If timer gets to 0 skip to last page
if (secondsLeft === 0) {
    lastPage();
}


//Question 1 
function getQuestion() {
    startPage.style.display = "none";
    quizQuestions.style.display = "block";
    nextQuestion.style.display = "none";
    nextQuestion1.style.display = "none";
    nextQuestion2.style.display = "none";
    nextQuestion3.style.display = "none";
    finish.style.display = "none";
    q1.style.display = "block";
    q2.style.display = "none";
    q3.style.display = "none";
    q4.style.display = "none";
    q5.style.display = "none";
    questionEl.textContent = (questions[questionNumber].title);
    answerChoice1.textContent = (questions[questionNumber].choices[0]);
    answerChoice2.textContent = (questions[questionNumber].choices[1]);
    answerChoice3.textContent = (questions[questionNumber].choices[2]);
    answerChoice4.textContent = (questions[questionNumber].choices[3]);
};

//Correct0
function checkAnswerCorrect() {
    nextQuestion.style.display = "block";
    rightOrWrong.style.display = "block";
    rightOrWrong.textContent = ("Correct!")
    nextQuestion1.style.display = "none";
    nextQuestion2.style.display = "none";
    nextQuestion3.style.display = "none";
    finish.style.display = "none";
}
//Incorrect0
function checkAnswerIncorrect() {
    rightOrWrong.textContent = ("Incorrect");
    rightOrWrong.style.display = "block";
    nextQuestion.style.display = "block";
    nextQuestion1.style.display = "none";
    nextQuestion2.style.display = "none";
    nextQuestion3.style.display = "none";
    finish.style.display = "none";
    secondsLeft = (secondsLeft - 10);
}

//Question 2 
function getQuestion2() {
    questionNumber = 1;
    console.log(questions);
    console.log(questions[questionNumber]);
    startPage.style.display = "none";
    quizQuestions.style.display = "block";
    nextQuestion.style.display = "none";
    nextQuestion1.style.display = "none";
    nextQuestion2.style.display = "none";
    nextQuestion3.style.display = "none";
    finish.style.display = "none";
    rightOrWrong.style.display = "none";
    q1.style.display = "none";
    q2.style.display = "block";
    q3.style.display = "none";
    q4.style.display = "none";
    q5.style.display = "none";
    questionEl.textContent = (questions[questionNumber].title);
    answerChoice5.textContent = (questions[questionNumber].choices[0]);
    answerChoice6.textContent = (questions[questionNumber].choices[1]);
    answerChoice7.textContent = (questions[questionNumber].choices[2]);
    answerChoice8.textContent = (questions[questionNumber].choices[3]);

};

//Correct1
function checkAnswerCorrect1() {
    nextQuestion1.style.display = "block";
    rightOrWrong.style.display = "block";
    rightOrWrong.textContent = ("Correct!");
    nextQuestion.style.display = "none";
    nextQuestion2.style.display = "none";
    nextQuestion3.style.display = "none";
    finish.style.display = "none";
}
//Incorrect1
function checkAnswerIncorrect1() {
    rightOrWrong.textContent = ("Incorrect");
    rightOrWrong.style.display = "block";
    nextQuestion1.style.display = "block";
    secondsLeft = (secondsLeft - 10);
    nextQuestion.style.display = "none";
    nextQuestion2.style.display = "none";
    nextQuestion3.style.display = "none";
    finish.style.display = "none";
}

//Question 3
function getQuestion3() {
    questionNumber = 2;
    console.log(questions);
    console.log(questions[questionNumber]);
    startPage.style.display = "none";
    quizQuestions.style.display = "block";
    nextQuestion.style.display = "none";
    nextQuestion1.style.display = "none";
    nextQuestion2.style.display = "none";
    nextQuestion3.style.display = "none";
    finish.style.display = "none";
    rightOrWrong.style.display = "none";
    q1.style.display = "none";
    q2.style.display = "none";
    q3.style.display = "block";
    q4.style.display = "none";
    q5.style.display = "none";
    questionEl.textContent = (questions[questionNumber].title);
    answerChoice9.textContent = (questions[questionNumber].choices[0]);
    answerChoice10.textContent = (questions[questionNumber].choices[1]);
    answerChoice11.textContent = (questions[questionNumber].choices[2]);
    answerChoice12.textContent = (questions[questionNumber].choices[3]);

};

//Correct2
function checkAnswerCorrect2() {
    nextQuestion.style.display = "none";
    nextQuestion1.style.display = "none";
    nextQuestion2.style.display = "block";
    nextQuestion3.style.display = "none";
    finish.style.display = "none";
    rightOrWrong.style.display = "block";
    rightOrWrong.textContent = ("Correct!");
}
//Incorrect2
function checkAnswerIncorrect2() {
    rightOrWrong.textContent = ("Incorrect");
    rightOrWrong.style.display = "block";
    nextQuestion.style.display = "none";
    nextQuestion1.style.display = "none";
    nextQuestion2.style.display = "block";
    nextQuestion3.style.display = "none";
    finish.style.display = "none";
    secondsLeft = (secondsLeft - 10);
}

//Question 4
function getQuestion4() {
    questionNumber = 3;
    console.log(questions);
    console.log(questions[questionNumber]);
    startPage.style.display = "none";
    quizQuestions.style.display = "block";
    nextQuestion.style.display = "none";
    nextQuestion1.style.display = "none";
    nextQuestion2.style.display = "none";
    nextQuestion3.style.display = "none";
    finish.style.display = "none";
    rightOrWrong.style.display = "none";
    q1.style.display = "none";
    q2.style.display = "none";
    q3.style.display = "none";
    q4.style.display = "block";
    q5.style.display = "none";
    questionEl.textContent = (questions[questionNumber].title);
    answerChoice13.textContent = (questions[questionNumber].choices[0]);
    answerChoice14.textContent = (questions[questionNumber].choices[1]);
    answerChoice15.textContent = (questions[questionNumber].choices[2]);
    answerChoice16.textContent = (questions[questionNumber].choices[3]);

};

//Correct3
function checkAnswerCorrect3() {
    nextQuestion.style.display = "none";
    nextQuestion1.style.display = "none";
    nextQuestion2.style.display = "none";
    nextQuestion3.style.display = "block";
    finish.style.display = "none";
    rightOrWrong.style.display = "block";
    rightOrWrong.textContent = ("Correct!");
}
//Incorrect3
function checkAnswerIncorrect3() {
    rightOrWrong.textContent = ("Incorrect");
    rightOrWrong.style.display = "block";
    nextQuestion.style.display = "none";
    nextQuestion1.style.display = "none";
    nextQuestion2.style.display = "none";
    nextQuestion3.style.display = "block";
    finish.style.display = "none";
    secondsLeft = (secondsLeft - 10);
}

//Question 5
function getQuestion5() {
    questionNumber = 4;
    console.log(questions);
    console.log(questions[questionNumber]);
    startPage.style.display = "none";
    rightOrWrong.style.display = "none";
    quizQuestions.style.display = "block";
    nextQuestion.style.display = "none";
    nextQuestion1.style.display = "none";
    nextQuestion2.style.display = "none";
    nextQuestion3.style.display = "none";
    finish.style.display = "none";
    q1.style.display = "none";
    q2.style.display = "none";
    q3.style.display = "none";
    q4.style.display = "none";
    q5.style.display = "block";
    questionEl.textContent = (questions[questionNumber].title);
    answerChoice17.textContent = (questions[questionNumber].choices[0]);
    answerChoice18.textContent = (questions[questionNumber].choices[1]);
    answerChoice19.textContent = (questions[questionNumber].choices[2]);
    answerChoice20.textContent = (questions[questionNumber].choices[3]);

};

//Correct4
function checkAnswerCorrect4() {
    nextQuestion.style.display = "none";
    nextQuestion1.style.display = "none";
    nextQuestion2.style.display = "none";
    nextQuestion3.style.display = "none";
    finish.style.display = "block";
    rightOrWrong.style.display = "block";
    rightOrWrong.textContent = ("Correct!");
}
//Incorrect4
function checkAnswerIncorrect4() {
    rightOrWrong.textContent = ("Incorrect");
    rightOrWrong.style.display = "block";
    nextQuestion.style.display = "none";
    nextQuestion1.style.display = "none";
    nextQuestion2.style.display = "none";
    nextQuestion3.style.display = "none";
    finish.style.display = "block";
    secondsLeft = (secondsLeft - 10);
}

//All done 
function lastPage () {
    console.log("alldone");
    startPage.style.display = "none";
    rightOrWrong.style.display = "none";
    quizQuestions.style.display = "none";
   time.style.display = "none";
    endScreen.style.display = "block";
}



  
//Event Listeners 

//start
start.addEventListener("click", startQuiz);

//Q1
answerChoice1.addEventListener("click", checkAnswerIncorrect);
answerChoice2.addEventListener("click", checkAnswerIncorrect);
answerChoice3.addEventListener("click", checkAnswerCorrect);
answerChoice4.addEventListener("click", checkAnswerIncorrect);
nextQuestion.addEventListener("click", getQuestion2);

//Q2
answerChoice5.addEventListener("click", checkAnswerIncorrect1);
answerChoice6.addEventListener("click", checkAnswerIncorrect1);
answerChoice7.addEventListener("click", checkAnswerIncorrect1);
answerChoice8.addEventListener("click", checkAnswerCorrect1);
nextQuestion1.addEventListener("click", getQuestion3);


//Q3
answerChoice9.addEventListener("click", checkAnswerCorrect2);
answerChoice10.addEventListener("click", checkAnswerIncorrect2);
answerChoice11.addEventListener("click", checkAnswerIncorrect2);
answerChoice12.addEventListener("click", checkAnswerIncorrect2);
nextQuestion2.addEventListener("click", getQuestion4);

//Q4
answerChoice13.addEventListener("click", checkAnswerIncorrect3);
answerChoice14.addEventListener("click", checkAnswerCorrect3);
answerChoice15.addEventListener("click", checkAnswerIncorrect3);
answerChoice16.addEventListener("click", checkAnswerIncorrect3);
nextQuestion3.addEventListener("click", getQuestion5);


//Q5
answerChoice17.addEventListener("click", checkAnswerIncorrect4);
answerChoice18.addEventListener("click", checkAnswerIncorrect4);
answerChoice19.addEventListener("click", checkAnswerIncorrect4);
answerChoice20.addEventListener("click", checkAnswerCorrect4);


finish.addEventListener("click", lastPage);