// Object array of all questions and answers

var qAndAList = [
  {
    q: "What is the value type of a .confirm message?",
    a: "Boolean",
    choices: ["Number", "Boolean", "String", "Object"],
  },
  {
    q: "What does DOM stand for?",
    a: "Document Object Model",
    choices: [
      "Document Object Management",
      "Div Operation Manager",
      "Document Object Model",
      "Directory Output Message",
    ],
  },
  {
    q: "What notation do we use to most effectively traverse the DOM?",
    a: "Dot Notation",
    choices: [
      "Dot Notation",
      "Bracket Notation",
      "Parinthetical Notation",
      "Object-oriented Notation",
    ],
  },
  {
    q: "How do we target an ID?",
    a: ".getElementById",
    choices: [
      ".getClassById",
      ".getID",
      ".addEventListener",
      ".getElementById",
    ],
  },
  {
    q: "What is it called when we smash two or more stings together into one?",
    a: "concatenation",
    choices: ["concretation", "concatenation", "concavenation", "convocation "],
  },
];

//global variables

var score = 0;
var startQuiz = document.querySelector("#startBtn");
var questionText = document.getElementById("question");
var textInput = document.getElementById("textBox");
var answerButtonOne = document.getElementById("answerButton1");
var answerButtonTwo = document.getElementById("answerButton2");
var answerButtonThree = document.getElementById("answerButton3");
var answerButtonFour = document.getElementById("answerButton4");

// Upon clicking Start button, the function of the timer will begin and the function of cycling questions will begin.
// When 0 seconds are remaining, the timer will stop and the site will alert the user, "Time's Up!"

startQuiz.addEventListener("click", setTime);
startQuiz.addEventListener("click", questionFn);

var secondsLeft = 60;

function sendMessage() {
  alert("Time's Up!");
}

// Sets timer to 60 seconds and will decrease by 1 every second until secondsLeft === 0

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerElement.textContent = secondsLeft + " seconds left! Score: " + score;
    // hides start button when timer starts
    startQuiz.style.opacity = 0;
    // execute the following functions if secondsLeft === 0
    if (secondsLeft === 0) {
      stopTime();
      sendMessage();
      finalTally();
    }
  }, 1000);
  // Stops timer at 0
  function stopTime() {
    clearInterval(timerInterval);
  }
}

// Hides text box
textInput.style.opacity = 0;

// Question list //
// For All: If user selects the correct answer, their score will increase by 1.
// For All: If user selects the incorrect answer, the timer value will decrease by 10 seconds.

// Question 1

function questionFn() {
  questionText.innerText = qAndAList[0].q;
  answerButtonOne.innerHTML = qAndAList[0].choices[0];
  answerButtonTwo.innerHTML = qAndAList[0].choices[1];
  answerButtonThree.innerHTML = qAndAList[0].choices[2];
  answerButtonFour.innerHTML = qAndAList[0].choices[3];

  answerButtonOne.onclick = function () {
    alert("Wrong");
    secondsLeft -= 10;
    question2Fn();
  };
  answerButtonTwo.onclick = function () {
    alert("Correct!");
    score++;
    question2Fn();
  };
  answerButtonThree.onclick = function () {
    alert("Wrong");
    secondsLeft -= 10;
    question2Fn();
  };
  answerButtonFour.onclick = function () {
    alert("Wrong");
    secondsLeft -= 10;
    question2Fn();
  };
}

// Question 2

function question2Fn() {
  questionText.innerText = qAndAList[1].q;
  answerButtonOne.innerHTML = qAndAList[1].choices[0];
  answerButtonTwo.innerHTML = qAndAList[1].choices[1];
  answerButtonThree.innerHTML = qAndAList[1].choices[2];
  answerButtonFour.innerHTML = qAndAList[1].choices[3];

  answerButtonOne.onclick = function () {
    alert("Wrong");
    secondsLeft -= 10;
    question3Fn();
  };
  answerButtonTwo.onclick = function () {
    alert("Wrong");
    secondsLeft -= 10;
    question3Fn();
  };
  answerButtonThree.onclick = function () {
    alert("Correct!");
    score++;
    question3Fn();
  };
  answerButtonFour.onclick = function () {
    alert("Wrong");
    secondsLeft -= 10;
    question3Fn();
  };
}

// Question 3

function question3Fn() {
  questionText.innerText = qAndAList[2].q;
  answerButtonOne.innerHTML = qAndAList[2].choices[0];
  answerButtonTwo.innerHTML = qAndAList[2].choices[1];
  answerButtonThree.innerHTML = qAndAList[2].choices[2];
  answerButtonFour.innerHTML = qAndAList[2].choices[3];

  answerButtonOne.onclick = function () {
    alert("Correct!");
    score++;
    question4Fn();
  };
  answerButtonTwo.onclick = function () {
    alert("Wrong");
    secondsLeft -= 10;
    question4Fn();
  };
  answerButtonThree.onclick = function () {
    alert("Wrong");
    secondsLeft -= 10;
    question4Fn();
  };
  answerButtonFour.onclick = function () {
    alert("Wrong");
    secondsLeft -= 10;
    question4Fn();
  };
}

// Question 4

function question4Fn() {
  questionText.innerText = qAndAList[3].q;
  answerButtonOne.innerHTML = qAndAList[3].choices[0];
  answerButtonTwo.innerHTML = qAndAList[3].choices[1];
  answerButtonThree.innerHTML = qAndAList[3].choices[2];
  answerButtonFour.innerHTML = qAndAList[3].choices[3];

  answerButtonOne.onclick = function () {
    alert("Wrong");
    secondsLeft -= 10;
    question5Fn();
  };
  answerButtonTwo.onclick = function () {
    alert("Wrong");
    secondsLeft -= 10;
    question5Fn();
  };
  answerButtonThree.onclick = function () {
    alert("Wrong");
    secondsLeft -= 10;
    question5Fn();
  };
  answerButtonFour.onclick = function () {
    alert("Correct!");
    score++;
    question5Fn();
  };
}

// Question 5

function question5Fn() {
  questionText.innerText = qAndAList[4].q;
  answerButtonOne.innerHTML = qAndAList[4].choices[0];
  answerButtonTwo.innerHTML = qAndAList[4].choices[1];
  answerButtonThree.innerHTML = qAndAList[4].choices[2];
  answerButtonFour.innerHTML = qAndAList[4].choices[3];

  answerButtonOne.onclick = function () {
    alert("Wrong");
    secondsLeft -= 10;
    finalTally();
  };
  answerButtonTwo.onclick = function () {
    alert("Correct");
    score++;
    finalTally();
  };
  answerButtonThree.onclick = function () {
    alert("Wrong");
    secondsLeft -= 10;
    finalTally();
  };
  answerButtonFour.onclick = function () {
    alert("Wrong");
    secondsLeft -= 10;
    finalTally();
  };
}

// Alerts user that Quiz is over and returns their score

function finalTally() {
  alert(
    "Congratulations on finishing the quiz! Your score is " + score + "/5."
  );
  saveInfo();
}

// allows user to enter their initials into text box so that it may be displayed on the leaderboard after clicking submit

function saveInfo() {
  questionText.innerText = "Enter your initials below to save your score!";
  textInput.style.opacity = 1;
  answerButtonOne.innerHTML = "Submit";
  answerButtonTwo.style.opacity = 0;
  answerButtonThree.style.opacity = 0;
  answerButtonFour.style.opacity = 0;

  answerButtonOne.onclick = function () {
    var leaderBoard = document.getElementById("recordScore");
    var textInput = document.getElementById("textBox").value;
    var userInput = "";
    localStorage.setItem("textBox", JSON.stringify(textBox));
    var userInput = JSON.parse(localStorage.getItem(textInput));
    leaderBoard.innerText = textInput + "--" + score;
  };
}
