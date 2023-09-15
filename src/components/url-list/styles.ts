import styled from 'styled-components';

export const Container = styled.div`
  .result-links {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    width: 100%;

    img {
      height: 20px;
      width: auto;
    }

    p {
      color: #343a40;
      font-weight: 700;
    }
  }

  position: absolute;
  top: 5rem;

  right: 3rem;

  width: 400px;
  height: calc(100% - 6rem);

  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding: 2rem 1rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 0 20px;

    height: 100%;
    width: 100%;

    overflow-y: scroll;
  }

  li {
    position: relative;

    div,
    input {
      height: 50px;
      width: 100%;
      outline: none;
      border: none;
      border: 1px solid lightgray;
      border-radius: 10px;
    }

    input {
      padding: 0 3rem 0 1rem;
    }

    button {
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translate(0, -50%);

      display: flex;
      align-items: center;
      justify-content: center;

      height: 30px;
      width: 30px;

      background-color: transparent;
      border: none;
    }

    img {
      height: 20px;
      width: 20px;
    }

    button:hover {
      cursor: pointer;
      background-color: #c8c8c8;
      border-radius: 50%;
    }
  }
`;
