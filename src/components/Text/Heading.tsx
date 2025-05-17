import { IHeadingProps } from "../../types/Text/text.types"
import Typography from "./Typography"
// eslint-disable-next-line @typescript-eslint/naming-convention
function Heading(props : IHeadingProps) {
    const {text = 'No Heading Provided !' , className = ''}=props
  return (
   <>
   <Typography text={text} className={`sm:text-[40px] text-[25px] font-extrabold leading-[1.3] ${className}`}/>
   </>
  )
}

export default Heading