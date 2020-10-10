const startButtom = document.getElementBtId('sart-btn')
const nextButton = document.getItemById('next-btn')
const questionContainerElement = document.getItemById('question-container')
const questionElement = document.getItemById('question')
const answerButtonsElement = document.getElementById ('anwer-buttons')

let shuffledQuestions, currentQuesstionIndex

startButtom.addEventListener('click', startGame)
nextButton.addEventListener('click', ()=> {
    currentQuestionIndex++
    setNextQuestions()
})

function startGame () {
    console.log('started')
    startButtom.classList.add('hide')
    shuffledQuestions = questions.questions.sort(()=> Math.random()-, .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

Function show
function showQuestion(question) {
  questionContainerElement.innerText = question.question
  questions.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('bth')
      if (answer.correct) {
          button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
  })
}
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild)

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.datast.correct
    setSatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setSatusClass(button, button.dataset.correct)
    })
    if (shiffledQuestions.length > currentQuestionIndex + 1) {}
    nextButton.classList.remove('hide')
} else{
    startButtom.innerText = 'Restart'
    startButtom.classList.remove('hide')
}

function setSatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
       element.classList.add('correct')
    }  else {
       element.classList.add('wrong')
        } 
}
const question = [
    {
        question: 'What is an array',
        answers: [
            {text: 'Collection of variables', correct: true},
            {text: 'Quick expression'}
            {text: ' Nouns of programming'}
            {text: 'Alert'}
        ]
    
    }
