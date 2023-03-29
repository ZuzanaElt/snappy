import dino from "../../images/snappy-logo.png";
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
      <img className='front-card frontCard' src={card.src} alt='card front' />
      <img onClick={handleClick} className='back-card' src={dino} alt='card back' />
    </div>
  </div>
  );
}
