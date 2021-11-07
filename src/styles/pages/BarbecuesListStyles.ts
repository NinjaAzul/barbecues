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
 grid-template-columns: repeat(1, 1fr);
 grid-gap: 1rem;
 width: 100%;

 @media (max-width: 1100px) {
    place-items: center;
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1680px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;



