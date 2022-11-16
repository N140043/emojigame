/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

let highestScore = 0
class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
  }

  updateEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  updateScoreOnClick = id => {
    this.setState(prev => ({
      clickedEmojisList: [...prev.clickedEmojisList, id],
    }))
  }

  checkGameCondition = () => {
    const {clickedEmojisList} = this.state
    const currentScore = clickedEmojisList.length
    const game = currentScore === new Set(clickedEmojisList).size
    if (game) {
      return [true, currentScore]
    }
    if (currentScore === 12) {
      return [false, currentScore]
    }
    return [false, currentScore - 1]
  }

  restartGame = () => {
    const {clickedEmojisList} = this.state
    const currentScore =
      clickedEmojisList.length === 12 ? 12 : clickedEmojisList.length - 1
    highestScore =
      currentScore > highestScore ? (highestScore = currentScore) : highestScore

    this.setState({clickedEmojisList: []})
  }

  render() {
    const [gameCondition, score] = this.checkGameCondition()
    // console.log(gameCondition, highestScore)

    const updatedEmojisList = this.updateEmojisList()
    return (
      <div className="emoji-game-bg-container">
        <NavBar
          score={score}
          highestScore={highestScore}
          gameCondition={gameCondition}
        />
        <div className="emoji-game-outer-container">
          {gameCondition ? (
            <ul className="emoji-game-main-container">
              {updatedEmojisList.map(each => (
                <EmojiCard
                  emojisDetails={each}
                  key={each.id}
                  updateScore={this.updateScoreOnClick}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard restartGame={this.restartGame} score={score} />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
