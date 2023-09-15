import styled from 'styled-components';

export const Spinner = styled.div`
  & {
    display: inline-block;
    aspect-ratio: 1 / 1;
    width: 30px !important;
    height: 30px !important;
    border: 3px solid transparent;
    border-radius: 50%;
    border-top-color: #016ea2;
    animation: spin 1s linear infinite;
    -webkit-animation: spin 1s linear infinite;
  }
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
