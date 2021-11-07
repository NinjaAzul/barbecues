import styled, { css } from 'styled-components';

export const Container = styled.div`
 height: 2.75rem;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: space-between;
 border-bottom: 1px solid rgba(231, 225 ,43 , 0.5);
 padding: 1.625rem;


 .aside{
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   gap:0.5rem;
 }

 .main{
  gap:1.25rem;
  width: 100%;
  display: flex;
   align-items: center;
   justify-content: flex-start;
 }

 .btn {
   width: 1.5rem;
   height: 1.5rem;
 }
`;