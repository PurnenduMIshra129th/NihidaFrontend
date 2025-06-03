import { useFormikContext } from "formik";

import { IFormikFileInputProps } from "../../types/input/input.types";
import { defaultImage } from "../../utils/constant";

// eslint-disable-next-line @typescript-eslint/naming-convention
const FormikFileInput = (props: IFormikFileInputProps) => {
    const { name, label, className, currentFileName = '' } = props
    const { setFieldValue } = useFormikContext();

    return (
        <div>
            {label && <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>}
            {currentFileName && (
                <img src={currentFileName || defaultImage} alt="not found" className="w-full h-20 object-cover"/>
            )}

            <input
                type="file"
                id={name}
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 outline-none focus:ring-0 ${className}`}
                onChange={(event) => {
                    const file = event.currentTarget.files?.[0];
                    if (file) {
                        setFieldValue(name, file);
                    }
                }}

            />
        </div>
    );
};

export default FormikFileInput;