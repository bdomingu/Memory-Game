import { useEffect, useState } from 'react';
import SingleCard from './SingleCard';
import { useChannelStateContext } from 'stream-chat-react';

const cardImages = [
    {"src": "/images/img1.jpg", matched: false},
    {"src": "/images/img2.jpg", matched: false},
    {"src": "/images/img3.jpg", matched: false},
    {"src": "/images/img4.jpeg", matched: false},
    {"src": "/images/img5.jpg", matched: false},
    {"src": "/images/img6.jpg", matched: false}
  ]

function Board() {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [player, setPlayer] = useState('1')
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disabled, setDisabled] = useState(false)

    const {channel} = useChannelStateContext();

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
     if (card.id === choiceOne?.id) return;
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
      console.log(player)
      
    }
   
    
    //compare the two selected cards
    useEffect (() => {
      
      if (choiceOne && choiceTwo) {
        switchPlayers()
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
    
  useEffect (() => {
      shuffleCards()
  }, [])
    
  const resetTurn = () => {
      setChoiceOne(null)
      setChoiceTwo(null)
      setTurns(prevTurns => prevTurns + 1)
      setDisabled(false)
  }

  //switches the state between player 1 and 2 but does not speak to both games. Need to figure out how
  //have it speak to both. Have to do the await channel.
  const switchPlayers = () => {
    if (choiceOne && choiceTwo) {
    setPlayer(player === '1' ? '2' : '1');
    console.log(player)
    }
    
    
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
  )
}

export default Board


  