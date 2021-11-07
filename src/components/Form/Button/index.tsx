import React, {
  ReactNode,
  ButtonHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
} from "react";

import { CircularProgress } from "@material-ui/core";

import * as Styles from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  children: ReactNode;
  containerClass?: string;
  variant?: "transparent" | "red" | "green" | undefined;
  loading?: boolean;
  loadingSize?: number;
  mb?: string;
}

const ButtonBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    children,
    containerClass,
    variant,
    loading,
    loadingSize,
    mb,
    ...rest
  }: ButtonProps,
  ref
) => {
  return (
    <Styles.Container className={containerClass} mb={mb}>
      <Styles.ButtonComponent
        {...rest}
        variant={variant}
        ref={ref}
        disabled={loading || rest.disabled}
      >
        {loading && <CircularProgress size={loadingSize} color="inherit" />}
        {!loading && children}
      </Styles.ButtonComponent>
    </Styles.Container>
  );
};

export const Button = forwardRef(ButtonBase);
