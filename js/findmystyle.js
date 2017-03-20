var allOptions = document.getElementsByClassName('quiz-option');
for (var i = 0; i < allOptions.length; i++) {
    allOptions[i].addEventListener('click', quizSelection, false);
}

var choices = new Map();

function quizSelection() {
    var options = this.parentElement.getElementsByClassName('quiz-option');
    for (i = 0; i < options.length; i++) {
        options[i].classList.remove('selected')
    }
    this.classList.add('selected');

    var key = this.parentElement.attributes.question.value;
    choices.set(key, this.attributes.choice.value);
}

var numQuestions = document.getElementsByClassName('quiz-question').length;

function calculateStyle() {
  if (choices.size < numQuestions) {
    alert("answer all the questions!");
    return;
  }

  var results = document.getElementById('quiz-results');
  if (choices.get("lamp") == "4" && choices.get("bed") == "2") {
    results.innerHTML = "YOU ARE CRAZY HIP!";
  }
  else {
    results.innerHTML = "CONGRATS";
  }
}
