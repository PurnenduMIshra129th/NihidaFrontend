import { IViewAllProps } from "../../types/Buttons/button.type";
import { ArrowRightDoubleFillIcon } from "../Icons/Icon";
import Button from "./Button"
// eslint-disable-next-line @typescript-eslint/naming-convention
function ViewAllButton(props: IViewAllProps) {
  const { text = 'Nothing is provide' , onClick = () => {} } = props;
  return (
    <>
      <div className="relative group">
        <Button name={text} className="w-[14rem] group-hover:text-custom_yellow" onClick={onClick}/>
        <div className="absolute top-[8px] right-[25px]">
          <ArrowRightDoubleFillIcon className="text-custom_white group-hover:text-custom_yellow"/>
        </div>
      </div>
    </>
  )
}

export default ViewAllButton