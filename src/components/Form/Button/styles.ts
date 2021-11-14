import { darken } from 'polished';
import styled, { css } from 'styled-components';

type ContainerProps = {
  mb?: string;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 3rem;
  width: 100%;
  text-decoration: none;
margin-bottom: ${(props => props.mb)};
`;

type ButtonComponentProps = {
  variant?: 'transparent' | 'red' | 'green' | undefined;
};

export const ButtonComponent = styled.button<ButtonComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font: 700 1.125rem 'Raleway', sans-serif; 
  line-height: 1.375rem;
  padding: 1.325px 5rem;
  background: var(--black);
  color: var(--white);
  width: 100%;
  height: 2.5rem;
  border: 2px solid transparent;
  border-radius: 60px;
  text-decoration: none;
  transition: all 0.3s;

  ${(props) =>
    props.variant === 'transparent' &&
    css`
      background: transparent;
      border-color: var(--black);
      color: var(--white);

      &:hover {
        background: var(--dark) !important; 
      }
    `}

  &:disabled {
    opacity: 0.5;
    &:hover {
      cursor: not-allowed;
    }
  }


  &:not(:disabled):hover {
    background: ${darken(1, '#1B1B1F')};
  }
`;
