import { IDonorCardIconProps } from "../../types/Icons/icon.types"
import { QuoteAltIcon } from "./Icon"

// eslint-disable-next-line @typescript-eslint/naming-convention
function DonorCardIcon(props:IDonorCardIconProps) {
    const {text = 'No text Provide'} = props
  return (
    <div className="flex flex-row items-center hover:underline cursor-pointer">
        <li >{text}</li>
        <QuoteAltIcon className='size-4 ml-1'/>
    </div>
  )
}

export default DonorCardIcon