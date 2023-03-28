import dino from "./dino.png";
import "../../scss/components/card.scss"

export default function Card({ card, handleChoice, flipped, inactive }) {

  const handleClick = () => {
    if (!inactive) {
      handleChoice(card)
    }
  }

  return (
    <div className='card' key={card.key}>
    <div className={flipped ? "flipped" : ""}>
      <img className='front-card' src={card.src} />
      <img onClick={handleClick} className='back-card' src={dino} />
    </div>
  </div>
  );
}
