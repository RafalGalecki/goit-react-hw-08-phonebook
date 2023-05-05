import styled from 'styled-components';

const Button = styled.button`
  font-family: Coiny;
  padding: 8px 20px 6px 20px;
  border-radius: 9px;
  border-color: white;
  background-color: blueviolet;
  color: white;
  transition-property: background-color, color;
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: magenta;
    text-shadow: 2px 2px blueviolet;
  }
`;
export default Button;
