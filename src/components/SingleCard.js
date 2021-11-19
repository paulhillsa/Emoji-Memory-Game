import '../styles/SingleCard.css'

// Single card component - the individual card component

export default function SingleCard({card, handleChoice, flipped, disabled}) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
        if (card.matched) {
            return alert('You found a match!');
        }
    }

    return (
            <div className='card'> 
                {/*if flipped is true apply flipped class if not apply empty class */}
                <div className={flipped ? 'flipped' : ''}>
                    <img className='front' src={card.src} alt="card-front" />
                    <img 
                        className='back' 
                        src="./images/back.png" 
                        alt="card-back" 
                        onClick={handleClick}
                    />
                </div>
            </div>
    )
}
