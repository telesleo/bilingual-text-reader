const textInputWindow = document.getElementById('window');
const textInputTextArea = document.getElementById('textAreaTextInput')

textInputTextArea.value = "Je m’appelle Jessica. Je suis une fille, je suis française et j’ai treize ans. Je vais à l’école à Nice, mais j’habite à Cagnes-Sur-Mer. J’ai deux frères. Le premier s’appelle Thomas, il a quatorze ans. Le second s’appelle Yann et il a neuf ans. Mon papa est italien et il est fleuriste. Ma mère est allemande et est avocate. Mes frères et moi parlons français, italien et allemand à la maison. Nous avons une grande maison avec un chien, un poisson et deux chats. \n\n Aujourd’hui, on est samedi, nous rendons visite à notre grand-mère. Elle a 84 ans et elle habite à Antibes. J’adore ma grand-mère, elle est très gentille. Elle fait des bons gâteaux. \n\n Lundi, je retourne à l’école. Je suis contente, je vais voir Amélie. C’est ma meilleure amie. J’aime beaucoup l’école. Mes matières préférées sont le français et le sport. J’aime beaucoup lire et je nage très bien."

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

  text1.children[index].style.background = 'rgb(90, 90, 90)';
  text2.children[index].style.background = 'rgb(90, 90, 90)';
}


function removeWhite(event) {
  var child = event.target;

  var parent = child.parentNode;

  var index = Array.prototype.indexOf.call(parent.children, child);

  text1.children[index].style.background = 'none';
  text2.children[index].style.background = 'none';
}

function pClick(event) {
  speech.text = event.target.innerText;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
}

function clearP() {
  for (let index = 0; index < allPs.length; index++) {
    allPs[index].style.background = 'none';
  }
}
