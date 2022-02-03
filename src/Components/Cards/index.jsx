import { useState } from 'react';
import CardStyle from './style';

export default function UserCard() {
  const [clicked, setClicked] = useState(false);
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setClicked(!clicked);
    }
  };
  const handleClick = () => {
    setClicked(!clicked);
  };
  let flipClass;
  if (clicked) {
    flipClass = 'card.is-flipped';
  } else {
    flipClass = 'base-state';
  }
  return (
    <CardStyle>
      <>
        <div className="scene scene--card">
          <button
            onClick={handleClick}
            className={`${flipClass}`}
            onKeyPress={handleKeyPress}
            type="button"
          >
            <div className="card__face card__face--front">front</div>
            <div className="card__face card__face--back">back</div>
          </button>
        </div>
      </>
    </CardStyle>
  );
}
