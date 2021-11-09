import styled, { css } from 'styled-components';

interface ContainerProps {
  minHeader?: boolean;
}


export const Container = styled.div<ContainerProps>`
 display: flex;
 width: 100%;
 height: 43vh;
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
  display: flex;
  align-items: center;
  justify-content: center;
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
}

`;
