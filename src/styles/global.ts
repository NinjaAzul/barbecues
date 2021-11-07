import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    outline: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea, select {
    font: 400 1rem 'Raleway', sans-serif;
  }

  button {
  cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  #__next {
    min-height: 100vh;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media(max-width: 720px) {
    html {
      font-size: 87.50%;
    }
  }

  :root {
    --main: #FFD836;
    --main-opacity: rgba(255,216,54,0.8);
    --background-modal:#f5da6a;
    --degrade:  linear-gradient(0deg,#FFD836 78%,rgba(255,216,54,0) 100%);
    --error:#DC1637;
    --dark: #1B1B1F;
    --white: #fff;
    --white-13: rgba(0, 0, 0, 0,13);
    --black: #000000;
    --black-80: hsla(0, 0%, 0%, 0.8);
    --gray:#F1F1F1;
  }

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    border-radius: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--main);
    border-radius: 0;
  }
  &::-webkit-scrollbar-track {
    border-radius: 0;
    background: var(--main-opacity);
  }

  .slick-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ModalStyleGlobal = createGlobalStyle`
  .ReactModal__Overlay {
    opacity: 0;
    transition: all .3s;

  &.ReactModal__Overlay--after-open {
    opacity: 1;
  }

  }
  .ReactModal__Content {
    opacity: 1;
    transform: translateY(100px);
    transition: all .3s;
  }

  .modalContent {
    margin: 0 auto;
    width: fit-content;
    height: fit-content;
  }

  .ReactModal__Content--after-open {
    transform: translateY(0);
  }
`;
