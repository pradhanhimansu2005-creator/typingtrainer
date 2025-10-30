const words = ["an", "am", "at", "be", "do", "go", "he", "if", "in", "is", "bat", "cat", "dog", "sun", "pen", "run", "hat", "box", "fun", "log","python", "snake", "evolve", "speed", "typing", "level", "score", "grow", "bite", "strike"];
let currentWord = "";
let score = 0;
let level = 1;
let health = 3;

const wordEl = document.getElementById("current-word");
const inputBox = document.getElementById("input-box");
const scoreEl = document.getElementById("score");
const levelEl = document.getElementById("level");
const healthBar = document.getElementById("health-bar");
const snakeDisplay = document.getElementById("snake-display");
const gameOverScreen = document.getElementById("game-over-screen");
const finalScore = document.getElementById("final-score");

const soundCorrect = document.getElementById("correct-sound");
const soundWrong = document.getElementById("wrong-sound");
const soundLevelUp = document.getElementById("levelup-sound");
const soundGameOver = document.getElementById("gameover-sound");

function getNewWord() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  wordEl.textContent = currentWord;
}

function updateHealthBar() {
  healthBar.textContent = "❤️".repeat(health);
}

function updateSnake() {
  let snake = "🐼";
  for (let i = 0; i < level; i++) {
    snake += "💚";
  }
  snakeDisplay.textContent = snake;
}

function startGame() {
  score = 0;
  level = 1;
  health = 3;
  inputBox.value = "";
  inputBox.disabled = false;
  gameOverScreen.classList.add("hidden");
  document.getElementById("game-box").classList.remove("hidden");
  updateUI();
  getNewWord();
}

function gameOver() {
  inputBox.disabled = true;
  document.getElementById("game-box").classList.add("hidden");
  gameOverScreen.classList.remove("hidden");
  finalScore.textContent = score;
  soundGameOver.play();
}

function updateUI() {
  scoreEl.textContent = score;
  levelEl.textContent = level;
  updateHealthBar();
  updateSnake();
}

inputBox.addEventListener("input", () => {
  if (inputBox.value.trim().toLowerCase() === currentWord.toLowerCase()) {
    score++;
    soundCorrect.play();
    if (score % 5 === 0) {
      level++;
      soundLevelUp.play();
    }
    updateUI();
    inputBox.value = "";
    getNewWord();
  } else if (currentWord.toLowerCase().startsWith(inputBox.value.toLowerCase()) === false) {
    // wrong input early
    health--;
    updateHealthBar();
    soundWrong.play();
    if (health <= 0) {
      gameOver();
    }
  }
});

window.onload = startGame;
