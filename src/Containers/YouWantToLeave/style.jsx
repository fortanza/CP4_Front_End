import styled from 'styled-components';

const FormStyle = styled.form`
  .FormUsers {
    padding-top: 1.5rem;
    font-size: 1.2em;
    width: 80%;
    margin: 0 auto;
    color: #e67a73;
  }
  .table {
    padding-bottom: 40px;
    font-weight: 900;
  }
  legend {
    padding: 3rem 0;
    text-align: center;
    font-size: 1.6em;
  }
  fieldset {
    border: 1px solid rgba(230, 122, 115, 0.2);
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(230, 122, 115, 0.45),
      0 10px 10px rgba(230, 122, 115, 0.42);
    padding: 20px;
    margin-bottom: 60px;
  }
  input[type='text'] {
    width: 100%;
    font-size: 1.5rem;
    margin: 20px 20px 16px 0px;
    resize: vertical;
    border: 1px solid rgba(50, 95, 92, 0.2);
    border-radius: 5px;
    padding: 1rem 0;
    -webkit-box-shadow: inset 0px 1px 10px 2px #828282;
    box-shadow: inset 0px 1px 10px 2px #828282;
    background: white;
  }
  .button {
    box-shadow: inset 0px 39px 0px -24px #e67a73;
    background-color: #e4685d;
    border-radius: 0.5rem;
    border: 1px solid #ffffff;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 15px;
    padding: 1.5rem 2.5rem;
    text-decoration: none;
    text-shadow: 0px 1px 0px #b23e35;
    &:hover {
      background-color: #eb675e;
    }
    &::active {
      position: relative;
      top: 1px;
    }
  }
`;

export default FormStyle;
