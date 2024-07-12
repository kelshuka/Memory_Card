
export default function CardImg({cards, onClick}){
    return (
        <div className="cardImg" onClick={onClick}>
            <img src={cards.serverUrl} alt={cards.name}  />
            <p>{cards.name}</p>
        </div>
    );
}