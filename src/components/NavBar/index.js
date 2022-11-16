import './index.css'

const NavBar = props => {
  const {score, highestScore, gameCondition} = props
  return (
    <nav className="nav-container">
      <div className="nav-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="logo-text">Emoji Game</h1>
      </div>
      {gameCondition && (
        <p className="nav-score-container">
          <p className="nav-score">Score: {score} </p>
          <p className="nav-score">Top Score: {highestScore} </p>
        </p>
      )}
    </nav>
  )
}

export default NavBar
