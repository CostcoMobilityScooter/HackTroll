const screen = document.getElementById("screen");

const hackerWords = [
  "ACCESS GRANTED",
  "SYSTEM OVERRIDE",
  "KERNEL ERROR",
  "TRACKING IP",
  "BYPASSING FIREWALL",
  "DECRYPTING FILES",
  "MAINFRAME ACCESS",
  "SECURITY BREACH",
  "UPLINK ESTABLISHED"
];

const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>[]{}#$%^&*";

let output = "";

function randomChar() {
  return chars[Math.floor(Math.random() * chars.length)];
}

function randomWord() {
  return hackerWords[
    Math.floor(Math.random() * hackerWords.length)
  ];
}

function type() {

  // random ENTER key
  if (Math.random() < 0.12) {
    output += "\\n";
  }

  // random hacker phrase
  else if (Math.random() < 0.03) {
    output += " " + randomWord() + " ";
  }

  // random chunk typing
  else {

    // sometimes type 1 char
    // sometimes 2-5 chars quickly
    let burst = Math.floor(Math.random() * 5) + 1;

    for (let i = 0; i < burst; i++) {
      output += randomChar();
    }
  }

  screen.textContent = output;

  // smooth scroll
  screen.scrollTop = screen.scrollHeight;

  // reset eventually
  if (output.length > 30000) {
    output = "";
  }

  // HUMAN typing speed randomness
  let speed;

  if (Math.random() < 0.2) {
    speed = Math.random() * 200 + 100; // pause
  } else {
    speed = Math.random() * 40 + 5; // fast typing
  }

  setTimeout(type, speed);
}

type();
