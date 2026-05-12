const screen = document.getElementById("screen");

const words = [
  "ACCESS GRANTED",
  "SYSTEM OVERRIDE",
  "KERNEL ERROR",
  "TRACKING IP",
  "BYPASSING FIREWALL",
  "DECRYPTING FILES",
  "LOADING PAYLOAD",
  "MAINFRAME ACCESS",
  "SECURITY BREACH",
  "UPLINK ESTABLISHED"
];

function randomLine() {
  let randomText =
    Math.random().toString(36).substring(2, 10);

  let randomWord =
    words[Math.floor(Math.random() * words.length)];

  return randomText + "  " + randomWord;
}

let currentLine = "";
let currentText = "";
let index = 0;

function startTyping() {
  currentLine = randomLine() + "\\n";
  index = 0;

  typeCharacter();
}

function typeCharacter() {
  if (index < currentLine.length) {
    currentText += currentLine[index];

    screen.textContent = currentText;

    index++;

    window.scrollTo(0, document.body.scrollHeight);

    setTimeout(typeCharacter, 25);
  } else {
    setTimeout(startTyping, 100);
  }

  if (currentText.length > 15000) {
    currentText = "";
  }
}

startTyping();
