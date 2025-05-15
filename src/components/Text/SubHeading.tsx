import { ISubHeadingProps } from "../../types/Text/text.types"
import Typography from "./Typography"

// eslint-disable-next-line @typescript-eslint/naming-convention
function SubHeading(props: ISubHeadingProps) {
  const { text = 'No subHeading Provided', className = '' } = props
  return (
    <>
      <Typography text={text} className={`text-[12px] font-extrabold uppercase tracking-[2px] ${className}`}/>
    </>
  )
}

export default SubHeading