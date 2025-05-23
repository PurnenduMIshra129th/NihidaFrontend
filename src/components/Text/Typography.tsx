import { ITypographyProps } from "../../types/Text/text.types"
// eslint-disable-next-line @typescript-eslint/naming-convention
function Typography(props:ITypographyProps) {
    const {text='No text provided',className=''} = props
  return (
    <>
    <p className={`text-custom_black font-sans ${className}`}>{text}</p>
    </>
  )
}

export default Typography