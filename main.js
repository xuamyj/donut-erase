var wordCount = document.getElementById('wordcount');
var msg = document.getElementById('msg');
var textBox = document.getElementById('words');
var commitButton = document.getElementById('commit');
var finishButton = document.getElementById('finish');

// source: http://stackoverflow.com/questions/6140632/how-to-handle-tab-in-textarea
document.querySelector("textarea").addEventListener('keydown',function(e) {
  if(e.keyCode === 9) { // tab was pressed
    // get caret position/selection
    var start = this.selectionStart;
    var end = this.selectionEnd;

    var target = e.target;
    var value = target.value;

    // set textarea value to: text before caret + tab + text after caret
    target.value = value.substring(0, start)
                + "\t"
                + value.substring(end);

    // put caret at right position again (add one for the tab)
    this.selectionStart = this.selectionEnd = start + 1;

    // prevent the focus lose
    e.preventDefault();

  // added to catch enters
  } else if (e.keyCode === 13 && e.shiftKey) {
    commit();
    e.preventDefault();
  }
},false);

// source: http://stackoverflow.com/questions/18679576/counting-words-in-string
function countWords(s){
  s = s.replace(/\t/gi, " ");
  s = s.replace(/(^\s*)|(\s*$)/gi,""); //exclude  start and end white-space
  s = s.replace(/[ ]{2,}/gi," "); //2 or more space to 1
  s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
  return s.split(' ').length;
}

if(!localStorage.getItem('everythingSoFar')) {
  localStorage.setItem('everythingSoFar', ' ');
}

function commit() {
  msg.innerHTML = 'yay :)';
  var everythingSoFar = localStorage.getItem('everythingSoFar') + ' ' + textBox.value
  localStorage.setItem('everythingSoFar', everythingSoFar);
  textBox.value = '';
  wordCount.innerHTML = 'word count: ' + countWords(everythingSoFar);
  return false;
}

function finish() {
  msg.innerHTML = localStorage.getItem('everythingSoFar');
  localStorage.setItem('everythingSoFar', ' ');
  wordCount.innerHTML = 'word count: 0';
  return false;
}

commitButton.onclick = commit; // "commit"
finishButton.onclick = finish; // "finish"

