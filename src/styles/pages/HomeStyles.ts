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
`;



