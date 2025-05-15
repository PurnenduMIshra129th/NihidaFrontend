import Typography from "./Typography"

interface IFooterTextProps{
    text?:string
}
// eslint-disable-next-line @typescript-eslint/naming-convention
function FooterText(props:IFooterTextProps) {
    const {text}=props
  return (
    <>
    <div className="border-b cursor-pointer border-custom_grey">
    <Typography text={text} className="my-3 hover:underline cursor-pointer text-custom_white_1"/>
    </div>
    </>
  )
}

export default FooterText