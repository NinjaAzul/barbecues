import styled, { css } from 'styled-components';

interface ContainerProps {
  minHeader?: boolean;
}


export const Container = styled.div<ContainerProps>`
 display: flex;
 min-width: 20rem;
 min-height: 12rem;
 max-width: 20rem;
 max-height: 12rem;
 background: var(--white);
 box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.08);
 border-radius: 2px;
`;



export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 100%;
padding: 1.313rem 1.5rem 2rem 1.5rem;
cursor: pointer;
gap:2.5rem;

header{
  display: flex;
  width: 100%;
  flex-direction: column;
  gap:1rem;

  div {
width: 100%;
    h1{
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    color: var(--black);
  }
  }

  
  
  

  div {
    width: 100%;
    h2{
    color: var(--black-80);
    word-break: break-all;
  }
}
}

footer{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:space-between;

  div{
    display: flex;
    align-items: center;
    gap:0.75rem;

    span {
      font-family: "Raleway", sans-serif;
font-size: 1.313rem;
font-style: normal;
font-weight: 500;
line-height:1.563rem;
color: var(--black);
    }
  }
}
`;
