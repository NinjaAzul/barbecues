import styled, { css } from 'styled-components';

export const Container = styled.div`
 height: 2.75rem;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: space-between;
 border-bottom: 1px solid rgba(231, 225 ,43 , 0.5);
 padding: 1.625rem;
 gap:1rem;

 @media (max-width: 600px){
   flex-direction: column;
   border-bottom: none;
   border-top: 1px solid rgba(231, 225 ,43 , 0.5);
   padding: 1rem;
 }


 .aside{
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   gap:0.5rem;

   @media (max-width: 600px){
    justify-content: center;
 }


   h2 {
     font-size: 1rem;
   }

   .checked {
     text-decoration: line-through;
   }
 }

 .main{
  gap:1.25rem;
  width: 100%;
  display: flex;
   align-items: center;
   justify-content: flex-start;


   h1 {
     font-size: 1rem;
   }


   .checked {
     text-decoration: line-through;
   }
 }

 .btn {
   width: 1.5rem;
   height: 1.5rem;
 }
`;