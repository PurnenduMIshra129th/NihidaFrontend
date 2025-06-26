import { ErrorMessage,Field } from "formik";

import { IFormikInputProps } from "../../types/input/input.types";

// eslint-disable-next-line @typescript-eslint/naming-convention
function FormikInput(props: IFormikInputProps) {
  const {
    placeholder = "",
    className = "",
    label = "",
    name = "",
    type = "text",
    isTextArea = false,
    rows = 3,
    required = false,
  } = props;

  return (
    <div className="mb-5 w-full">
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-semibold text-gray-800"
        >
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}

      <Field
        as={isTextArea ? "textarea" : "input"}
        type={type}
        name={name}
        id={name}
        rows={isTextArea ? rows : undefined}
        placeholder={placeholder}
        className={`bg-white border border-gray-300 text-sm rounded-md w-full p-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200 ${className}`}
      />

      <ErrorMessage
        name={name}
        component="div"
        className="text-xs text-red-500 mt-1"
      />
    </div>
  );
}

export default FormikInput;