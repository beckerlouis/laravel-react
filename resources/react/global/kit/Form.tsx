import { createContext, Dispatch, HTMLAttributes, ReactNode, useContext } from 'react';

interface FormStateInterface {
  data?: any;
  setData?: Dispatch<any>;
  errors?: { [name: string]: string };
  reset?: () => void;
}

type FormProps = HTMLAttributes<HTMLFormElement> &
    FormStateInterface & {
    children: ReactNode;
};

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

export const Form = ({
  children,
  data,
  setData,
  errors,
  reset,
  ...rest
}: FormProps) => (
  <FormStateContext.Provider
    value={{
      data,
      setData,
      errors,
      reset,
    }}
  >
    <form {...rest}>{children}</form>
  </FormStateContext.Provider>
);
