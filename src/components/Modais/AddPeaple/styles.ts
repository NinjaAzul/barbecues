import styled from 'styled-components';

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 60rem;
  height: 30rem;
  border-radius: 3px;
  background: var(--white);
  color: var(--black);
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.08);
  padding: -10;
  transition: all 0.3s;
  gap:2rem;

.form-container-modal{
    padding: 5rem 3rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(30rem - 3rem);
    width: 100%;
}

.container-calendar{
  position: relative;
  z-index: 9999999999999999999999999;
}

.value-suggestion{
  display: flex;
    height: 2rem;
    width: 100%;
    background: var(--background-modal);
    align-items: center;
    font-weight: 700;
    text-transform: uppercase;
    justify-content: center;
    border-radius: 26px;
    margin-bottom: 2rem;
    gap:0.5rem;
}

  header{
    padding: 1rem;
    background: var(--background-modal);
    color: var(--black);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:space-between;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.08);
    height: 3rem;

    font-family: "Raleway", sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2rem;


   .hidden{
    height: 2rem;
      width: 2rem;
      border-radius: 50%;

   }

    .btn-x{
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
    }
  }
`;

export const ModalBackdrop = styled.div``;
