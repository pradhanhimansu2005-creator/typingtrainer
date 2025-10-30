const TIME_LIMIT = 20; // Set the time limit in seconds
let timeLeft = TIME_LIMIT;
let timeElapsed = 0;
let errors = 0;
let total_errors = 0;
let accuracy = 0;
let characterTyped = 0;
let quoteNo = 0;
let quote_text = document.getElementById('quote_text');
let input_area = document.getElementById('input_area');
let timer_text = document.getElementById('timer_text');
let accuracy_text = document.getElementById('accuracy_text');
let error_text = document.getElementById('error_text');
let restart_btn = document.getElementById('restart_btn');
let cpm_group = document.getElementsByClassName('cpm')[0];
let wpm_group = document.getElementsByClassName('wpm')[0];
let cpm_text = document.getElementById('cpm_text');
let wpm_text = document.getElementById('wpm_text');
let timer;

const quotes_array = [
    "The quick brown fox jumps over the lazy dog.",
    "Pack my box with five dozen liquor jugs.",
    "A journey of a thousand miles begins with a single step."
];

function updateQuote() {
  quote_text.textContent = null;
  current_quote = quotes_array[quoteNo];

  current_quote.split('').forEach(char => {
    const charSpan = document.createElement('span');
    charSpan.innerText = char;
    quote_text.appendChild(charSpan);
  });

  if (quoteNo < quotes_array.length - 1)
    quoteNo++;
  else
    quoteNo = 0;
}

function processCurrentText() {
  curr_input = input_area.value;
  curr_input_array = curr_input.split('');
  characterTyped++;
  errors = 0;
  quoteSpanArray = quote_text.querySelectorAll('span');
  quoteSpanArray.forEach((char, index) => {
    let typedChar = curr_input_array[index];

    if (typedChar == null) {
      char.classList.remove('correct_char');
      char.classList.remove('incorrect_char');
    } else if (typedChar === char.innerText) {
      char.classList.add('correct_char');
      char.classList.remove('incorrect_char');
    } else {
      char.classList.add('incorrect_char');const TIME_LIMIT = 60; // Set the time limit in seconds
      let timeLeft = TIME_LIMIT;
      let timeElapsed = 0;
      let errors = 0;
      let total_errors = 0;
      let accuracy = 0;
      let characterTyped = 0;
      let quoteNo = 0;
      let quote_text = document.getElementById('quote_text');
      let input_area = document.getElementById('input_area');
      let timer_text = document.getElementById('timer_text');
      let accuracy_text = document.getElementById('accuracy_text');
      let error_text = document.getElementById('error_text');
      let restart_btn = document.getElementById('restart_btn');
      let cpm_group = document.getElementsByClassName('cpm')[0];
      let wpm_group = document.getElementsByClassName('wpm')[0];
      let cpm_text = document.getElementById('cpm_text');
      let wpm_text = document.getElementById('wpm_text');
      let timer;
      
      const quotes_array = [
          "The quick brown fox jumps over the lazy dog.",
          "Pack my box with five dozen liquor jugs.",
          "A journey of a thousand miles begins with a single step."
      ];
      
      function updateQuote() {
        quote_text.textContent = null;
        current_quote = quotes_array[quoteNo];
      
        current_quote.split('').forEach(char => {
          const charSpan = document.createElement('span');
          charSpan.innerText = char;
          quote_text.appendChild(charSpan);
        });
      
        if (quoteNo < quotes_array.length - 1)
          quoteNo++;
        else
          quoteNo = 0;
      }
      
      function processCurrentText() {
        curr_input = input_area.value;
        curr_input_array = curr_input.split('');
        characterTyped++;
        errors = 0;
        quoteSpanArray = quote_text.querySelectorAll('span');
        quoteSpanArray.forEach((char, index) => {
          let typedChar = curr_input_array[index];
      
          if (typedChar == null) {
            char.classList.remove('correct_char');
            char.classList.remove('incorrect_char');
          } else if (typedChar === char.innerText) {
            char.classList.add('correct_char');
            char.classList.remove('incorrect_char');
          } else {
            char.classList.add('incorrect_char');
            char.classList.remove('correct_char');
            errors++;
          }
        });
      
        error_text.textContent = total_errors + errors;
        let correctCharacters = (characterTyped - (total_errors + errors));
        let accuracyVal = ((correctCharacters / characterTyped) * 100);
        accuracy_text.textContent = Math.round(accuracyVal);
      
        if (curr_input.length == current_quote.length) {
          updateQuote();
          total_errors += errors;
          input_area.value = "";
        }
      }
      
      function startGame() {
        resetValues();
        updateQuote();
        clearInterval(timer);
        timer = setInterval(updateTimer, 1000);
      }
      
      function resetValues() {
        timeLeft = TIME_LIMIT;
        timeElapsed = 0;
        errors = 0;
        total_errors = 0;
        accuracy = 0;
        characterTyped = 0;
        quoteNo = 0;
        input_area.disabled = false;
        input_area.value = "";
        quote_text.textContent = 'Click on the area below to start the game.';
        accuracy_text.textContent = 100;
        timer_text.textContent = timeLeft + 's';
        error_text.textContent = 0;
        restart_btn.style.display = "none";
        cpm_group.style.display = "none";
        wpm_group.style.display = "none";
      }
      
      function updateTimer() {
        if (timeLeft > 0) {
          timeLeft--;
          timeElapsed++;
          timer_text.textContent = timeLeft + "s";
        } else {
          finishGame();
        }
      }
      
      function finishGame() {
        clearInterval(timer);
        input_area.disabled = true;
        quote_text.textContent = "Click on restart to start a new game.";
        restart_btn.style.display = "block";
        let cpm = Math.round(((characterTyped / timeElapsed) * 60));
        let wpm = Math.round((((characterTyped / 5) / timeElapsed) * 60));
        cpm_text.textContent = cpm;
        wpm_text.textContent = wpm;
        cpm_group.style.display = "block";
        wpm_group.style.display = "block";
      }
      /*console.log("Game Started");
      console.log("Processing Current Text...");
      console.log("Resetting Values...");*/
      char.classList.remove('correct_char');
      errors++;
    }
  });

  error_text.textContent = total_errors + errors;
  let correctCharacters = (characterTyped - (total_errors + errors));
  let accuracyVal = ((correctCharacters / characterTyped) * 100);
  accuracy_text.textContent = Math.round(accuracyVal);

  if (curr_input.length == current_quote.length) {
    updateQuote();
    total_errors += errors;
    input_area.value = "";
  }
}

function startGame() {
  resetValues();
  updateQuote();
  clearInterval(timer);
  timer = setInterval(updateTimer, 1000);
}

function resetValues() {
  timeLeft = TIME_LIMIT;
  timeElapsed = .30;
  errors = 0;
  total_errors = 0;
  accuracy = 0;
  characterTyped = 0;
  quoteNo = 0;
  input_area.disabled = false;
  input_area.value = "";
  quote_text.textContent = 'Click on the area below to start the game.';
  accuracy_text.textContent = 100;
  timer_text.textContent = timeLeft + 's';
  error_text.textContent = 0;
  restart_btn.style.display = "none";
  cpm_group.style.display = "none";
  wpm_group.style.display = "none";
}

function updateTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    timeElapsed++;
    timer_text.textContent = timeLeft + "s";
  } else {
    finishGame();
  }
}

function finishGame() {
  clearInterval(timer);
  input_area.disabled = true;
  quote_text.textContent = "Click on restart to start a new game.";
  restart_btn.style.display = "block";
  let cpm = Math.round(((characterTyped / timeElapsed) * 60));
  let wpm = Math.round((((characterTyped / 5) / timeElapsed) * 60));
  cpm_text.textContent = cpm;
  wpm_text.textContent = wpm;
  cpm_group.style.display = "block";
  wpm_group.style.display = "block";
}
/*console.log("Game Started");
console.log("Processing Current Text...");
console.log("Resetting Values...");*/