import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  width: 500px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem;
  border-radius: 10px;

  background-color: #fff;

  .result_link {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    width: 100%;

    img {
      height: 30px;
      width: auto;
    }

    p {
      color: #343a40;
      font-weight: 700;
    }
  }

  .link {
    height: 50px;

    border-radius: 10px;
    border: 1px solid lightgray;
    padding: 0 1rem;

    outline: none;
  }
`;
