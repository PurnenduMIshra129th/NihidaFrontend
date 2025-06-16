import { IButtonProps } from "../../types/Buttons/button.type"
import Button from "./Button"
// eslint-disable-next-line @typescript-eslint/naming-convention
function ReadMoreButton(props: IButtonProps) {
    const { onClick = () => { } } = props
    return (
        <>
            <Button name='Read more' className='bg-custom_maroon hover:bg-orange-100 hover:text-custom_maroon hover:border-2 hover:border-custom_maroon ' onClick={onClick} />
        </>
    )
}

export default ReadMoreButton