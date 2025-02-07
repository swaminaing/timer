import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props },
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} ref={ref} />
    </p>
  );
});

export default Input;
