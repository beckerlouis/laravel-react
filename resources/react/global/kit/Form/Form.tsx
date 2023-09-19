import React, { createContext, useContext } from 'react';

interface FormStateInterface {
  data?: any;
  setData?: React.Dispatch<any>;
  errors?: { [name: string]: string };
}

const FormStateContext = createContext<FormStateInterface | undefined>(
  undefined,
);

export const useFormState = function () {
  const context = useContext(FormStateContext);

  if (!context) {
    throw new Error('useFormState must be used inside a `FormStateProvider`');
  }

  return context;
};

export type InputFormProps<
  T extends string | number | boolean | { label: string; desc?: string }
> = {
  value: T;
  setValue: React.Dispatch<T>;
  name: string;
};

export type FormProps = React.HTMLAttributes<HTMLFormElement> &
  FormStateInterface & {
    children: React.ReactNode;
  };

export const Form = ({
  children,
  data,
  setData,
  errors,
  ...rest
}: FormProps) => (
  <FormStateContext.Provider
    value={{
      data,
      setData,
      errors,
    }}
  >
    <form {...rest}>{children}</form>
  </FormStateContext.Provider>
);

export default Form;
