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
    choices: ["concretation", "concatenation", "concavenation", "convocation"],
  },
];

// for (i = 0; i < qAndAList.length; i++) {
//   console.log(qAndAList[i].q);
//   console.log(qAndAList[i].a);
//   console.log(qAndAList[i].choices);
// }

var startQuiz = document.querySelector("#startBtn");

startQuiz.addEventListener("click", setTime);
startQuiz.addEventListener("click", questionFn);

var secondsLeft = 60;

function sendMessage() {
  alert("Time's Up!");
}

function questionFn() {
  ///////////////////////////////////////make questions go brrrr
}

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerElement.textContent = secondsLeft + " seconds left!";

    if (secondsLeft === 0) {
      stopTime();
      sendMessage();
    }
  }, 1000);
  function stopTime() {
    clearInterval(timerInterval);
  }
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
//if questions finished before time left === 0, stop timer, alert final score and congrats for finishing text
//allow user to add initials and record score associated on leaderboard
//
