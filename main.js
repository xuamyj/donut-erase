var wordCount = document.getElementById('wordcount');
var msg = document.getElementById('msg');
var textBox = document.getElementById('words');
var commitButton = document.getElementById('commit');
var finishButton = document.getElementById('finish');

if(!localStorage.getItem('everythingSoFar')) {
  localStorage.setItem('everythingSoFar', ' ');
}

function commit() {
  msg.innerHTML = "commit";
  var everythingSoFar = localStorage.getItem('everythingSoFar') + ' ' + textBox.value
  localStorage.setItem('everythingSoFar', everythingSoFar);
  textBox.value = '';
  return false;
}

function finish() {
  msg.innerHTML = localStorage.getItem('everythingSoFar');
  localStorage.removeItem('everythingSoFar');
  return false;
}

commitButton.onclick = commit; // "commit"
finishButton.onclick = finish; // "finish"