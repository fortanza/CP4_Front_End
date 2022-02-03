import PropTypes from 'prop-types';
import { useState } from 'react';
import CardStyle from './style';

export default function UserCard({ firstName, lastName, photo }) {
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
    flipClass = 'card is-flipped';
  } else {
    flipClass = 'card';
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
            <div className="card__face card__face--front">
              <img className="img-student" src={photo} alt="Benoit" />
              <p>
                {firstName} {lastName}
              </p>
            </div>
            <div className="card__face card__face--back">
              <a href="https://www.google.com/" className="myButton">
                En savoir plus
              </a>
            </div>
          </button>
        </div>
      </>
    </CardStyle>
  );
}

UserCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  photo: PropTypes.string,
};

UserCard.defaultProps = {
  firstName: '',
  lastName: '',
  photo: '',
};
