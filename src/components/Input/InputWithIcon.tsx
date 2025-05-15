import { MessageIcon } from "../Icons/Icon"
import Input from "./Input"

// eslint-disable-next-line @typescript-eslint/naming-convention
function InputWithIcon() {
    return (
        <>
            <div className="flex flex-row items-center bg-custom_maroon border-2 border-custom_maroon">
                <div className="w-[15%] flex justify-center">
                    <MessageIcon className='text-custom_white'/>
                </div>
                <div className="w-[85%]">
                    <Input placeholder="nihida@gmail.com"/>
                </div>
            </div>
        </>
    )
}

export default InputWithIcon