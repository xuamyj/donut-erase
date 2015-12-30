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
    }
},false);

if(!localStorage.getItem('everythingSoFar')) {
  localStorage.setItem('everythingSoFar', ' ');
}

function commit() {
  msg.innerHTML = "commit";
  var everythingSoFar = localStorage.getItem('everythingSoFar') + ' ' + textBox.value
  localStorage.setItem('everythingSoFar', everythingSoFar);
  textBox.value = '';
  console.log(everythingSoFar)
  return false;
}

function finish() {
  msg.innerHTML = localStorage.getItem('everythingSoFar');
  localStorage.removeItem('everythingSoFar');
  return false;
}

commitButton.onclick = commit; // "commit"
finishButton.onclick = finish; // "finish"