import styled, { css } from 'styled-components';

interface ContainerProps {
  minHeader?: boolean;
}


export const Container = styled.div<ContainerProps>`
 display: flex;
 width: 100%;
 height: 38vh;
 background: var(--main);

 ${({ minHeader }) =>
    minHeader &&
    css`
      height: 12.6rem;
    `}
`;



export const Content = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;


.bgWrap {
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;

  & h1 {
  font-family: "Raleway", sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 800;
  line-height: 0.1875rem;
  }

  & button {
    border-radius:50%;
    border: 1px solid #876e0b;
    color: #876e0b;
    background:#ceae2b42;
    padding: 0.3rem;


    position: relative;
    bottom: 30%;
  }

  & .btn-signOut {
    border-radius:30%;
    border: 1px solid #DC1637;
    color:#DC1637;
    background: #dc16372e;
  }
}

`;
