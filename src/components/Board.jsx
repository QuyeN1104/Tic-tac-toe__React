import { useState, useEffect } from 'react';
import Card from './Card.jsx';

const logicGame = (cards) => {
    // Check win
    for(let i = 0; i < 3; i++){
        if(cards[3*i] && cards[3*i+1] && cards[3*i + 2]){
            if(cards[3*i] == cards[3*i+1] && cards[3*i+1] == cards[3*i + 2]){
                return 1;
            }
        }

        if(cards[i] && cards[i+3] && cards[i + 6]){
            if(cards[i] == cards[i+3] && cards[i+3] == cards[i + 6]){
                return 1;
            }
        }

    }
    if(cards[0] && cards[4] && cards[8] && 
    cards[0] == cards[4] && cards[4] == cards[8]){
        return 1;
    }

    
    if(cards[2] && cards[4] && cards[6] && 
    cards[2] == cards[4] && cards[4] == cards[6]){
        return 1;
    }

    // Check tie
    if (cards.every(Boolean)) return 0; 

    return -1; // Not ending
}

function Board() {
        const [cards, setCards] = useState(Array(9).fill(null))
        const [value, setValue] = useState(0)
        const handleCardClick = (index) => {
            if(cards[index]){
                return;
            }

            const newCards = [...cards]
            
            newCards[index] = value ? 'X' : 'O'
            if(logicGame(cards) == 1){
                console.log(value, 'win')
                return;
            } else if(logicGame(cards) == 0){
                console.log('draw')
                return;
            }
            setCards(newCards)

        };
        useEffect(()=>{
            setValue(value^1);
        }, cards)
        return (
        <div className='grid grid-cols-3 gap-4 '>
            {cards.map((value,index ) => (
                <Card key={index}
                      value={value}
                      onClick = {()=>handleCardClick(index)} />
            )) }
        </div>
    )
};

export default Board;