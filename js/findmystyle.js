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
  var results = document.getElementById('quiz-results');

  if (choices.size < numQuestions) {
    results.classList.add('invalid');
    results.innerHTML = "PLEASE ANSWER ALL QUESTIONS!!!";
    return;
  }
  results.classList.remove('invalid');

  if (choices.get("lamp") == "4" && choices.get("bed") == "2") {
    results.innerHTML = "YOU ARE CRAZY HIP!";
  }
  else if (choices.get("lamp") == "3" && choices.get("bed") == "1") {
    results.innerHTML = "YOUR STYLE IS TRANSITIONAL";
  }
  else if (choices.get("lamp") == "1" && choices.get("bed") == "2") {
    results.innerHTML = "YOUR STYLE IS MODERN";
  }
  else if (choices.get("lamp") == "2" && choices.get("bed") == "1") {
    results.innerHTML = "YOUR STYLE IS ECLECTIC";
  }
  else {
    results.innerHTML = "YOU HAVE NO STYLE :(";
  }
}
