import styled from 'styled-components';

const HeaderStyle = styled.header`
  header {
    background: #f65454;
    height: 20vh;
    position: relative;
    h1 {
      font-size: 3rem;
      color: var(--color-head-title);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .imgHeader {
    height: 6rem;
    position: absolute;
    top: 25%;
    right: 5%;
  }
`;

export default HeaderStyle;
