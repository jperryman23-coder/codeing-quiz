<div id = "quiz"></div>
<button id = "Submit"></button>
<div id = "results"></div>

const quizContainer = document.getElementById('quiz')
const resultContainer= document.getElementById('results')
const submitContainer = document.getElementById('submit')

function buildQuiz(){}
function showResults(){}

buildQuiz();

submitButton.addEventListener('click', showResults);

const myQuestions = [
    {
        question: "Which is better iPhone or Android",
        answer: {
            a: 'iPhone'
            b: 'Android'
            c: 'Both are fine right?'


        },

        correctAnswer:"c"
    
    
    },
    {
        question: "Does Broccoli taste better or Brusiel Sprouts",
        answer: {
            a: 'Broccoli'
            b: 'Brusiel Sprouts'
            c: 'Ew both are gross!'


        },

        correctAnswer:"c"
    
    
    },
    {
        question: "Which is faster the Rabbit or the Turtle",
        answer: {
            a: 'Rabbit'
            b: 'Turtle'
            c: 'Both?'
            
        },


        correctAnswer:"b"
    
    
    }
];

function buildQuiz(){
    
    const output = [];
  
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        
        const answers = [];
  
        
        for(letter in currentQuestion.answers){
  
          
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
    quizContainer.innerHTML = output.join('')
}

myQuestions.forEach( (currentQuestion, questionNumber)=>{

});



const answers = [];


for(letter in currentQuestion.answers){

  
  answers.push(
    `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
  );
}


output.push(
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
);

quizContainer.innerHTML = output.join('');

function showResults(){

    
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    
    let numCorrect = 0;
  
    
    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      
      const answerContainer = answerContainers[questionNumber];
      const selector = 'input[name=question'+questionNumber+']:checked';
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      
      if(userAnswer===currentQuestion.correctAnswer){
        
        numCorrect++;
  
        
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      
      else{
        
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
  
    resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
  }
const answerConatiners = quizContainer.querySelectorAll('');
let numCorrect = 0

myQuestions.forEach( (currentQuestion, questionNumber) => {

    
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
    
    if(userAnswer===currentQuestion.correctAnswer){
      
      numCorrect++;
  
      
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    
    else{
      
      answerContainers[questionNumber].style.color = 'red';
    }
  });
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    
    
    





    


















