import styled from 'styled-components';

const CardStyle = styled.section`
  .scene {
    width: 200px;
    height: 260px;
    border: 1px solid #ccc;
    margin: 40px 0;
    perspective: 600px;
  }

  .card {
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    cursor: pointer;
    position: relative;
  }

  .card.is-flipped {
    transform: rotateY(180deg);
  }

  .card__face {
    position: absolute;
    width: 100%;
    height: 100%;
    line-height: 260px;
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: 40px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .card__face--front {
    background: red;
  }

  .card__face--back {
    background: blue;
    transform: rotateY(180deg);
  }
`;

export default CardStyle;
