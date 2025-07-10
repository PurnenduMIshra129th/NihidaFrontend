import { ITypographyProps } from "../../types/component/component.types"

// eslint-disable-next-line @typescript-eslint/naming-convention
function Typography(props:ITypographyProps) {
    const {text='No text provided',className=''} = props
  return (
    <>
    <p className={`text-custom_black text-sm md:text-lg leading-relaxed ${className}`}>{text}</p>
    </>
  )
}

export default Typography