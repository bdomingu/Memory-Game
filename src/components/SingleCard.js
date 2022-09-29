import React from 'react'
import './SingleCard.css'


function SingleCard({ card, handleChoice }) {
  
  const handleClick = () => {
    handleChoice(card)
  }

  return (
  <div className="card">
    <div>
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