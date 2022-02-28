//special thanks to Mohan Raj https://www.section.io/engineering-education/text-to-speech-in-javascript/

let speech = new SpeechSynthesisUtterance();

speech.lang = "en";

let voices = []; // global array of available voices

let voiceSelect = document.querySelector("#voices");

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

document.querySelector("#talk").addEventListener("click", () => {
  speech.text = text1.innerText;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
});

document.querySelector("#stopTalking").addEventListener("click", () => {
  window.speechSynthesis.cancel();
});

//window.onload = onLoadPage;

function onLoadPage() {
  if(localStorage.getItem('speechLang') != null) {
    const initialLanguage = localStorage.getItem('speechLang');
    speech.lang = voices[initialLanguage];
    voiceSelect.options[initialLanguage].selected = 'selected'
  }
}