const textInputWindow = document.getElementById('window');
const textInputTextArea = document.getElementById('textAreaTextInput')

const openTextInputButton = document.getElementById('openTextInput');
const cancelTextInputButton = document.getElementById('cancelTextInput');
const loadTextInputButton = document.getElementById('loadTextInput');

openTextInputButton.addEventListener('click', openTextInputWindow);
cancelTextInputButton.addEventListener('click', cancelTextInput);
loadTextInputButton.addEventListener('click', loadTextInput);

function openTextInputWindow() {
  textInputWindow.style.display = 'flex';
}

function cancelTextInput() {
  textInputWindow.style.display = 'none';
  textInputTextArea.value = '';
}

text1 = document.querySelector('#text1');
text2 = document.querySelector('#text2');

let allPs;

function loadTextInput () {
  textInputWindow.style.display = 'none';

  let text = textInputTextArea.value;
  let textArray;

  text = text.replace(/\./g, '.*');
  text = text.replace(/\,/g, ',*');
  text = text.replace(/\!/g, '!*');
  text = text.replace(/\?/g, '?*');

  textArray = text.split(/\*/g);

  allPs = document.getElementsByTagName('p');

  for (let index = allPs.length - 1; index >= 0; index--) {
    allPs[index].parentNode.removeChild(allPs[index]);
  }

  for (let index = 0; index < textArray.length; index++) {
    const p = document.createElement('p');
    p.innerText = textArray[index];
    p.addEventListener('mouseover', pMouseOver);
    p.addEventListener('mouseout', pMouseOut);
    p.addEventListener('click', pClick);
    text1.appendChild(p);

    const p2 = document.createElement('p');
    p2.innerText = textArray[index];
    p2.addEventListener('mouseover', pMouseOver);
    p2.addEventListener('mouseout', pMouseOut);
    text2.appendChild(p2);
  }

  allPs = document.getElementsByTagName('p');
  
  textInputTextArea.value = '';
}

function pMouseOver(event) {
  makeWhite(event);
}

function pMouseOut(event) {
  removeWhite(event);
}

function makeWhite(event) {
  var child = event.target;

  var parent = child.parentNode;

  var index = Array.prototype.indexOf.call(parent.children, child);

  text1.children[index].className = 'selected';
  text2.children[index].className = 'selected';
}


function removeWhite(event) {
  var child = event.target;

  var parent = child.parentNode;

  var index = Array.prototype.indexOf.call(parent.children, child);

  text1.children[index].className = '';
  text2.children[index].className = '';
}

function pClick(event) {
  speech.text = event.target.innerText;

  window.speechSynthesis.cancel();
  isSpeaking = false;
  window.speechSynthesis.speak(speech);
}

function clearP() {
  for (let index = 0; index < allPs.length; index++) {
    allPs[index].style.background = 'none';
  }
}
