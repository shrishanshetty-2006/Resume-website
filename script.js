const textDisplay = document.getElementById('textDisplay');
const targetText = "Combines technical proficiency with strong problem-solving skills and a passion for innovation to improve customer service and optimize processes.";
let typedText = "";

// 1. Initialize typing matrix spans layout
function initializeTest() {
  textDisplay.innerHTML = '';
  targetText.split('').forEach(char => {
    const span = document.createElement('span');
    span.innerText = char;
    span.classList.add('untyped');
    textDisplay.appendChild(span);
  });
}

// 2. Full Viewport Keydown Listener Array Capture Matrix
window.addEventListener('keydown', (e) => {
  // Prevent default browser scrolling actions on spacebar keydown execution
  if (e.key === ' ' && e.target === document.body) {
    e.preventDefault();
  }

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

// 4. Dynamic Component Layer State Panel Toggle Controller
function toggleSection(sectionId) {
  const sections = ['education', 'achievements', 'hobbies', 'personal'];
  const targetElement = document.getElementById(sectionId);
  
  // Find all buttons to track state parameters
  const buttons = document.querySelectorAll('.toggle-btn');
  
  sections.forEach((id, index) => {
    const el = document.getElementById(id);
    if (id === sectionId) {
      if (el.style.display === 'block') {
        el.style.display = 'none';
        buttons[index].classList.remove('active-panel');
      } else {
        el.style.display = 'block';
        buttons[index].classList.add('active-panel');
      }
    } else {
      el.style.display = 'none';
      const fallbackBtn = document.querySelector(`button[onclick="toggleSection('${id}')"]`);
      if(fallbackBtn) fallbackBtn.classList.remove('active-panel');
    }
  });
}

// Run real-time initialization loop sequence hooks
initializeTest();