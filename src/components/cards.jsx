

// import { useState, useEffect } from "react";


/* const shuffle = (array) => {
    for (let i = array.length -1; i>0; i--){
        let j = Math.floor(Math.random()* (i + 1));
        [ array[i] , array[j] ] = [ array[j] , array[i] ];
        return array;
    }
}; */

export default function CardInfo({allCards, setAllCards}){
    
    /* const [cardId, setCardId] = useState([]);
    const [count, setCount] = useState(0); */
    //const [bestScore, setBestScore] = useState(0);

    /* const handleClick = (e) => {

        if (!(cardId.indexOf(e.target.key) > -1)){
            setCardId(...cardId, e.target.key);
            setCount(count => count + 1);
        }

        useEffect( () => {
            if (!(cardId.indexOf(e.target.key) > -1)){
                setCardId(...cardId, e.target.key);            
                const shuffledCards = shuffle([...allCards]);
                setAllCards(shuffledCards);
                //setAllCards((currentCardBoard) => shuffle([...currentCardBoard]) );
            }
        }, []); 
         
        useEffect( () => {
            let bestScore = 0;
            if (!(cardId.indexOf(e.target.key) > -1)){
                setCount(count => count + 1);
            }

            bestScore = count;

            return () => {
                //setBestScore(count);
                setCount(count => 0);
            }
        } )
    } */



    return (
        <div>

            {allCards.map( (card) => {
                return <section key={card.id} onClick={handleClick}> <img src={card.serverUrl} alt='' /> </section>
            })}

        </div>
    )

}