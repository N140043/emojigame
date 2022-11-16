import './index.css'

const EmojiCard = props => {
  const {
    emojisDetails: {id, emojiName, emojiUrl},
    updateScore,
  } = props

  const emojiTriggered = () => {
    updateScore(id)
  }
  return (
    <li className="single-emoji">
      <button type="button" className="emoji-btn" onClick={emojiTriggered}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
