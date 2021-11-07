import styled, { css } from 'styled-components';

interface ContainerProps {
  whiteBackground?: boolean;
}


export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  min-height: 100vh;
  position: relative;
  background: var(--main);
;

  ${({ whiteBackground }) =>
    whiteBackground &&
    css`
      background: var(--white);
    `}
`;



export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;

  /* @media (max-width: 768px) {
    padding: 1rem 2rem;
  } */
`;


export const Footer = styled.footer`
   padding-bottom: 1rem;
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content:center;
`;