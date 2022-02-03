import styled from 'styled-components';

const CardStyle = styled.section`
  .scene {
    display: relative;
    width: 15rem;
    height: 20rem;
    margin: 40px 0;
    perspective: 600px;
  }

  .card {
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    cursor: pointer;
    border: none;
    position: relative;
  }

  .card.is-flipped {
    transform: rotateY(180deg);
  }

  .card__face {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: 40px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .card__face--front {
    background: white;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    color: #f65454;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .img-student {
    width: 10rem;
    margin-bottom: 1rem;
  }
  .card__face--back {
    background: #f65454;
    transform: rotateY(180deg);
    display: relative;
  }

  .myButton {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 3px 4px 0px 0px #899599;
    background: linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);
    background-color: #ededed;
    border-radius: 15px;
    border: 1px solid #d6bcd6;
    display: inline-block;
    cursor: pointer;
    color: #f65454;
    font-family: Arial;
    font-size: 1.5rem;
    padding: 7px 25px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #e1e2ed;
  }
  .myButton:hover {
    background: linear-gradient(to bottom, #bab1ba 5%, #ededed 100%);
    background-color: #bab1ba;
  }
  .myButton:active {
    position: relative;
    top: 1px;
  }
`;

export default CardStyle;
