import styled from 'styled-components';

export const Container = styled.main`
  position: relative;

  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  background-image: url('./src/assets/images/background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-clip: padding-box;

  header {
    height: auto;
    width: auto;
  }

  div {
    align-self: center;
    justify-self: center;
  }
`;

export const Title = styled.h1`
  color: #016ea2;

  text-shadow: 2px 2px 0 #fff, 5px 5px 0 #0b9cd8, 0px 0px 20px #fff;

  font-family: 'Bungee';
  font-weight: 400;

  letter-spacing: 0.025em;
  font-size: 3rem;
  line-height: 2.5rem;
`;
