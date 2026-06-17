const textDisplay = document.getElementById('textDisplay');
const textInput = document.getElementById('textInput');
const fontSelect = document.getElementById('fontSelect');

const targetText = "The quick brown fox jumps over the lazy dog.";

// Load text into spans
function initializeTest() {
  textDisplay.innerHTML = '';
  targetText.split('').forEach(char => {
    const span = document.createElement('span');
    span.innerText = char;
    span.classList.add('untyped');
    textDisplay.appendChild(span);
  });
}

// Compare Input text for live color updates
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

// Dynamic Font Changer Switcher
fontSelect.addEventListener('change', (e) => {
  document.body.style.fontFamily = e.target.value;
});

// Run on start
initializeTest();