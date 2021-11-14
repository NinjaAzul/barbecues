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
 padding: 0 1.5rem;
 display: grid;
 grid-gap: 1rem;
 width: 100%;

 @media (min-width: 700px) {
    place-items: center;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
  }

 @media (max-width: 1100px) {
    place-items: center;
    justify-content: center;
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }



  @media (min-width: 1680px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;



