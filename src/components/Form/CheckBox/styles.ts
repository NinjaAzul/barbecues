import styled, { css } from 'styled-components';

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  label {
    cursor: pointer;

    &.check {
      width: 25px;
      height: 25px;
      background: #fff;
      border-radius: 50%;
      color: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      border: 3px solid #998220;
    }

    span{
      width: 17px;
      height: 17px;
      background: var(--main);
      border-radius: 50%;
      color: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
    }

    &.text {
      color: #fff;
      font-size: 13px;
      width: calc(100% - 30px);
      font-weight: 400;
    }
  }
`;