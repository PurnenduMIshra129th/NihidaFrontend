export interface ICheckboxProps {
    text?: string
    inputClassName?: string
    labelClassName?: string
}

export interface IFormikInputProps {
  placeholder?: string;
  className?: string;
  label?: string;
  name: string; 
  type?: string;
  isTextArea?: boolean; 
  rows?: number;
  required?: boolean;
  transformOnBlur?: (value: string) => string [];
}

export interface IInputProps{
  placeholder?:string
  className?:string
  label?:string
  id?:string
  type?:string
}

export interface ISupportFormInputProps {
    placeholder?: string
    className?: string
    Icon?: React.ElementType;
}