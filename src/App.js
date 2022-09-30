import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard.js'


const cardImages = [
  {"src": "/images/img1.jpg", matched: false},
  {"src": "/images/img2.jpg", matched: false},
  {"src": "/images/img3.jpg", matched: false},
  {"src": "/images/img4.jpeg", matched: false},
  {"src": "/images/img5.jpg", matched: false},
  {"src": "/images/img6.jpg", matched: false}
]


function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  // shuffle the cards 
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }

// handle a choice
const handleChoice = (card) => {
  console.log(choiceOne?.id)
  if (card.id === choiceOne?.id) return;
  choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  
}

//compare the two selected cards
useEffect (() => {
  
  if (choiceOne && choiceTwo) {
      setDisabled(true)
    if (choiceOne.src === choiceTwo.src) {
      setCards(prevCards => {
        return prevCards.map(card => {
          if (card.src === choiceOne.src) {
            return {...card, matched:true}
          } else {
            return card
          }
        })
      })
      resetTurn()
    } else{
      
      setTimeout(() => resetTurn(), 1000)
    }
  }

}, [choiceOne, choiceTwo])

console.log(cards)

useEffect (() => {
  shuffleCards()
}, [])

const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns + 1)
  setDisabled(false)
}
   
  return (
    <div className="app">
     <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className='card-grid'>
        {cards.map(card => (
        <SingleCard 
        key={card.id} 
        card={card}
        handleChoice={handleChoice}
        flipped = {card === choiceOne || card === choiceTwo || card.matched}
        disabled = {disabled}
        />
        ))}

      </div>
      <p>Turns:{turns}</p>
    </div>
  );
}

export default App;
