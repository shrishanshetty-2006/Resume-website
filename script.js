const textDisplay = document.getElementById('textDisplay');
const targetText = "Combines technical proficiency with strong problem-solving skills and a passion for innovation to improve customer service and optimize processes.";
let typedText = "";

// 1. Initialize typing layout spans
function initializeTest() {
  textDisplay.innerHTML = '';
  targetText.split('').forEach(char => {
    const span = document.createElement('span');
    span.innerText = char;
    span.classList.add('untyped');
    textDisplay.appendChild(span);
  });
}

// 2. Global Event Listener for Background Keyboard Processing
window.addEventListener('keydown', (e) => {
  if (e.key.length > 1 && e.key !== 'Backspace') return;

  const arrayQuote = textDisplay.querySelectorAll('span');

  if (e.key === 'Backspace') {
    typedText = typedText.slice(0, -1);
  } else {
    if (typedText.length < targetText.length) {
      typedText += e.key;
    }
  }

  arrayQuote.forEach((characterSpan, index) => {
    const character = typedText[index];
    if (character == null) {
      characterSpan.className = 'untyped';
    } else if (character === characterSpan.innerText) {
      characterSpan.className = 'correct';
    } else {
      characterSpan.className = 'incorrect';
    }
  });
});

// 3. Section Toggle Controller Logic (Includes Education Tracking)
function toggleSection(sectionId) {
  const sections = ['education', 'achievements', 'hobbies', 'personal'];
  
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (id === sectionId) {
      if (el.style.display === 'block') {
        el.style.display = 'none';
      } else {
        el.style.display = 'block';
      }
    } else {
      document.getElementById(id).style.display = 'none';
    }
  });
}

// Run engine initialization
initializeTest();