var wordCount = document.getElementById('wordcount');
var status = document.getElementById('status');
var commitButton = document.getElementById('commit');
var finishButton = document.getElementById('finish');

function updateStatus(statusMessage) {
  status.text(statusMessage);
}

commitButton.onclick = updateStatus; // "commit"
finishButton.onclick = updateStatus; // "finish"