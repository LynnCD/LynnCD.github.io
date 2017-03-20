var allOptions = document.getElementsByClassName('quiz-option');
for (var i = 0; i < allOptions.length; i++) {
    allOptions[i].addEventListener('click', quizSelection, false);
}

var choices = {};

function quizSelection() {
    var options = this.parentElement.getElementsByClassName('quiz-option');
    for (i = 0; i < options.length; i++) {
        options[i].classList.remove('selected')
    }
    this.classList.add('selected');

    var key = this.parentElement.attributes.question.value;
    choices[key] = this.attributes.choice.value;
}

var numQuestions = document.getElementsByClassName('quiz-question').length;

function calculateStyle() {
  var results = document.getElementById('quiz-results');

  if (Object.keys(choices).length < numQuestions) {
    results.classList.add('invalid');
    results.innerHTML = "PLEASE ANSWER ALL QUESTIONS!!!";
    return;
  }
  results.classList.remove('invalid');

  if (choices["lamp"] == "4" && choices["bed"] == "2") {
    results.innerHTML = "YOU ARE CRAZY HIP!";
  }
  else if (choices["lamp"] == "3" && choices["bed"] == "1") {
    results.innerHTML = "YOUR STYLE IS TRANSITIONAL";
  }
  else if (choices["lamp"] == "1" && choices["bed"] == "2") {
    results.innerHTML = "YOUR STYLE IS MODERN";
  }
  else if (choices["lamp"] == "2" && choices["bed"] == "1") {
    results.innerHTML = "YOUR STYLE IS ECLECTIC";
  }
  else {
    results.innerHTML = "YOU HAVE NO STYLE :(";
  }
}
