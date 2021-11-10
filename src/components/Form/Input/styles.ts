import styled, { css } from 'styled-components';


interface ContainerProps {
  mb?: string;
  error?: boolean;
}

interface ContentProps {
  variant?: "withBorder";
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  min-height: 100%;
  margin-bottom: ${(props => props.mb)};

  ${(props) =>
    props.error &&
    css`
      padding-bottom: 1.25rem;
      > input {
        border-color: var(--main) !important;
      }
    `}


`;



export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  overflow: hidden;
  gap: 1rem;

  ${({ variant }) =>
    css`
      
        gap: ${variant === "withBorder" && "0.3rem"} !important;
        
     `
  }


  & div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }

   & div label {
  font-family: "Raleway", sans-serif;
  font-size: 1,3125rem;
  font-style: normal;
  font-weight: 700;
  line-height:1.5625rem;
  color:var(--black-80);
   }

   span.error {
    color: var(--error);
    font: 800 0.875rem 'Raleway', sans-serif;
  }

   & input {
   padding: 0.8rem;
   height: 2.5rem;
   width: 100%;
   font-family: "Raleway", sans-serif;
   font-size: 1.125rem;
   font-style: italic;
   font-weight: 400;
   line-height: 1.3rem;
   color:var(--black-80);
   border: 1px solid #fff;
   border-radius: 2px;
   box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);


    ${({ variant }) =>
    css`
      
        border: ${variant === "withBorder" && "1px solid var(--background-modal)"} !important;

     `
  }

   &::placeholder{
    color:var(--black-80);
   }
   }
`;
