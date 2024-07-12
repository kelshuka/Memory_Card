
import { useEffect, useState, useCallback } from 'react';
import {v4 as uuid} from 'uuid';
import './App.css'
import CardInfo from './components/cardGrid';
import ScoreBoard from './components/scoreBoard';



export default function CardApp(){

    const [allCards, setAllCards] = useState([]);

    const [counter, setCounter] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const [shuffledCards, setShuffledCards] = useState([]);
    const [clickedCards, setClickedCards] = useState([]);

    useEffect( () => { 

        const pokemanImages = async () => {
             
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12",
            {mode: "cors"});

            const response2 = await response.json();
            
            const response3 = response2.results.map(async (pokeman) => {
                    
                    const res1 = await fetch(pokeman.url, {mode: "cors"});
                    const res2 = await res1.json();
                    return {
                        id: uuid(),
                        serverUrl: res2.sprites.front_default,
                        name: res2.name,
                    };                   
            });

            const cardArray = await Promise.all(response3);
            setAllCards(cardArray);           
        }; 
        pokemanImages();
    },[] );

    const makeShuffling = useCallback( () => {
        const shuffled = [...allCards].sort( () => Math.random() - 0.5);
        setShuffledCards(shuffled); 
    }, [allCards]);

    useEffect( () => {
        makeShuffling();
    }, [allCards, makeShuffling]);
    

    const handleClick = (cardId) => {
        if ( !(clickedCards.includes(cardId)) ){

            setClickedCards([...clickedCards,cardId]);
            setCounter(counter + 1);

        } else {
            if (counter > bestScore) {
                setBestScore(counter);
            }
            setCounter(0);
            setClickedCards([]);
            makeShuffling();
        }
        makeShuffling();
    };

    return (
        <>
            <ScoreBoard counter={counter} bestScore = {bestScore} />
            <CardInfo allCards={shuffledCards} onCardClick={handleClick} />
        </>
    )
}