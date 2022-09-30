import React from 'react'
import './SingleCard.css'


function SingleCard({ card, handleChoice, flipped, disabled }) {
  
  const handleClick = () => {
    if (!disabled) {
    handleChoice(card)
    }
  }

  return (
  <div className="card">
    <div className={flipped ? "flipped" : ""}>
      <img className='front' src={card.src} alt="front card" />
      <img 
      className='back' 
      src='/images/cover.jpg'
      onClick = {handleClick}
      alt="back card" 
      />
    </div>
  </div>
  )
}

export default SingleCard