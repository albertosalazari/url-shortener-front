import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  width: 500px;

  padding: 2rem;
  border-radius: 10px;

  background-color: #fff;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      width: 100%;
    }

    input {
      height: 50px;

      border-radius: 10px;
      border: 1px solid lightgray;
      padding: 0 1rem;
    }

    label {
      color: #343a40;
      font-weight: 700;
    }

    .label_title {
      img {
        height: 20px;
        width: auto;
      }

      display: flex;
      gap: 0.5rem;
      align-items: center;
    }

    button {
      height: 50px;
      background-color: #a2dcf0;
    }
  }

  .alias {
    display: flex;
    gap: 1rem;
    p {
      font-size: 1rem;
      margin-top: auto;
      margin-bottom: auto;
      color: lightgray;
    }
  }
`;
