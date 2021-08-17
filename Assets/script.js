const scores = JSON.parse(localStorage.getItem('scores')) ||[]


let questions = [{
  question: "_______ is the process of finding errors and fixing them within a program.",
  choices: ["Debugging", "Executing", "Compiling", "Scanning"],
  correct: ['correct', 'incorrect', 'incorrect', 'incorrect']

}
,
{
  question:"Which of the following loops will execute the body of a loop even when the condition controlling the loop is initially false?",
  choices: ["none of them", "for", "do-while", "while"],
  correct: ['incorrect', 'incorrect', 'correct', 'incorrect']
},
{
  question: "Which of the following operators can operate on a boolean variable?",
  choices: ['1,2, & 4', '3 & 2', '1, & 4', '1,2 & 3'],
  correct: ['incorrect', 'incorrect', 'incorrect', 'correct']
},
{
  question: "Which built-in method calls a function for each element in the array?",
  choices: ["forEach()", "loop", "while()", "None of the above"],
  correct: ["correct","incorrect", "incorrect", "incorrect" ]
},
{
  question: "Which of the following function of Array ojects adds on or more elements to the front of an array and returns the new length of the array?",
  choices: ["upshift()", "sort", "splice", "toString()"],
  correct: ['correct', 'incorrect', 'incorrect', 'incorrect']
}]

let index = 0 
let correct = 0
let incorrect = 0
let percentage = 0
let timer = ''
let seconds = 100


const renderQuestion = (q) => {
  if(index<questions.length)
  {


  document.getElementById('questions').innerHTML = ''  
  const questionElem = document.createAttribute.getElementById('div')
  questionElem.innerHTML = `
  <h1>${q.question}</h>
    <div class="row>
      <div class="col-1 mt-5" style="display: flex;justify-content: center;">
        <button type="button" class="btn btn-primary ${q.correct[0]}">A</button>
      </div>
      <div class="col-1 mt-5">
      ${q.choices[0]}
      </div>
    </div>
    <div class="row">
      <div class="col-1 mt-5"style="display: flex; justify content: center;">
        <button type="button" class="btn btn-primary ${q.correct[1]}">B</button>
      </div>
      <div class="col-10 mt-5">
      ${q.choices[1]}
      </div>
    </div>
    <div class="row">
      <div class="col-1 mt-5" style="display: flex; justify-content: center;">
        <button type="button" class="btn btn-primary ${q.correct[2]}">C</button>
      </div>
      <div class="col-10 mt-5">
        ${q.choices[2]}
      </div>
    </div>
    <div class="row">
      <div class="col-1 mt-5" style="display: flex; justify-content: center;">
        <button type="button" class="btn btn-primary ${q.correct[3]}">C</button>
      </div>
      <div class="col-10 mt-5">
        ${q.choices[3]}
      </div>
    </div>

    `
    document.getElementById('questions').append(questionElem)
    index++
  }
  else{
    clearInterval(timer)
    let elpasedTime = document.getElementById('seconds').textContent
    document.getElementById('questions').innerHTML = ''
    const finalScore = document.createElement('div')
    percentage = correct / (correct + incorrect)
    finalScore.innerHTML = `
    <h1>Final Score</h1>
        <h2>Answers Correct: ${correct}</h2>
        <h2>Incorrect: ${incorrect}</h2>
        <h2>Percentage: ${percentage}</h2>
        <h2>Elapsed Time: ${elapsedTime}</h2>
        <form>
          <div class="mb-3>
            <label for="initials" class="form-label text-white>Enter your initials here to record your score!</label>
            <input id="initials" type="text" class="form-control" style="width:25%">
          </div>
          <button id="highScore" type="submit" class="btn btn-primary">Submit</button>
        </form>
    `
    document.getElementById('questions').append(finalScore)
    document.getElementById('highScore').addEventListener('click', event => {
      event.preventDefault()
      console.log('caught')
      let name = document.getElementById('initials').value
      console.log('name')
      scores.push({name, percentage, elpasedTime})

      localStorage.setItem('scores', JSON.stringify(scores))
      location.reload();






      alert("Score added!")
    })

  }
}


document.getElementById('start').addEventListener('click', event => {
  index=0
  timer = setInterval(() => {
    seconds--
    document.getElementById('second').innerText = seconds
  }, 1000)
renderQuestion(question[index])

})

document.addEventListener('click', event => {
  if(event.target.classList.contains('correct'))
  {
    event.target.classList.add('green')
    correct++
    alert('You got this one right!')
    renderQuestion(questions[index])

  }
  else if(event.target.classList.contains('incorrect')){
    event.target.classList.add('red')
    incorrect++
    alert('You got this one wrong!')
    renderQuestion(question[index])
  }
})
