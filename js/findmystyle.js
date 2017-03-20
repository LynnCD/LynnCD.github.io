var allOptions = document.getElementsByClassName('quiz-option');
for (var i = 0; i < allOptions.length; i++) {
    allOptions[i].addEventListener('click', quizSelection, false);
}

var choices = JSON.parse(localStorage.getItem("choices")) || {};
for (var key in choices) {
  if (choices.hasOwnProperty(key)) {
    var question = document.querySelector('[question="' + key + '"]');
    var selected = question.querySelector('[choice="' + choices[key] + '"]');
    selected.classList.add('selected');
  }
}

var results = document.getElementById('quiz-results');
results.innerHTML = localStorage.getItem("results") || '';

function quizSelection() {
    var options = this.parentElement.getElementsByClassName('quiz-option');
    for (i = 0; i < options.length; i++) {
        options[i].classList.remove('selected')
    }
    this.classList.add('selected');

    var key = this.parentElement.attributes.question.value;
    choices[key] = this.attributes.choice.value;

    localStorage.setItem("choices", JSON.stringify(choices));
}

var numQuestions = document.getElementsByClassName('quiz-question').length;

function calculateStyle() {
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
    results.innerHTML = "YOUR STYLE IS TRADITIONAL!";
  }
  else if (choices["lamp"] == "1" && choices["bed"] == "2") {
    results.innerHTML = "YOUR STYLE IS MODERN!";
  }
  else if (choices["lamp"] == "2" && choices["bed"] == "1") {
    results.innerHTML = "YOUR STYLE IS ECLECTIC!";
  }
  else {
    results.innerHTML = "YOU HAVE NO SENSE STYLE...";
  }
  localStorage.setItem("results", results.innerHTML);
}
