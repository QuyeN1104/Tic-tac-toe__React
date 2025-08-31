import Card from './Card.jsx'

function Board() {
        const cards = Array(9).fill(null);
        return (
        <div className='grid grid-cols-3 gap-4 '>
            {cards.map((_, index) => (
                <Card key={index} />
            )) }
        </div>
    )
};

export default Board;