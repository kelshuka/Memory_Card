
import { useEffect, useState } from 'react';
import './App.css'
import CardInfo from './components/cards';
import CardStructure from './components/cardStructure';



export default function CardApp(){

    const [allCards, setAllCards] = useState([]);

    const [cardId, setCardId] = useState([]);
    const [count, setCount] = useState(0);
    //const [bestScore, setBestScore] = useState(0);

    useEffect( () => { 

        async function cats(){
            try {  
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20',
                {mode: 'cors'});

                const response2 = await response.json();
                const response3 = response2.results.slice(0,12);
                
                const arrayAll = [];
                if (response3.length > 0) {
                    const newArray = await Promise.all(
                        response3.map(async (pokeman) => {
                            
                            const res1 = await fetch(pokeman.url)
                            const res2 = await res1.json();
                            const res3 = res2.sprites.front_default;
                            arrayAll.push(res3);
                            
                        })
                    );
                };

                const allCardLinks = [
                    {id: uuid(),serverUrl: arrayAll.at(0),},
                    {id: uuid(),serverUrl: arrayAll.at(1),},
                    {id: uuid(),serverUrl: arrayAll.at(2),},
                    {id: uuid(),serverUrl: arrayAll.at(3),},
                    {id: uuid(),serverUrl: arrayAll.at(4),},
                    {id: uuid(),serverUrl: arrayAll.at(5),},
                    {id: uuid(),serverUrl: arrayAll.at(6),},
                    {id: uuid(),serverUrl: arrayAll.at(7),},
                    {id: uuid(),serverUrl: arrayAll.at(8),},
                    {id: uuid(),serverUrl: arrayAll.at(9),},
                    {id: uuid(),serverUrl: arrayAll.at(10),},
                    {id: uuid(),serverUrl: arrayAll.at(11),},
                ]

                setAllCards(allCardLinks);
                return allCardLinks;
            } catch {new Error("OOPS! Something went wrong")};
            
        }; 
        cats();
    },[] );

    const shuffle = (array) => {
        for (let i = array.length -1; i>0; i--){
            let j = Math.floor(Math.random()* (i + 1));
            [ array[i] , array[j] ] = [ array[j] , array[i] ];
            return array;
        }
    };

    const handleClick = (e) => {

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
    }

    return (
        <>
            <CardInfo allCards={allCards} setAllCards = {setAllCards}/>
            <CardStructure allCards={allCards} setAllCards = {setAllCards} />
        </>
    )
}