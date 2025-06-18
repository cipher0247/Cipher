// === Typewriter Intro ===
const text = "WELCOME TO CIPHER WORLD — PLACE WHERE PROJECTS LIVE.";
let index = 0;
function typeWriter() {
  if (index < text.length) {
    document.getElementById("typedText").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 60);
  }
}

// === Matrix Background Effect ===
function startMatrixEffect() {
  const canvas = document.getElementById("matrix-bg");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const letters = "アカサタナハマヤラワ0123456789$#*".split("");
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00ff99";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }

  setInterval(draw, 33);
}

// === Rotating Hacker Quotes ===
function rotateQuotes() {
  const quotes = [
    "The quieter you become, the more you can hear. — Ram Dass",
    "Hackers don't destroy systems. They expose flaws. — Anon",
    "In the world of code, silence is strength. — Cipher",
    "Zero-day minds break everyday limits. — Unknown",
    "There is no patch for human stupidity. — Kevin Mitnick"
  ];
  const quoteBox = document.getElementById("quoteBox");
  let qIndex = 0;
  setInterval(() => {
    if (quoteBox) {
      quoteBox.textContent = quotes[qIndex];
      qIndex = (qIndex + 1) % quotes.length;
    }
  }, 5000);
}

// === Activate Split Animation then Redirect ===
function activateSplitScreen(redirectURL) {
  document.getElementById("left-screen").classList.add("show");
  document.getElementById("right-screen").classList.add("show");
  setTimeout(() => {
    window.location.href = redirectURL;
  }, 1200);
}

// === Simple ChatBot Logic ===
function talk() {
  const input = document.getElementById("userInput");
  const chatbox = document.getElementById("chatbox");
  const userText = input.value.trim();
  if (!userText) return;

  const userMsg = document.createElement("div");
  userMsg.className = "msg user";
  userMsg.innerText = userText;
  chatbox.appendChild(userMsg);

  const botMsg = document.createElement("div");
  botMsg.className = "msg bot";

  const lower = userText.toLowerCase();
  if (lower.includes("your name")) {
    botMsg.innerText = "I am CipherBot, trained by my lord Anon.";
  } else if (lower.includes("projects")) {
    botMsg.innerText = "You can view all Cipher's projects in the project vault.";
  } else if (lower.includes("skills")) {
    botMsg.innerText = "Python, AI, CyberSec, and a bit of magic ⚡";
  } else {
    botMsg.innerText = "Interesting... I'll store that for analysis.";
  }

  chatbox.appendChild(botMsg);
  input.value = "";
  chatbox.scrollTop = chatbox.scrollHeight;
}

// === Simple Alert-Based Bot (Optional Fallback) ===
function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message) {
    alert("CipherBot is still learning to respond 🤖✨\nYou typed: " + message);
    input.value = "";
  }
}

// === Init Everything on Page Load ===
document.addEventListener("DOMContentLoaded", () => {
  typeWriter();
  rotateQuotes();
  startMatrixEffect();
});
