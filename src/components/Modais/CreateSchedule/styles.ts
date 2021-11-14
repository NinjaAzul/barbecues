import styled from 'styled-components';

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 90vh;
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
    gap: 1rem;
}

.container-calendar{
  position: relative;
  z-index: 9999999999999999999999999;
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
    font-size: 1.3rem;
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
