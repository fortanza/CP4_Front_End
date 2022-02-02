import CardStyle from './style';

export default function Header() {
  // function flipCard() {
  //   card.classList.toggle('is-flipped');
  //   console.log('essai');
  // }
  return (
    <CardStyle>
      <div className="scene scene--card">
        <div className="card">
          <div className="card__face card__face--front">front</div>
          <div className="card__face card__face--back">back</div>
        </div>
      </div>
    </CardStyle>
  );
}
