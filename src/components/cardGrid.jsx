
import CardImg from "./card"

export default function CardInfo({allCards, onCardClick}){

    return (
        <div className="cardInfo">

            {allCards.map( (card) => {
               return < CardImg key={card.id} cards={card} onClick={() => onCardClick(card.id)} />
            })}

        </div>
    )

}