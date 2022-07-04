const howToUseButton = document.getElementById('how-to-use-button');
const howToUse = document.getElementById('how-to-use');
const gotItButton = document.getElementById('how-to-use-got-it');

let isHowToUseActive = false;

howToUseButton.addEventListener('click', () => {
    howToUse.style.display = "block";
});

gotItButton.addEventListener('click', () => {
  howToUse.style.display = "none";
});
