import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard.js'


const cardImages = [
  {"src": "/images/img1.jpg"},
  {"src": "/images/img2.jpg"},
  {"src": "/images/img3.jpg"},
  {"src": "/images/img4.jpeg"},
  {"src": "/images/img5.jpg"},
  {"src": "/images/img6.jpg"}
]


function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  // shuffle the cards 
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))

    setCards(shuffledCards)
    setTurns(0)
  }

// handle a choice
const handleChoice = (card) => {
  choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  
}

//compare the two selected cards
useEffect (() => {
  if (choiceOne && choiceTwo) {

    if (choiceOne.src === choiceTwo.src) {
      console.log("the cards match")
      resetTurn()
    } else{
      console.log("the cards do not match")
    }
  }

}, [choiceOne, choiceTwo])


const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns + 1)
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
        />
        ))}

      </div>
  
    </div>
  );
}

export default App;
