import React, { useEffect, useState } from 'react'
import { Container, Button} from 'react-bootstrap'
import SingleCard from './SingleCard';

//Game component - the main component/logic of the game.

// Card images - array of objects with src and name
const cardImages = [
    { 'src': "/images/cowboy-1.png", matched: false },
    { 'src': "/images/halo-1.png", matched: false},
    { 'src': "/images/smiley-1.png", matched: false},
    { 'src': "/images/heart-eyes-1.png", matched: false },
    { 'src': "/images/star-struck-1.png", matched: false },
    { 'src': "/images/sunglasses-1.png", matched: false },
]

function Game() {

    // State variables
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);

    //Shuffle cards function - shuffles the cards array and sets the state
    const shuffleCards = () => {
        //spread card images twice so we have 12 total
        const shuffledCards = [...cardImages, ...cardImages]
            //gets random order of cards to shuffle array
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))
            
            setCards(shuffledCards);
            setTurns(0);
            setChoiceOne(null);
            setChoiceTwo(null);
    }

    //Handle choice of card
    const handleChoice = (card) => {
        //handle selection and either updating choiceOne or choiceTwo
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }

    //Compare two selected cards
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            // only make disabled true if both cards are selected
            setDisabled(true);
            if (choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) {
                            return { ...card, matched: true}
                        } else {
                            return card;
                        }
                })
            })
                resetTurn();
            } else {
                setTimeout(() => resetTurn(), 1000);
            }
        }  
        checkWin();
    }, [choiceOne, choiceTwo]);

    // Reset choices and increase turns counter
    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(prevTurns => prevTurns + 1);
        setDisabled(false);
    }

    // Start a new game when the page loads
    useEffect(() => {
        shuffleCards();
    }, []);


    //if every matched property is true, alert the user they won
    const checkWin = () => {
        let matchedCards = cards.filter(card => card.matched === true);
        if (matchedCards.length === 12) {
            setTimeout(alert('You win! 🥳 Press "Shuffle Cards" button if you want to play again!'), 1500);
        }
    }
    
    return (
      <Container fluid className='game'>
        <div className='game-header'>  
            <Button className='shuffle-button' onClick={shuffleCards}> Shuffle Cards </Button>
        </div> 
        <div className='card-grid'>
            {cards.map(card => 
                <SingleCard 
                    key={card.id} 
                    card={card}
                    handleChoice={handleChoice}
                    flipped={card === choiceOne || card === choiceTwo || card.matched}
                    disabled={disabled}
                />
            )}
        </div> 
        <div className='game-footer'>
            <p className='lead'> Turns: {turns}</p>
        </div>
        
      </Container>
    );
  }
  
export default Game

/*References:   This game was made initially by following along to Net Ninja's 'build a memory game with React' series:
                https://www.youtube.com/watch?v=ZCKohZwGZMw&list=PL4cUxeGkcC9iQ7g2eoNXHCJBBBz40S_Lm
                I have updated the code and added some additional features to the game,
                so as to comply with the requirements of the project.
                Enjoy!
*/