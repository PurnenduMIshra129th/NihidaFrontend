import { Field } from "formik"

import { IFormikInputProps } from "../../types/input/input.types";

// eslint-disable-next-line @typescript-eslint/naming-convention
function FormikInput(props: IFormikInputProps) {
  const { placeholder = "", className = "", label = "", name = "", type = "text", isTextArea = false, rows = 3 } = props;
  return (
    <div>
      {label && <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>}

      <Field
        as={isTextArea ? "textarea" : "input"} 
        type={type}
        name={name}
        rows={isTextArea ? rows : undefined}
        placeholder={placeholder}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 outline-none focus:ring-0 ${className}`}
      />
    </div>
  );
}

export default FormikInput;