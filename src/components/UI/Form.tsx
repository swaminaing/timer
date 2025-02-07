import { FormEvent, forwardRef, useImperativeHandle, useRef, type ComponentPropsWithoutRef } from "react";

export type FormHandle = {
  clear: () => void;
}

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (data: unknown) => void;
};

const Form =  forwardRef<FormHandle, FormProps>(function Form({ onSave, children, ...otherProps }, ref) {
  const form = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
      clear: () => {
        form.current?.reset();
      }
    }
  })

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
  }

  return (
    <form action="" onSubmit={handleSubmit} {...otherProps} ref={form}>
      {children}
    </form>
  );
});

export default Form;
