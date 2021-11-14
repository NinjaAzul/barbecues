import styled, { css } from 'styled-components';

interface ContainerProps {
  minHeader?: boolean;
}


export const Container = styled.div<ContainerProps>`
 display: flex;
 min-width: 20rem;
 min-height: 12rem;
 min-width: 20rem;
 min-height: 12rem;
 background: var(--gray);
 box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.08);
 border-radius: 2px;
`;



export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
gap:0.5rem;

button{
  width: 5.625rem;
  height: 5.625rem;
  border-radius: 50%;
  background: var(--main);
}

h1 {
font-family: "Raleway", sans-serif;
font-size: 1.313rem;
font-style: normal;
font-weight: 700;
line-height:1.563rem;
color: var(--black);
}
`;
