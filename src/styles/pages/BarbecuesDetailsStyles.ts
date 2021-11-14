import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    top: -48px;
    z-index: 1;
`;

export const Content = styled.div`
 padding: 0 5rem;
 flex-direction: column;
 display: flex;
 width: 100%;

 @media (max-width: 600px){
  align-items: center;
  justify-content:center;
  padding: 0 2rem;
 }

 .loading{
     width: 100%;
     display: flex;
     align-items: center;
     justify-content:center;
 }

`;



