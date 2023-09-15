import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .error {
    position: absolute;
    bottom: -18px;
    right: 0;
    color: red;
    font-size: 12px;
    margin-left: 10px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-co lor 9999s ease-in-out 0s;
  }

  input {
    width: 100%;
    outline: none;
  }
`;
