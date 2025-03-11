const texts = [
  "The quick brown fox jumps over the lazy dog.",
  "JavaScript is a versatile language used for both front-end and back-end development.",
  "Learning how to type fast will help you in many areas of life.",
  "A well-designed UI can greatly improve user experience.",
  "Writing clean and maintainable code is a crucial skill for developers.",
  "A journey of a thousand miles begins with a single step.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "In the middle of difficulty lies opportunity.",
];

let timer = 20;
let errorCount = 0;
let correctCount = 0;
let isTestRunning = false;
let countdown;
let currentTextIndex = 0;
let startTime;
let endTime;
let totalTypedCharacters = 0;

let totalCorrect = 0;
let totalError = 0;

let timerElement;
let errorCountElement;
let accuracyElement;
let wpmElement;
let cpmElement;
let inputField;
let textToTypeElement;
let coloredTextToTypeElement;

window.onload = () => {
  timerElement = document.getElementById("timer");
  errorCountElement = document.getElementById("error-count");
  accuracyElement = document.getElementById("accuracy");
  wpmElement = document.getElementById("wpm");
  cpmElement = document.getElementById("cpm");
  inputField = document.getElementById("input-field");
  textToTypeElement = document.getElementById("text-to-type");
  coloredTextToTypeElement = document.getElementById("text-to-type");
};

function startTest() {
  if (isTestRunning) return;

  isTestRunning = true;
  inputField.disabled = false;
  inputField.focus();
  showNewText();
  startTime = Date.now();

  countdown = setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (timer === 0) {
    clearInterval(countdown);
    inputField.disabled = true;
    endTime = Date.now();
    calculateResults();
  } else {
    timer--;
    timerElement.textContent = timer + "s";
  }
}

function checkTyping() {
  const typedText = inputField.value;
  const currentText = texts[currentTextIndex];

  let correct = 0;
  let incorrect = 0;

  let tempResult = "";
  for (let i = 0; i < typedText.length; i++) {
    if (i > currentText.length - 1) break;
    if (typedText[i] === currentText[i]) {
      tempResult += `<span class="correct">${currentText[i]}</span>`;
      correct++;
    } else {
      tempResult += `<span class="incorrect">${currentText[i]}</span>`;
      incorrect++;
    }
  }

  coloredTextToTypeElement.innerHTML =
    typedText.length < currentText.length
      ? tempResult + currentText.substring(typedText.length)
      : tempResult;

  errorCount = incorrect;
  correctCount = correct;

  let accuracy = 100;
  if (correct !== 0 && incorrect !== 0) {
    accuracy = Math.round((correct / (correct + incorrect)) * 100);
  }

  errorCountElement.textContent = `${errorCount}`;
  accuracyElement.textContent = `${accuracy}%`;
}

function handleEnter(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    showNewText();
    inputField.value = "";

    totalCorrect += correctCount;
    totalError += errorCount;
  }
}

function showNewText() {
  const randomIndex = Math.floor(Math.random() * texts.length);
  textToTypeElement.textContent = texts[randomIndex];
  currentTextIndex = texts.indexOf(textToTypeElement.textContent);
}

function calculateResults() {
  const totalTimeInMinutes = (endTime - startTime) / (1000 * 60);
  const totalTypedCharacters = inputField.value.length;
  const totalTypedWords = inputField.value.split(" ").length - 1;

  const wpm = (totalTypedWords / totalTimeInMinutes).toFixed(2);
  const cpm = (totalTypedCharacters / totalTimeInMinutes).toFixed(2);

  totalCorrect += correctCount;
  totalError += errorCount;
  const accuracy = Math.round(
    (totalCorrect / (totalCorrect + totalError)) * 100
  );

  errorCountElement.textContent = totalError;
  accuracyElement.textContent = accuracy + "%";

  document.getElementById("results").innerHTML += `
    <div class="result-card wpm">
      <div class="result-title">WPM</div>
      <div class="result-value">${Math.floor(wpm)}</div>
    </div>
    <div class="result-card cpm">
      <div class="result-title">CPM</div>
      <div class="result-value">${Math.floor(cpm)}</div>
    </div>
  `;
  document.getElementById("text-to-type").innerHTML = `
  <button onClick="window.location.reload()">다시 시작</button>
  `;
}
