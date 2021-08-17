const scores = JSON.parse(localStorage.getItem('scores')) ||[]

const renderScores =() => {

  scores.forEach((key => {
    const scoreElem = document.createElement('div')

    scoreElem.innerHTML = `
            <div class="row mt-5">
              <div class="col">
                ${key.name}
                </div>
                <div class="col">
                  ${key.percentage}
                  </div>
                  <div class="col">
                    ${key.elapsedTime} seconds
                    </div>

                  </div>
                  </div>
  `
    document.getElementById('scores').append(scoreElem)
  })
}



renderScores()