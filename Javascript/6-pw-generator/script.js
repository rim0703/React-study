window.onload = () => {
  document
    .getElementById("generateBtn")
    .addEventListener("click", generatePassword);
  document.getElementById("password").addEventListener("click", copyPassword);
};

function generatePassword() {
  const length = document.getElementById("length").value;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSmallLetters = document.getElementById("smallLetters").checked;
  const includeCapitalLetters =
    document.getElementById("capitalLetters").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  if (length < 5 || length > 70) {
    showToast("비밀번호 길이는 5에서 70 사이여야 합니다.");
    return;
  }

  let charset = "";
  const mandatoryChars = [];

  if (includeNumbers) {
    charset += "0123456789";
    mandatoryChars.push(randomChar("0123456789"));
  }
  if (includeSmallLetters) {
    charset += "abcdefghijklmnopqrstuvwxyz";
    mandatoryChars.push(randomChar("abcdefghijklmnopqrstuvwxyz"));
  }
  if (includeCapitalLetters) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    mandatoryChars.push(randomChar("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));
  }
  if (includeSymbols) {
    charset += "@!#$&%";
    mandatoryChars.push(randomChar("@!#$&%"));
  }

  if (charset === "") {
    showToast("적어도 하나의 옵션을 선택해야 합니다.");
    return;
  }

  let remainingLength = length - mandatoryChars.length;
  let password = "";

  for (let i = 0; i < remainingLength; i++) {
    password += randomChar(charset);
  }

  password += shuffleArray(mandatoryChars).join("");
  password = shuffleString(password);
  document.getElementById("password").value = password;
}

function randomChar(characters) {
  return characters.charAt(Math.floor(Math.random() * characters.length));
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shuffleString(str) {
  return shuffleArray(str.split("")).join("");
}

// function copyPassword() {
//   const passwordField = document.getElementById("password");
//   if (passwordField.value === "") {
//     showToast("복사할 비밀번호가 없습니다.");
//     return;
//   }

//   passwordField.select();
//   passwordField.setSelectionRange(0, 99999);
//   document.execCommand("copy"); // deprecated
//   showToast("비밀번호가 복사되었습니다.");
// }

async function copyPassword() {
  const passwordField = document.getElementById("password");
  const password = passwordField.value;

  if (password === "") {
    showToast("복사할 비밀번호가 없습니다.");
    return;
  }

  try {
    await navigator.clipboard.writeText(password);
    showToast("비밀번호가 복사되었습니다.");
  } catch (err) {
    showToast("복사 실패: " + err);
  }
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => document.body.removeChild(toast), 500);
  }, 3000);
}
