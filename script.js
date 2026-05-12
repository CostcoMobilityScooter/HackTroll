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
  let randomText = Math.random().toString(36).substring(2, 15);

  let randomWord =
    words[Math.floor(Math.random() * words.length)];

  return randomText + "  " + randomWord;
}

function addLine() {
  screen.innerHTML += randomLine() + "\\n";

  window.scrollTo(0, document.body.scrollHeight);

  if (screen.innerHTML.length > 20000) {
    screen.innerHTML = "";
  }
}

setInterval(addLine, 100);
