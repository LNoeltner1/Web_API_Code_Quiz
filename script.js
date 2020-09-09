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

// for (i = 0; i < qAndAList.length; i++) {
//   console.log(qAndAList[i].q);
//   console.log(qAndAList[i].a);
//   console.log(qAndAList[i].choices);
// }
var score = 0;
var startQuiz = document.querySelector("#startBtn");
var questionText = document.getElementById("question");
var answerButtonOne = document.getElementById("answerButton1");
var answerButtonTwo = document.getElementById("answerButton2");
var answerButtonThree = document.getElementById("answerButton3");
var answerButtonFour = document.getElementById("answerButton4");

startQuiz.addEventListener("click", setTime);
startQuiz.addEventListener("click", questionFn);

var secondsLeft = 60;

function sendMessage() {
  alert("Time's Up!");
}

// function setNextQuestion() {
//   questionFn(qAndAList[i].q);
// }

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerElement.textContent = secondsLeft + " seconds left! Score: " + score;

    if (secondsLeft === 0) {
      stopTime();
      sendMessage();
    }
  }, 1000);
  function stopTime() {
    clearInterval(timerInterval);
  }
}
console.log(score);

function questionFn() {
  questionText.innerText = qAndAList[0].q;
  answerButtonOne.innerHTML = qAndAList[0].choices[0];
  answerButtonTwo.innerHTML = qAndAList[0].choices[1];
  answerButtonThree.innerHTML = qAndAList[0].choices[2];
  answerButtonFour.innerHTML = qAndAList[0].choices[3];

  answerButtonOne.onclick = function () {
    alert("Wrong");
    secondsLeft - 10;
    question2Fn();
  };
  answerButtonTwo.onclick = function () {
    alert("Correct!");
    score++;
    question2Fn();
  };
  answerButtonThree.onclick = function () {
    alert("Wrong");
    secondsLeft - 10;
    question2Fn();
  };
  answerButtonFour.onclick = function () {
    alert("Wrong");
    secondsLeft - 10;
    question2Fn();
  };
}

function question2Fn() {
  questionText.innerText = qAndAList[1].q;
  answerButtonOne.innerHTML = qAndAList[1].choices[0];
  answerButtonTwo.innerHTML = qAndAList[1].choices[1];
  answerButtonThree.innerHTML = qAndAList[1].choices[2];
  answerButtonFour.innerHTML = qAndAList[1].choices[3];

  answerButtonOne.onclick = function () {
    alert("Wrong");
    secondsLeft - 10;
    question3Fn();
  };
  answerButtonTwo.onclick = function () {
    alert("Wrong");
    secondsLeft - 10;
    question3Fn();
  };
  answerButtonThree.onclick = function () {
    alert("Correct!");
    score++;
    question3Fn();
  };
  answerButtonFour.onclick = function () {
    alert("Wrong");
    secondsLeft - 10;
    question3Fn();
  };
}
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
    secondsLeft - 10;
    question4Fn();
  };
  answerButtonThree.onclick = function () {
    alert("Wrong");
    secondsLeft - 10;
    question4Fn();
  };
  answerButtonFour.onclick = function () {
    alert("Wrong");
    secondsLeft - 10;
    question4Fn();
  };
}
function question4Fn() {
  questionText.innerText = qAndAList[3].q;
  answerButtonOne.innerHTML = qAndAList[3].choices[0];
  answerButtonTwo.innerHTML = qAndAList[3].choices[1];
  answerButtonThree.innerHTML = qAndAList[3].choices[2];
  answerButtonFour.innerHTML = qAndAList[3].choices[3];

  answerButtonOne.onclick = function () {
    alert("Wrong");
    secondsLeft - 10;
    question5Fn();
  };
  answerButtonTwo.onclick = function () {
    alert("Wrong");
    secondsLeft - 10;
    question5Fn();
  };
  answerButtonThree.onclick = function () {
    alert("Wrong");
    secondsLeft - 10;
    question5Fn();
  };
  answerButtonFour.onclick = function () {
    alert("Correct!");
    score++;
    question5Fn();
  };
}
function question5Fn() {
  questionText.innerText = qAndAList[4].q;
  answerButtonOne.innerHTML = qAndAList[4].choices[0];
  answerButtonTwo.innerHTML = qAndAList[4].choices[1];
  answerButtonThree.innerHTML = qAndAList[4].choices[2];
  answerButtonFour.innerHTML = qAndAList[4].choices[3];

  answerButtonOne.onclick = function () {
    alert("Wrong");
    secondsLeft - 10;
    finalTally();
  };
  answerButtonTwo.onclick = function () {
    alert("Correct");
    score++;
    finalTally();
  };
  answerButtonThree.onclick = function () {
    alert("Wrong");
    secondsLeft - 10;
    finalTally();
  };
  answerButtonFour.onclick = function () {
    alert("Wrong");
    secondsLeft - 10;
    finalTally();
  };
}
function finalTally() {
  alert(
    "Congratulations on finishing the quiz! Your score is " + score + "/5."
  );
}

//create Html page with start button
//add div for "timerElement" so that it always shows
//add array of questions and answers??
//list?? new text every time??
//create countdown timer
//add event listener to start button that starts countdown timer and shows first question
//create loop that shows and styles each question and choices displayed
//each answer must be a button??
//when answer question, alert whether correct or not, give correct answer and give score/total
//if incorrect, secondsLeft-5
//remove previous question and display new question and answer set
//when countdown ends, alert ("Time Up!") and stop quiz loop and give final score/total
//if questions finished before time left === 0, stop timer, alert final score and congrats for finishing test
//allow user to add initials and record score associated on leaderboard
//
