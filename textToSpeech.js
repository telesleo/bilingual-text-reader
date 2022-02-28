//special thanks to Mohan Raj https://www.section.io/engineering-education/text-to-speech-in-javascript/

let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("#voices");

let isSpeaking = false;

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();

  speech.voice = voices[0];

  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
  onLoadPage();
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
  localStorage.setItem('speechLang', voiceSelect.value);
});

text1 = document.getElementById('text1');

let text;
let textArray = [];
let currentText = 0;

document.querySelector("#talk").addEventListener("click", () => {
  isSpeaking = true;
  currentText = 0;

  for (let index = 0; index < (allPs.length - 1) / 2; index++) {
    textArray[index] = allPs[index];
  }

  speech.text = textArray[currentText].innerText;
  currentText =+ 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
});

document.querySelector("#stopTalking").addEventListener("click", () => {
  isSpeaking = false;
  window.speechSynthesis.cancel();
});

speech.onend = function () {
  console.log(currentText + ' e ' + textArray.length);
  if (currentText < textArray.length && isSpeaking == true) {
    speech.text = textArray[currentText].innerText;

    currentText += 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  }
}

function onLoadPage() {
  if(localStorage.getItem('speechLang') != null) {
    const initialLanguage = localStorage.getItem('speechLang');
    speech.voice = voices[initialLanguage];
    voiceSelect.options[initialLanguage].selected = 'selected'
  }
}
