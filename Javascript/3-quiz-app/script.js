let score = 0;
let currentAnswer = 0;
let correct = false;
let noAnswer = false;

function generateQuestion() {
  correct = false;
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  currentAnswer = num1 + num2;

  document.getElementById("question").textContent = `${num1} + ${num2} = ?`;

  generateAnswers(currentAnswer);
}

function generateAnswers(correctAnswer) {
  const answersContainer = document.getElementById("answers");
  answersContainer.innerHTML = ""; // 기존 답안을 초기화

  const answers = [];
  let existAnswer = false;
  const answersCount = ((Math.floor(Math.random() * 10) + 1) % 3) + 2;
  while (answers.length < answersCount) {
    const randomAnswer = Math.floor(Math.random() * 20) + 1;
    if (!answers.includes(randomAnswer)) {
      answers.push(randomAnswer);
      if (randomAnswer == correctAnswer) existAnswer = true;
    }
  }
  if (!existAnswer) {
    answers.push("답이 없음");
    noAnswer = true;
  }

  answers.sort(() => Math.random() - 0.5);

  answers.forEach((answer) => {
    const answerButton = document.createElement("button");
    answerButton.textContent = answer;
    answerButton.onclick = () => checkAnswer(answer);
    answersContainer.appendChild(answerButton);
  });
}

function checkAnswer(selectedAnswer) {
  if (
    selectedAnswer == currentAnswer ||
    (selectedAnswer == "답이 없음" && noAnswer)
  ) {
    correct = true;
    score++;
    document.getElementById("score").textContent = score;

    document.body.style.backgroundColor = "#cce2cb";
    const answersContainer = document.getElementById("answers");
    const questionContainer = document.getElementById("question");

    questionContainer.textContent = questionContainer.textContent.replace(
      "?",
      currentAnswer
    );
    answersContainer.childNodes.forEach((node) => {
      node.onclick = () => {};
      if (
        node.textContent == currentAnswer ||
        node.textContent == "답이 없음"
      ) {
        node.style.backgroundColor = "#97c1a9";
      } else node.style.backgroundColor = "#ff968a";
    });
  } else {
    document.body.style.backgroundColor = "#ffc5bf";
  }
}

function nextQuestion() {
  if (correct) {
    document.body.style.backgroundColor = "#f9f9f9";
    generateQuestion();
  } else {
    alert("문제를 풀어야 다음 문제로 넘어갈 수 있습니다.");
  }
}

generateQuestion();
