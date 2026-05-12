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

const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

let text = "";

function randomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function randomChar() {
  return chars[Math.floor(Math.random() * chars.length)];
}

function type() {
  // random enter/new line
  if (Math.random() < 0.08) {
    text += "\\n";
  }

  // sometimes add hacker words
  else if (Math.random() < 0.04) {
    text += " " + randomWord() + " ";
  }

  // normal typing
  else {
    text += randomChar();
  }

  screen.textContent = text;

  // auto scroll
  window.scrollTo(0, document.body.scrollHeight);

  // clear screen eventually
  if (text.length > 20000) {
    text = "";
  }

  // random typing speed
  const speed = Math.random() * 40 + 10;

  setTimeout(type, speed);
}

type();
