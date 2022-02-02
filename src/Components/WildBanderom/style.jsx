import styled from 'styled-components';

const BanderomStyle = styled.header`
  .wild-student-container {
    display: grid;
    grid-template-columns: repeat(15, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  .img-student {
    width: 100%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  .div1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .div2 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .div3 {
    grid-area: 3 / 2 / 4 / 3;
  }
  .div4 {
    grid-area: 2 / 3 / 3 / 4;
  }
  .div5 {
    grid-area: 1 / 3 / 2 / 4;
  }
  .div6 {
    grid-area: 3 / 4 / 4 / 5;
  }
  .div7 {
    grid-area: 2 / 5 / 3 / 6;
  }
  .div8 {
    grid-area: 1 / 5 / 2 / 6;
  }
  .div9 {
    grid-area: 1 / 7 / 2 / 8;
  }
  .div10 {
    grid-area: 2 / 7 / 3 / 8;
  }
  .div11 {
    grid-area: 3 / 7 / 4 / 8;
  }
  .div12 {
    grid-area: 1 / 9 / 2 / 10;
  }
  .div13 {
    grid-area: 2 / 9 / 3 / 10;
  }
  .div14 {
    grid-area: 3 / 9 / 4 / 10;
  }
  .div15 {
    grid-area: 3 / 10 / 4 / 11;
  }
  .div16 {
    grid-area: 3 / 11 / 4 / 12;
  }
  .div17 {
    grid-area: 1 / 13 / 2 / 14;
  }
  .div18 {
    grid-area: 2 / 13 / 3 / 14;
  }
  .div19 {
    grid-area: 3 / 13 / 4 / 14;
  }
  .div20 {
    grid-area: 1 / 14 / 2 / 15;
  }
  .div21 {
    grid-area: 2 / 15 / 3 / 16;
  }
  .div22 {
    grid-area: 3 / 14 / 4 / 15;
  }
`;

export default BanderomStyle;
