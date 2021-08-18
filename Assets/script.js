const scores = JSON.parse(localStorage.getItem('scores')) ||[]


let questions = [{
  question: "A _______ is an operation which sends the latest changes of a source code to a repository",
  choices: ["promise", "declaration", "commit", "apply"],
  correct: ['incorrect', 'incorrect', 'correct', 'incorrect']

},
{
  question:"Which of the following Array methods will add a new element at the end of an array?",
  choices: ["pull()", "push()", "lift()", "addition()"],
  correct: ['incorrect', 'correct', 'incorrect', 'incorrect']
},
{
  question: "The _____ attribute specifies the path to an image.",
  choices: [`alt`, `img`, `pic`, 'src'],
  correct: ['incorrect', 'incorrect', 'incorrect', 'correct']
},
{
  question: "_____ is a variable that cannot be reassigned.",
  choices: ["var", "con", "let", "None of the above"],
  correct: ["incorrect","incorrect", "incorrect", "correct" ]
},
{
  question: "____ is the langauge we use to style an HTML document",
  choices: ["CBS", "CSS", "CNN", "CSPAN"],
  correct: ['incorrect', 'correct', 'incorrect', 'incorrect']
}]

let index = 0 
let correct = 0
let incorrect = 0
let percentage = 0
let timer = ''
let seconds = 60


const renderQuestion = (q) => {
  if(index<questions.length)
  {



  document.getElementById('questions').innerHTML = ''  
  const questionElem = document.createElement('div')
  questionElem.innerHTML = `
    <h1>${q.question}</h1>
        <div class="row">
          <div class="col-1 mt-5" style="display: flex; justify-content: center;">
            <button type="button" class="btn btn-primary ${q.correct[0]}">A</button>
          </div>
          <div class="col-10  mt-5">
           ${q.choices[0]}
          </div>
        </div>
        <div class="row">
          <div class="col-1  mt-5"style="display: flex; justify-content: center;" >
            <button type="button" class="btn btn-primary ${q.correct[1]}">B</button>
          </div>
          <div class="col-10 mt-5">
           ${q.choices[1]}
          </div>
        </div>
        <div class="row">
          <div class="col-1  mt-5" style="display: flex; justify-content: center;">
            <button type="button" class="btn btn-primary ${q.correct[2]}">C</button>
          </div>
          <div class="col-10 mt-5">
            ${q.choices[2]}
          </div>
        </div>
        <div class="row">
          <div class="col-1  mt-5" style="display: flex; justify-content: center;">
            <button type="button" class="btn btn-primary ${q.correct[3]}">D</button>
          </div>
          <div class="col-10  mt-5">
           ${q.choices[3]}
          </div>
        </div>
    `
    document.getElementById('questions').append(questionElem)
    index++
  }
  else{
    clearInterval(timer)
    let elapsedTime = document.getElementById('seconds').textContent
    document.getElementById('questions').innerHTML = ''
    const finalScore = document.createElement('div')
    percentage = ((correct / (correct + incorrect))* 100)
    finalScore.innerHTML = `
    <h1>Final Score</h1>
        <h2>Answers Correct: ${correct}</h2>
        <h2>Incorrect: ${incorrect}</h2>
        <h2>Percentage: ${percentage}%</h2>
        <h2>Time Left: ${elapsedTime} seconds</h2>
        <form>
          <div class="mb-3>
            <label for="initials" class="form-label text-white">Enter your initials here to record your score!</label>
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
      console.log(name)
      scores.push({ name, percentage, elapsedTime})

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
    document.getElementById('seconds').innerText = seconds
  }, 1000)
renderQuestion(questions[index])

})

document.addEventListener('click', event => {
  if(event.target.classList.contains('correct'))
  {
    event.target.classList.add('green')
    correct++
    alert(`That's the right answer!`)
    renderQuestion(questions[index])

  }
  else if(event.target.classList.contains('incorrect')){
    event.target.classList.add('red')
    incorrect++
    seconds-=5
    alert('Wrong answer! 5 seconds off!')
    renderQuestion(questions[index])
  }
})
