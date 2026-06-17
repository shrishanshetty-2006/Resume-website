const textDisplay = document.getElementById('textDisplay');
const textInput = document.getElementById('textInput');
const fontSelect = document.getElementById('fontSelect');

// Dynamic quote engine content loop
const targetText = "Combines technical proficiency with strong problem-solving skills and a passion for innovation to improve customer service and optimize processes.";

// Initialize the spans
function initializeTest() {
  textDisplay.innerHTML = '';
  targetText.split('').forEach(char => {
    const span = document.createElement('span');
    span.innerText = char;
    span.classList.add('untyped');
    textDisplay.appendChild(span);
  });
}

// Color matching evaluation mechanics
textInput.addEventListener('input', () => {
  const arrayQuote = textDisplay.querySelectorAll('span');
  const arrayValue = textInput.value.split('');

  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index];
    if (character == null) {
      characterSpan.className = 'untyped';
    } else if (character === characterSpan.innerText) {
      characterSpan.className = 'correct';
    } else {
      characterSpan.className = 'incorrect';
    }
  });
});

// Dynamic typography global switch listener
fontSelect.addEventListener('change', (e) => {
  document.body.style.fontFamily = e.target.value;
});

// Run engine initialization
initializeTest();