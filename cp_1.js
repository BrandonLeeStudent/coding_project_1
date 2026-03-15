const form = document.querySelector('form');

const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const commentsInput = document.querySelector('#comments');
const feedbackDisplay = document.querySelector('#feedback-display');

const charCount = document.createElement('p');
commentsInput.after(charCount);

commentsInput.addEventListener('input', () => {
  charCount.textContent = `Character Count: ${commentsInput.value.length}`;
});


const tooltip = document.createElement('div');
tooltip.style.position = 'absolute';
tooltip.style.background = '#333';
tooltip.style.color = '#fff';
tooltip.style.padding = '5px';
tooltip.style.borderRadius = '5px';
tooltip.style.display = 'none';
document.body.appendChild(tooltip);

function attachTooltip(el, text) {
  el.addEventListener('mouseover', (event) => {
    tooltip.textContent = text;
    tooltip.style.left = `${event.pageX}px`;
    tooltip.style.top = `${event.pageY}px`;
    tooltip.style.display = 'block';
  });
  el.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
  });
}

attachTooltip(usernameInput, 'Enter your username');
attachTooltip(emailInput, 'Enter your email address');
attachTooltip(commentsInput, 'Enter your comments or feedback');


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const comments = commentsInput.value.trim();

  if (username === '' || email === '' || comments === '') {
    alert('Please fill in all fields before submitting.');
    return;
  }

});

const entry = document.createElement("div");

feedbackDisplay.appendChild(entry);
form.reset();
charCount.textContent = 'Character Count: 0';

form.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    console.log('Form clicked');
});
document.body.addEventListener('click', () => {
    console.log('Body clicked');
});