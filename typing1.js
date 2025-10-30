let correct = 0;
let typed = 0;
let errors = 0;
let startTime = null;

function getRandomAlphabet() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function updateStats() {
    const elapsedTime = (Date.now() - startTime) / 1000;
    const speed = Math.round((typed / elapsedTime) * 60);
    const accuracy = Math.round((correct / typed) * 100);
    document.getElementById("speed").innerText = isNaN(speed) ? 0 : speed;
    document.getElementById("accuracy").innerText = isNaN(accuracy) ? 0 : accuracy;
    document.getElementById("typed").innerText = typed;
    document.getElementById("correct").innerText = correct;
    document.getElementById("errors").innerText = errors;
    document.getElementById("time").innerText = elapsedTime.toFixed(1);
}

function nextAlphabet() {
    const alphabetElement = document.getElementById("alphabet");
    alphabetElement.innerText = getRandomAlphabet();
    alphabetElement.classList.remove("correct", "incorrect");
    alphabetElement.style.animation = "bounce 0.5s ease";
}

function startGame() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameContainer").style.display = "block";
    nextAlphabet();
    startTime = Date.now();
}

function showTypedInPlaceholder(input) {
    document.getElementById("input").placeholder = input;
}

document.getElementById("startBtn").addEventListener("click", startGame);

document.getElementById("input").addEventListener("input", function (e) {
    const input = e.target.value;
    const displayed = document.getElementById("alphabet").innerText;
    typed++;
    showTypedInPlaceholder(input);
    if (input === displayed) {
        correct++;
    } else {
        errors++;
    }
    updateStats();
    nextAlphabet();
    e.target.value = "";
    setTimeout(() => {
        showTypedInPlaceholder("");
    }, 50);
});
