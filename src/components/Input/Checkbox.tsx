import { useState } from "react";

import { ICheckboxProps } from "../../types/input/input.types";


// eslint-disable-next-line @typescript-eslint/naming-convention
function Checkbox(props: ICheckboxProps) {
    const [isChecked, setIsChecked] = useState(false);

    const { text = 'None Provided', inputClassName = '', labelClassName = '' } = props
    return (
        <>
            <div className="flex items-center">
                <input id="checked-checkbox" type="checkbox" value="" className={`w-4 h-4 text-custom_white bg-custom_white border-custom_white rounded-sm focus:ring-blue-500 ${inputClassName}`} checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                />
                <label htmlFor="checked-checkbox" className={`ms-2 text-sm font-medium text-custom_white  ${labelClassName}`}>{text}</label>
            </div>
        </>
    )
}

export default Checkbox