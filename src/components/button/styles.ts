import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  height: 40px;
  min-width: 120px;
  width: 100%;
  border-radius: 10px;
  font-weight: bold;
  color: #016ea2;
  font-size: 16px;
  padding: 5px;

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;

  :active {
    transform: translateY(2px);
  }
`;
