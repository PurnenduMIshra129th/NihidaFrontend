import { IHeadingProps } from "../../types/Text/text.types"
import Typography from "./Typography"
// eslint-disable-next-line @typescript-eslint/naming-convention
function Heading(props : IHeadingProps) {
    const {text = 'No Heading Provided !' , className = ''}=props
  return (
   <>
   <Typography text={text} className={`text-custom_orange_1 text-2xl md:text-3xl lg:text-4xl font-bold ${className}`}/>
   </>
  )
}

export default Heading