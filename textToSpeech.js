//thanks to Mohan Raj https://www.section.io/engineering-education/text-to-speech-in-javascript/

let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("#languages");

let isSpeaking = false;

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();

  speech.voice = voices[0];

  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
  onLoadPage();
};

let listenButton = document.getElementById('listen');

function onListenClick() {
  if (isSpeaking) {
    stopSpeaking();
  } else {
    startSpeaking();
  }
}
document.querySelector("#listen").addEventListener("click", onListenClick);

text1 = document.getElementById('text1');

let text;
let textArray = [];
let currentText = 0;

function startSpeaking() {
  isSpeaking = true;
  listenButton.innerText = "Stop";

  currentText = 0;

  for (let index = 0; index < (allPs.length - 1) / 2; index++) {
    textArray[index] = allPs[index];
  }

  speech.text = textArray[currentText].innerText;
  currentText = + 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
}

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
  localStorage.setItem('speechLang', voiceSelect.value);
});

function stopSpeaking() {
  isSpeaking = false;
  listenButton.innerText = "Listen";
  window.speechSynthesis.cancel();
}

speech.onend = function () {
  if (currentText < textArray.length && isSpeaking == true) {
    speech.text = textArray[currentText].innerText;

    currentText += 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  } else {
    stopSpeaking();
  }
}

function onLoadPage() {
  if(localStorage.getItem('speechLang') != null) {
    const initialLanguage = localStorage.getItem('speechLang');
    speech.voice = voices[initialLanguage];
    voiceSelect.options[initialLanguage].selected = 'selected'
  }
}
