import styled from 'styled-components';


export const Container = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-between;
    width: 100%;
    background: var(--degrade);
    position: relative;
    top: -60px;
    z-index: 1;
`;

export const Content = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content:center;


 .link{
     margin-top: 0.5rem;
    color: var(--black-80);
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 500;
    transition: all 2s;

    &:hover{
        filter: brightness(0.7);
    }
 }

 .form{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
 }
`;



