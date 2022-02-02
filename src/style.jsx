import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Katibeh&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
:root {
    --color-head-title: white;
    --text-shadow: 4px 3px 0 #7a7a7aa8;
    --color-paragraph-title: black;
    --color-paragraph-content: black;
    --color-primary: #28abb9;
    --color-secondary: #2d6187;
    --color-third: #a8dda8;
    --font-family-first: 'Katibeh', cursive;
    --font-family-second: 'Nunito', sans-serif;
    --color-polygone: linear-gradient(
      to right bottom,
      rgba(126, 213, 111),
      rgba(40, 180, 133)
    );
  }
  h1,h2,h3,h4,h5 {
    font-family: var(--font-family-first)
  }
  body {
    font-family: var(--font-family-second)
  }
  `;
export default GlobalStyle;
