const questions = [
  {
    question:
      'Which programming language is known as the "language of the web"?',
    answers: [
      { text: "Python", correct: false },
      { text: "Java", correct: false },
      { text: "JavaScript", correct: true },
      { text: "C++", correct: false },
    ],
  },
  {
    question: 'What does "HTTP" stand for in web addresses?',
    answers: [
      { text: "HyperText Transfer Protocol", correct: true },
      { text: "HighTech Transfer Protocol", correct: false },
      { text: "Hyper Terminal Transfer Protocol", correct: false },
      { text: "HyperText Transfer Process", correct: false },
    ],
  },
  {
    question: 'What does the term "debugging" mean in programming?',
    answers: [
      { text: "Writing the code", correct: false },
      { text: " Fixing errors or issues in the code", correct: true },
      { text: "Compiling the code into executable format", correct: false },
      { text: "Running the code in a virtual machine", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a type of loop in JavaScript?",
    answers: [
      { text: "for", correct: false },
      { text: "while", correct: false },
      { text: "until", correct: true },
      { text: "do...while", correct: false },
    ],
  },
  {
    question:
      "Which programming language is commonly used for machine learning and data science?",
    answers: [
      { text: "Python", correct: true },
      { text: "Javascript", correct: false },
      { text: "Ruby", correct: false },
      { text: "C#", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;

  nextButton.innerHTML = "Play again";
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
