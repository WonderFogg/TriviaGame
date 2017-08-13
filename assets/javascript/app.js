
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');



// follow layout sitepoint need one to build and one for results 
function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

const myQuestions = [
{
	question: "Q111111111111111?",
	answers: {
		a: "AAAAAAAAAA",
		b: "BBBBBBBBBB",
		c: "CCCCCCCCCC",
		d: "DDDDDDDDDD",
	},
	correctAnswer: "b"
},     
{   question: "Q2222222222222222?",
    answers: {
      a: "aaaaaaaaaa",
      b: "bbbbbbbbbbb",
      c: "cccccccc",
      d: "dddddddd",
    },
    correctAnswer: "c"
  },
  {
    question: "q3333333333333333?",
    answers: {
      a: "aaaaaaaaaa",
      b: "bbbbbbbbbbb",
      c: "cccccccc",
      d: "dddddddd",
    },
    correctAnswer: "d"
  }

  ];

// MORE QUESTIONS // 
// MORE QUESTIONS // 
// MORE QUESTIONS // 
// MORE QUESTIONS // 
// MORE QUESTIONS // 
// MORE QUESTIONS // 
// MORE QUESTIONS // 
// MORE QUESTIONS // 
// MORE QUESTIONS // 
// MORE QUESTIONS // 
// MORE QUESTIONS // 
// MORE QUESTIONS // 
// MORE QUESTIONS // 
// MORE QUESTIONS // 
// MORE QUESTIONS // 
// MORE QUESTIONS // 



function buildQuiz(){
  // we'll need a place to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}



]