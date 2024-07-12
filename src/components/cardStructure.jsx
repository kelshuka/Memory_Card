
import CardInfo from "./cards"

export default function CardStructure({allCards, setAllCards}){
    return (
        <>
            <header>  
                <nav>
                    {/* <img className="footImg" src="./images/head.jpg" alt="" /> */}
                    <div className="heaDing">
                        <h1 id="heaDing" aria-labelledby="heaDing"> Cartoon Memory Card </h1>
                        <section id="screenScores" aria-describedby="screenScores">
                            <p>Score: </p>
                            <p>Best Score: </p>
                        </section>
                    </div>
                </nav>
            </header>

            <main>
                
                <CardInfo allCards={allCards} setAllCards = {setAllCards}/>

                <div className="allCards">
                    <section className="cards">
                        <img src="" alt="" />
                        <p></p>
                    </section>
                
                </div>
            
            
            </main>
        
        </>
    )
}