//special thanks to Mohan Raj https://www.section.io/engineering-education/text-to-speech-in-javascript/

let speech = new SpeechSynthesisUtterance();

let voices = []; // global array of available voices

let voiceSelect = document.querySelector("#voices");

let isSpeaking = false;

window.speechSynthesis.onvoiceschanged = () => {
  // Get List of Voices
  voices = window.speechSynthesis.getVoices();

  // Initially set the First Voice in the Array.
  speech.voice = voices[0];

  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
  onLoadPage();
};

voiceSelect.addEventListener("change", () => {
  // On Voice change, use the value of the select menu (which is the index of the voice in the global voice array)
  speech.voice = voices[voiceSelect.value];
  localStorage.setItem('speechLang', voiceSelect.value);
});

text1 = document.getElementById('text1');
//languageInput = document.getElementById('language');

let text;
let textArray;
let currentText = 0;

document.querySelector("#talk").addEventListener("click", () => {
  
  isSpeaking = true;

  text = text1.innerText;

  text = text.replace(/\./g, ".*");
  text = text.replace(/\,/g, ",*");
  text = text.replace(/\!/g, "!*");
  text = text.replace(/\?/g, "?*");

  textArray = text.split(/\*/g);

  speech.text = textArray[currentText];
  currentText =+ 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
});

document.querySelector("#stopTalking").addEventListener("click", () => {
  isSpeaking = false;
  window.speechSynthesis.cancel();
});

speech.onend = function () {
  if (currentText < textArray.length && isSpeaking == true) {
    speech.text = textArray[currentText];

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