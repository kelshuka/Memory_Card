
import CardInfo from "./cardGrid"

export default function ScoreBoard({counter, bestScore}){
    return (

        <div className="heaDing">
            <h1 id="heaDing" aria-labelledby="heaDing"> Cartoon Memory Card </h1>
            <section id="screenScores" aria-describedby="screenScores">
                <p> Current Score: {counter} </p>
                <p>Best Score: {bestScore} </p>
            </section>
        </div>

    )
}