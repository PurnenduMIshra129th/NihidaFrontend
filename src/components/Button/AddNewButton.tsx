import { IButtonProps } from "../../types/Buttons/button.type"
import { PlusIcon } from "../Icons/Icon"
import Button from "./Button"

// eslint-disable-next-line @typescript-eslint/naming-convention
function AddNewButton(props: IButtonProps) {
    const {onClick = () => {}} = props
  return (
     <div className="relative group">
        <Button name="Add new" className="w-[14rem] group-hover:text-custom_yellow" onClick={onClick}/>
        <div className="absolute top-[8px] left-[45px]">
            <PlusIcon className="group-hover:text-custom_yellow text-custom_white"/>
        </div>
      </div>
  )
}

export default AddNewButton