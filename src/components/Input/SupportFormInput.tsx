import { ISupportFormInputProps } from "../../types/input/input.types";
import Input from "./Input"

// eslint-disable-next-line @typescript-eslint/naming-convention
function SupportFormInput(props: ISupportFormInputProps) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { placeholder = '', className = '', Icon } = props;
    return (
        <>
            <div className="relative">
                {Icon && (
                    <div className="absolute right-[10px] top-[15px]">
                        <Icon size={18} className='text-custom_grey' />
                    </div>
                )}
                <Input className={`rounded-lg py-4 placeholder-custom_black text-[14px] font-semibold leading-[1.5] ${className}`} placeholder={placeholder} />
            </div>
        </>
    )
}

export default SupportFormInput