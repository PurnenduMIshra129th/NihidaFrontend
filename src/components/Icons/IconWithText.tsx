import { IIconWithTextProps } from "../../types/Icons/icon.types"
import Typography from "../Text/Typography"

// eslint-disable-next-line @typescript-eslint/naming-convention
function IconWithText(props: IIconWithTextProps) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { Icon ,text ,iconClassName='',textClassName=''} = props
    return (
        <>
            <div className="flex flex-row group cursor-pointer my-3 items-end">
                <div className="mr-3 h-full flex items-center">
                <Icon size={18} className={`text-custom_green_1 group-hover:text-custom_orange_1 group-hover:underline  ${iconClassName}`}/>
                </div>
                <Typography text={text} className={`text-custom_green_1 text-[15px] font-normal leading-[1.6] hover:text-custom_orange_1 group-hover:underline  ${textClassName}`}/>
            </div>
        </>
    )
}

export default IconWithText