import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import { FieldError } from "react-hook-form";
import * as Styles from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  mb?: string;
  error?: FieldError;
  variant?:"withBorder"
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error = null, name, label, mb, variant, ...rest },
  ref
) => {
  return (
    <>
      <Styles.Container mb={mb} error={!!error}>
        <Styles.Content variant={variant}>
          <div>
            <label htmlFor={name}>{label}</label>
          </div>

          <input name={name} id={name} {...rest} ref={ref} />
          {!!error && <span className="error">{error.message}</span>}
        </Styles.Content>
      </Styles.Container>
    </>
  );
};

export const Input = forwardRef(InputBase);
