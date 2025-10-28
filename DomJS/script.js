const lengthInput = document.getElementById("lengthInput");
const uppercaseCheckbox = document.getElementById("uppercaseCheckbox");
const numbersCheckbox = document.getElementById("numbersCheckbox");
const symbolsCheckbox = document.getElementById("symbolsCheckbox");
const generateButton = document.getElementById("generateButton");
const passwordResult = document.getElementById("passwordResult");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";

generateButton.addEventListener("click", generatePassword);

function generatePassword() {
  const length = Number(lengthInput.value);
  const includeUppercase = uppercaseCheckbox.checked;
  const includeNumbers = numbersCheckbox.checked;
  const includeSymbols = symbolsCheckbox.checked;
  
  let characters = "";
  
  if (includeUppercase) {
    characters += uppercaseLetters;
  }
  if (includeNumbers) {
    characters += numbers;
  }
  if (includeSymbols) {
    characters += symbols;
  }
  
  let password = "";
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  
  passwordResult.textContent = `Generated Password: ${password}`;
}


//Generate Quote

const quotes = [  "The only way to do great work is to love what you do. - Steve Jobs",
      "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",  "Believe you can and you're halfway there. - Theodore Roosevelt"]

const quoteButton = document.getElementById("quoteButton");
const quoteText = document.getElementById("quoteText");

quoteButton.addEventListener("click", generateQuote);

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
}



//Generate EmailUsername

const nameInput = document.getElementById("nameInput");
const generateEmailButton = document.getElementById("generateEmailButton");
const emailResult = document.getElementById("emailResult");

generateEmailButton.addEventListener("click", () => {
  const name = nameInput.value.trim().toLowerCase();

  if (name === "") {
    emailResult.textContent = "Please enter a name ⚠️ ";
    return;
  }

  // Possible characters for random generation
  const numbers = "0123456789";
  const symbols = "._-!";

  // Function to generate random characters
  function getRandomChars(chars, length) {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }

  // Generate 3 unique email formats
  const email1 = `${name}${getRandomChars(numbers, 3)}@gmail.com`; // tantan123@gmail.com
  const email2 = `${name}${getRandomChars(symbols + numbers, 2)}${getRandomChars(numbers, 2)}@gmail.com`; // tantan_42@gmail.com
  const email3 = `${name}${getRandomChars(symbols + numbers, 3)}${getRandomChars(symbols, 1)}@gmail.com`; // tantan99!@gmail.com

  // Show results
  emailResult.innerHTML = `
    <strong>Generated Emails:</strong><br>
    ${email1}<br>
    ${email2}<br>
    ${email3}
  `;
});




//Generate Number ODD_EVEN
const oddButton = document.getElementById("odd");
const evenButton = document.getElementById("even");
const resetButton = document.getElementById("reset");
const oddResult = document.getElementById("oddResult");
const evenResult = document.getElementById("evenResult");

let oddCount = -1;  // Start at -1 so first click gives 1
let evenCount = -2; // Start at -2 so first click gives 0

oddButton.addEventListener("click", generateOddNumber);
evenButton.addEventListener("click", generateEvenNumber);
resetButton.addEventListener("click", resetNumbers);

function generateOddNumber() {
    oddCount += 2;
    oddResult.textContent = `Odd Number: ${oddCount}`;
}

function generateEvenNumber() {
    evenCount += 2;
    evenResult.textContent = `Even Number: ${evenCount}`;
}

function resetNumbers() {
    oddCount = -1;
    evenCount = -2;
    oddResult.textContent = '';
    evenResult.textContent = '';
}



//Generate Emoji

const emojiButton = document.getElementById("emojiButton");
const emojiDisplay = document.getElementById("emoji");
const emojis = ["😀", "😂", "🥳", "😎", "🤩", "😴", "😡"];
emojiButton.addEventListener("click", generateEmoji);

function generateEmoji() {
    const randomEmoji = Math.floor(Math.random() * emojis.length);
    emojiDisplay.textContent = emojis[randomEmoji];
}



//Generate Color
const colorButton = document.getElementById("colorButton");
const colorResult = document.getElementById("colorResult");

colorButton.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
  colorResult.textContent = `Color Code: ${randomColor}`;
});
