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

text1 = document.getElementById('text1');
text2 = document.getElementById('text2');

function loadTextInput () {
  textInputWindow.style.display = 'none';

  text1.innerText = textInputTextArea.value;
  text2.innerText = textInputTextArea.value;

  textInputTextArea.value = '';
}