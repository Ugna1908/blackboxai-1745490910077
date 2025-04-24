import 'react';

declare module 'react' {
  export interface FormEvent<T = Element> {
    preventDefault(): void;
    target: T;
  }

  export interface ChangeEvent<T = Element> {
    target: T & {
      name: string;
      value: string;
    };
  }

  export interface HTMLAttributes<T> {
    className?: string;
    id?: string;
    name?: string;
    type?: string;
    value?: string | number | readonly string[];
    onChange?: (event: ChangeEvent<T>) => void;
    onSubmit?: (event: FormEvent<T>) => void;
    required?: boolean;
    htmlFor?: string;
  }

  export interface DetailedHTMLProps<E extends HTMLAttributes<T>, T> {
    [key: string]: any;
  }

  export interface FC<P = {}> {
    (props: P): JSX.Element | null;
  }

  export const useState: <T>(initialState: T | (() => T)) => [T, (newState: T | ((prevState: T) => T)) => void];
}
