const quizData = [
  {
    question: "How old is Florin?",
    a: "1963",
    b: "2000",
    c: "1956",
    d: "1941",
    correct: "d",
  },
  {
    question: "What is the mpst used programming language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScripts",
    correct: "d",
  },
  {
    question: "Who is the President of US?",
    a: "Florin POP",
    b: "Donald Trump",
    c: "Joe Biden",
    d: "Obivan Kennobi",
    correct: "b",
  },

  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Application Programming Inetface",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "2020",
    b: "2019",
    c: "1995",
    d: "1994",
    correct: "c",
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answersEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

let currentQuiz = 0;
let answer = undefined;
let score = 0;
loadQuiz();
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
function deselectAnswers() {
  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answerEl.checked = false;
    }
  });
}
submitBtn.addEventListener("click", () => {
  //check to see the answer
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>`;
    }
  }
});
