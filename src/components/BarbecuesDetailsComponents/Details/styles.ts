import styled, { css } from 'styled-components';


export const Container = styled.div`
 display: flex;
padding: 1.313rem 1.313rem 6rem 1.5rem;
 width: 100%;
 background: var(--white);
 box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.08);
 border-radius: 2px;


 
@media (max-width: 600px){
  padding: 1.313rem 1.313rem -1rem 1.5rem;
}
`;



export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
width: 100%;
gap:2.688rem;
height: 100vh;

button {
        font-family: "Raleway", sans-serif;
        font-size: 0.5rem;
        font-style: normal;
        font-weight: 500;
        line-height: 0.5rem;
        color: var(--black);

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap:0.5rem;
  width: 5rem;
  height: 2rem;
  border-radius: 16px;
  background: var(--main);
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.08);
}

 header{
   display: flex;
   width: 100%;
   justify-content:space-between;
   gap:1rem;
   margin-bottom: 3rem;

   @media (max-width: 600px){
   align-items: center;
   justify-content: center;
   flex-direction: column;
}

   .side{
     display: flex;
     flex-direction: column;
     align-items: flex-end;
     gap:1rem;

     @media (max-width: 600px){
      flex-direction: none;
      align-items: center;
      justify-content: center;
}

     }

   main{
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     gap:1rem;

    

     h1{
      font-family: "Popins", sans-serif;
      font-size: 0.8rem;
      line-height: 2.063rem;
      color: var(--black);

    

     h2{
      font-family: "Raleway", sans-serif;
      font-size: 2.25rem;
      font-style: normal;
      font-weight: 700;
      line-height: 2.625rem;
      color: var(--black-80);

      @media (max-width: 600px){
        font-size: 0.1rem;
}
     }
     }


     div {
      display: flex;
      align-items: center;
      justify-content:center;
      gap:0.5rem;

      span{
        font-family: "Raleway", sans-serif;
        font-size: 1.313rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.563rem;
        color: var(--black);
      }
     }
   }
 }


`;