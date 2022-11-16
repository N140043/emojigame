import './index.css'

const WinOrLoseCard = props => {
  const {restartGame, score} = props
  const resultText = score < 12 ? 'You Lose' : 'You Won'
  const resultScoreText = score < 12 ? 'Score' : 'Best Score'
  const imageUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const playAgainGame = () => {
    restartGame()
  }
  return (
    <div className="game-result-container">
      <div className="game-text-container">
        <h1 className="result-heading">{resultText}</h1>
        <p className="result-para">{resultScoreText}</p>
        <p className="result-para result">{score}/12</p>
        <button
          type="button"
          className="play-again-btn"
          onClick={playAgainGame}
        >
          Play Again
        </button>
      </div>
      <img src={imageUrl} alt="win or lose" className="result-image" />
    </div>
  )
}

export default WinOrLoseCard
