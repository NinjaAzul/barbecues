import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import * as Styles from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  isChecked: boolean;
  handleOnChange: () => void;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, id, isChecked, handleOnChange, ...rest },
  ref
) => {
  return (
    <>
      <Styles.Checkbox>
        <input
          type="checkbox"
          hidden
          {...rest}
          ref={ref}
          checked={isChecked}
          onChange={handleOnChange}
          id={name}
        />
        <label htmlFor={name} className="check">
          {isChecked && <span />}
        </label>
        <label htmlFor={name} className="text">
          {label}
        </label>
      </Styles.Checkbox>
    </>
  );
};

export const Checkbox = forwardRef(InputBase);
