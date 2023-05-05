import styled from 'styled-components';

const Input = styled.input`
  min-width: 200px;
  width: 100%;
  margin-bottom: 10px;
  padding: 4px 12px;
  border-radius: 6px;
  border-color: white;
  outline: none;
  color: rgb(89, 22, 153);

  &::placeholder {
    color: rgba(138, 43, 226, 0.3);
  }
`;

export default Input;
